
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-3">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with us directly or use our booking form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-10">
              <p className="text-lg text-gray-700 mb-6">
                We're committed to making your stay as comfortable as possible. Feel free to contact us
                with any questions or to make special arrangements for your stay.
              </p>
              <p className="text-gray-700">
                Our friendly staff is available to assist you 24 hours a day, 7 days a week.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-secondary" /> Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700">Plot 2 Buwaya Rise Road Entebbe</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-secondary" /> Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700">+256 773 112 692</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-secondary" /> Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a href="mailto:info@airportlinkguesthouse.com" className="text-gray-700 hover:text-secondary transition-colors">
                    info@airportlinkguesthouse.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-secondary" /> Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700">24/7 Front Desk Service</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold text-primary mb-5">Find Us</h3>
              <div className="h-[300px] rounded-lg overflow-hidden border border-gray-300 bg-gray-100">
                <iframe 
                  title="Airport Link Guesthouse Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=32.445%2C0.067%2C32.461%2C0.083&amp;layer=mapnik&amp;marker=0.075253%2C32.453291"
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                <div className="mt-2 text-center">
                  <a 
                    href="https://www.openstreetmap.org/?mlat=0.075253&mlon=32.453291#map=15/0.075253/32.453291" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary/80 text-sm underline"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="contact-form">
            <Card className="p-6 shadow-lg rounded-lg bg-gradient-to-br from-[#F2FCE2] to-white">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-playfair font-bold text-[#800000]">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">We'd love to hear from you!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" className="border-[#800000]/30 focus-visible:ring-[#FFA500]" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="border-[#800000]/30 focus-visible:ring-[#FFA500]" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact / WhatsApp Number</Label>
                    <Input id="contact" placeholder="+256 77..." className="border-[#800000]/30 focus-visible:ring-[#FFA500]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message here..." className="border-[#800000]/30 focus-visible:ring-[#FFA500] h-32" />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" type="button" className="border-[#800000] text-[#800000] hover:bg-[#800000]/10">Cancel</Button>
                    <Button type="submit" className="bg-[#FFA500] hover:bg-[#E69500] text-white">Send Message</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
