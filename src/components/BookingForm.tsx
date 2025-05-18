
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';

const SimpleBookingForm: React.FC = () => {
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [adults, setAdults] = useState("1");
  const [children, setChildren] = useState("0");
  const [roomType, setRoomType] = useState("");
  const [showFullForm, setShowFullForm] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    // Show the full booking form instead of redirecting
    setShowFullForm(true);
    
    // Scroll to the full booking form
    setTimeout(() => {
      const element = document.getElementById('full-booking-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="w-full bg-[#800000] py-6 px-4 text-white">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold uppercase mb-1">ACCOMMODATION</h3>
            <p className="text-lg">GET BEST PRICE</p>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Check-in date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white text-gray-800",
                    !checkIn && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                  mode="single"
                  selected={checkIn}
                  onSelect={setCheckIn}
                  initialFocus
                  disabled={(date) => date < new Date()}
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Check-out date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white text-gray-800",
                    !checkOut && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => 
                    date < new Date() || (checkIn ? date <= checkIn : false)
                  }
                  className="pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Adults</label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger className="bg-white text-gray-800">
                <SelectValue placeholder="Adults" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Children</label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger className="bg-white text-gray-800">
                <SelectValue placeholder="Children" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="md:col-span-1">
            <Button type="submit" className="w-full bg-black hover:bg-gray-900 text-white py-3 px-6 text-lg">
              BOOK ONLINE »
            </Button>
          </div>
        </form>
      </div>
      
      {showFullForm && (
        <div id="full-booking-form" className="container mx-auto px-4 py-16 animate-fade-in">
          <FullBookingForm 
            checkInInitial={checkIn} 
            checkOutInitial={checkOut} 
            adultsInitial={adults}
            childrenInitial={children}
          />
        </div>
      )}
    </div>
  );
};

interface FullBookingFormProps {
  checkInInitial?: Date;
  checkOutInitial?: Date;
  adultsInitial?: string;
  childrenInitial?: string;
}

const FullBookingForm: React.FC<FullBookingFormProps> = ({ 
  checkInInitial, 
  checkOutInitial, 
  adultsInitial = "1",
  childrenInitial = "0"
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
  const [guests, setGuests] = useState(adultsInitial);
  const [checkIn, setCheckIn] = useState<Date | undefined>(checkInInitial);
  const [checkOut, setCheckOut] = useState<Date | undefined>(checkOutInitial);
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    if (!roomType) {
      toast({
        title: "Error",
        description: "Please select a room type.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Prepare the email data
    const emailData = {
      to: 'info@airportlinkguesthouse.com',
      subject: 'New Booking Request',
      body: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Room Type: ${roomType}
        Number of Guests: ${guests}
        Check-in Date: ${checkIn ? format(checkIn, 'PPP') : ''}
        Check-out Date: ${checkOut ? format(checkOut, 'PPP') : ''}
        Special Requests: ${specialRequests}
      `
    };

    // In a real production environment, you would send this to your server
    // For now, let's simulate a successful booking
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking request sent",
        description: "We've received your booking request and will contact you shortly to confirm your reservation.",
      });
      
      // Reset the form
      setName('');
      setEmail('');
      setPhone('');
      setRoomType('');
      setGuests('');
      setCheckIn(undefined);
      setCheckOut(undefined);
      setSpecialRequests('');
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your booking request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="booking" className="max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <div className="bg-[#800000] text-white rounded-t-lg p-6">
          <h2 className="text-2xl font-playfair">Book Your Stay</h2>
          <p className="text-gray-200">
            Fill out the form below to request a reservation
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe" 
                required 
                className="w-full p-2 border rounded"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input 
                  id="email" 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com" 
                  required 
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <input 
                  id="phone" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (123) 456-7890" 
                  required 
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="room-type" className="text-sm font-medium">Room Type</label>
                <Select value={roomType} onValueChange={setRoomType} required>
                  <SelectTrigger id="room-type">
                    <SelectValue placeholder="Select Room Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="deluxe-twin">Deluxe Twin Bed Room</SelectItem>
                    <SelectItem value="deluxe-single">Deluxe Single Bed Room</SelectItem>
                    <SelectItem value="budget-single">Budget Single Bed Room</SelectItem>
                    <SelectItem value="triple">Triple Bed Room</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="guests" className="text-sm font-medium">Number of Guests</label>
                <Select value={guests} onValueChange={setGuests} required>
                  <SelectTrigger id="guests">
                    <SelectValue placeholder="Select Number" />
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
                <label className="text-sm font-medium">Check-in Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkIn && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                      disabled={(date) => date < new Date()}
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Check-out Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !checkOut && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                      disabled={(date) => 
                        date < new Date() || (checkIn ? date <= checkIn : false)
                      }
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="special-requests" className="text-sm font-medium">Special Requests</label>
              <textarea 
                id="special-requests" 
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Any special requirements or requests..." 
                rows={4}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Complete Booking"}
            </Button>
          </form>
        </div>
        <div className="text-center text-sm text-gray-500 p-4 border-t">
          We'll respond to your booking request within 24 hours
        </div>
      </Card>
    </div>
  );
};

const BookingForm: React.FC = () => {
  return (
    <SimpleBookingForm />
  );
};

export default BookingForm;
