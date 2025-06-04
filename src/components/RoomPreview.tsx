
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Eye, ZoomIn } from "lucide-react";

interface RoomPreviewProps {
  room: {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity: number;
    image: string;
    features: string[];
    gallery: string[];
  };
  children: React.ReactNode;
}

const RoomPreview: React.FC<RoomPreviewProps> = ({ room, children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.gallery.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.gallery.length) % room.gallery.length);
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-[#800000]">
            {room.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <div 
                className="relative h-80 overflow-hidden rounded-lg bg-gray-100 cursor-zoom-in"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsZoomed(false)}
                onClick={toggleZoom}
              >
                <img
                  src={room.gallery[currentImageIndex]}
                  alt={`${room.name} - Image ${currentImageIndex + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100'
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : {}
                  }
                />
                
                {/* Zoom indicator */}
                <div className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full">
                  {isZoomed ? <ZoomIn className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </div>

                {/* Navigation arrows */}
                {room.gallery.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}
              </div>

              {/* Image counter */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {room.gallery.length}
              </div>
            </div>

            {/* Thumbnail navigation */}
            {room.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {room.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsZoomed(false);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-[#800000]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Room Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Badge className="bg-[#4CAF50] text-white font-medium text-lg">
                ${room.price}/night
              </Badge>
              <div className="text-sm text-gray-600">
                Capacity: {room.capacity} {room.capacity > 1 ? 'People' : 'Person'}
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">{room.description}</p>

            <div>
              <h4 className="font-semibold text-[#800000] mb-3">Room Features</h4>
              <div className="flex flex-wrap gap-2">
                {room.features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="bg-white">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link to={`/booking?room=${room.id}`} className="w-full">
                <Button className="w-full bg-[#800000] hover:bg-[#990000] transition-colors">
                  Book This Room
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoomPreview;
