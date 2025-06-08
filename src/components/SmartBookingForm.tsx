
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format, differenceInDays } from 'date-fns';
import { CalendarIcon, User, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useSearchParams } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface Room {
  id: string;
  name: string;
  price: number;
  capacity: number;
  description: string;
}

const SmartBookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedRoomId = searchParams.get('room');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomType: selectedRoomId || '',
    guests: '1',
    checkIn: undefined as Date | undefined,
    checkOut: undefined as Date | undefined,
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { toast } = useToast();

  // Fetch room types from Supabase
  useEffect(() => {
    const fetchRoomTypes = async () => {
      try {
        const { data, error } = await supabase
          .from('room_types')
          .select('*')
          .order('price');

        if (error) {
          console.error('Error fetching room types:', error);
          toast({
            title: "Error",
            description: "Failed to load room types. Using default rooms.",
            variant: "destructive",
          });
          // Fallback to hardcoded rooms
          setRooms([
            {
              id: "deluxe-twin",
              name: "Deluxe Twin Bed Room",
              price: 70,
              capacity: 2,
              description: "Elegant room with two comfortable twin beds"
            },
            {
              id: "deluxe-single",
              name: "Deluxe Single Bed Room",
              price: 70,
              capacity: 1,
              description: "Premium single room with luxurious furnishings"
            },
            {
              id: "extra-bed",
              name: "Extra Bed",
              price: 35,
              capacity: 1,
              description: "Additional comfortable bed for any room"
            }
          ]);
        } else {
          // Transform Supabase data to match our Room interface
          const transformedRooms = data.map(room => ({
            id: room.room_id,
            name: room.name,
            price: Number(room.price),
            capacity: room.capacity,
            description: room.description || ''
          }));
          setRooms(transformedRooms);
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        toast({
          title: "Error",
          description: "Failed to connect to database. Using default rooms.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRoomTypes();
  }, [toast]);

  // Calculate price whenever dates or room type changes
  useEffect(() => {
    if (formData.checkIn && formData.checkOut && formData.roomType) {
      const selectedRoom = rooms.find(room => room.id === formData.roomType);
      if (selectedRoom) {
        const nightCount = differenceInDays(formData.checkOut, formData.checkIn);
        setNights(nightCount);
        setTotalPrice(selectedRoom.price * nightCount);
      }
    } else {
      setNights(0);
      setTotalPrice(0);
    }
  }, [formData.checkIn, formData.checkOut, formData.roomType, rooms]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.checkIn || !formData.checkOut) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.roomType) {
      toast({
        title: "Error",
        description: "Please select a room type.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    const selectedRoom = rooms.find(room => room.id === formData.roomType);
    const bookingId = `BK${Date.now()}`;
    
    try {
      // Save booking to Supabase
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            booking_id: bookingId,
            guest_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address || null,
            room_type: formData.roomType,
            room_name: selectedRoom?.name || null,
            number_of_guests: parseInt(formData.guests),
            check_in_date: format(formData.checkIn, 'yyyy-MM-dd'),
            check_out_date: format(formData.checkOut, 'yyyy-MM-dd'),
            number_of_nights: nights,
            room_price: selectedRoom?.price || null,
            total_amount: totalPrice,
            special_requests: formData.specialRequests || null,
            booking_status: 'pending'
          }
        ]);

      if (error) {
        console.error('Error saving booking:', error);
        toast({
          title: "Booking Failed",
          description: "There was an error saving your booking. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Booking Confirmed!",
        description: `Your booking (ID: ${bookingId}) has been confirmed and saved to our database.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        roomType: '',
        guests: '1',
        checkIn: undefined,
        checkOut: undefined,
        specialRequests: ''
      });
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Booking Failed",
        description: "There was an unexpected error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedRoom = rooms.find(room => room.id === formData.roomType);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-8">
          <p>Loading booking form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader className="bg-[#800000] text-white rounded-t-lg">
              <CardTitle className="text-2xl font-playfair">Reservation Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Guest Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#800000] border-b pb-2">Guest Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <User size={16} />
                        Full Name *
                      </label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Mail size={16} />
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@example.com" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <Phone size={16} />
                        Phone Number *
                      </label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+256 123 456 789" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium flex items-center gap-2">
                        <MapPin size={16} />
                        Address
                      </label>
                      <Input 
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Your address" 
                      />
                    </div>
                  </div>
                </div>

                {/* Room Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#800000] border-b pb-2">Room & Stay Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Room Type *</label>
                      <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Room Type" />
                        </SelectTrigger>
                        <SelectContent>
                          {rooms.map((room) => (
                            <SelectItem key={room.id} value={room.id}>
                              {room.name} - ${room.price}/night
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Number of Guests</label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                          <SelectItem value="5+">5+ Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Check-in Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.checkIn ? format(formData.checkIn, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.checkIn}
                            onSelect={(date) => handleInputChange('checkIn', date)}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Check-out Date *</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.checkOut ? format(formData.checkOut, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.checkOut}
                            onSelect={(date) => handleInputChange('checkOut', date)}
                            initialFocus
                            disabled={(date) => 
                              date < new Date() || (formData.checkIn ? date <= formData.checkIn : false)
                            }
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Special Requests</label>
                  <textarea 
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any special requirements or requests..." 
                    rows={4}
                    className="w-full p-3 border rounded-md resize-none focus:ring-2 focus:ring-[#800000] focus:border-transparent"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing Booking..." : "Confirm Booking"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg sticky top-4">
            <CardHeader className="bg-[#4CAF50] text-white rounded-t-lg">
              <CardTitle className="text-xl font-playfair">Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {selectedRoom ? (
                <>
                  <div className="border-b pb-4">
                    <h4 className="font-semibold text-lg text-[#800000]">{selectedRoom.name}</h4>
                    <p className="text-sm text-gray-600">{selectedRoom.description}</p>
                    <p className="text-sm text-gray-600">Capacity: {selectedRoom.capacity} guest{selectedRoom.capacity > 1 ? 's' : ''}</p>
                  </div>
                  
                  {formData.checkIn && formData.checkOut && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Check-in:</span>
                        <span className="text-sm font-medium">{format(formData.checkIn, "MMM dd, yyyy")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Check-out:</span>
                        <span className="text-sm font-medium">{format(formData.checkOut, "MMM dd, yyyy")}</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-sm">Number of nights:</span>
                        <span className="text-sm font-medium">{nights}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Room rate per night:</span>
                        <span className="text-sm font-medium">${selectedRoom.price}</span>
                      </div>
                    </div>
                  )}
                  
                  {totalPrice > 0 && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-[#800000]">Total Amount:</span>
                        <span className="text-2xl font-bold text-[#4CAF50]">${totalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Includes all taxes and fees
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-gray-500">Select a room to see pricing details</p>
              )}
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-sm text-blue-800 mb-2">Included in your stay:</h5>
                <ul className="text-xs text-blue-700 space-y-1">
                  <li>• Free Wi-Fi</li>
                  <li>• Breakfast</li>
                  <li>• 24/7 front desk</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartBookingForm;
