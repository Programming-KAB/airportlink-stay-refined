
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

interface MenuLayoutProps {
  children: React.ReactNode;
}

const MenuLayout: React.FC<MenuLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-white to-[#E8F5E8]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default MenuLayout;
