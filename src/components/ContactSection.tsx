
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

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
                  <p className="text-gray-700">123 Airport Road, Airport City</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-medium flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-secondary" /> Phone
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700">+123 456 7890</p>
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
              <div className="h-[300px] rounded-lg overflow-hidden border border-gray-300">
                <iframe 
                  title="Guesthouse Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30594994064!2d-74.25986603649139!3d40.697149422098525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1622241282283!5m2!1sen!2s" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  loading="lazy">
                </iframe>
              </div>
            </div>
          </div>

          <div id="booking">
            {/* This will be filled by the BookingForm component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
