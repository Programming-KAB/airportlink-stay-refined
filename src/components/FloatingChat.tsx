
import React, { useState } from 'react';
import { MessageCircle, X, Facebook } from 'lucide-react';

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat options when open */}
      {isOpen && (
        <div className="flex flex-col items-end space-y-4 mb-4 animate-fade-in">
          <a 
            href="https://wa.me/123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-[#25D366] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 13.82 2.49 15.53 3.35 17L2 22L7.05 20.67C8.48 21.45 10.18 21.89 12 21.89C17.52 21.89 22 17.41 22 11.89C22 6.37 17.52 2 12 2ZM7 14.32C8.88 15.42 10.41 15.94 12.08 15.94C15.43 15.94 18.15 13.72 18.15 11.05C18.15 8.39 15.75 6.29 12.04 6.29C8.33 6.29 5.52 8.5 5.52 10.81C5.52 11.85 5.98 12.83 6.76 13.47C6.85 13.54 6.95 13.5 7 13.4C7.11 13.05 7.24 12.74 7.38 12.46C7.42 12.39 7.4 12.31 7.33 12.25C7.05 12.03 6.82 11.5 6.82 10.85C6.82 9.18 8.46 7.66 11.88 7.66C14.74 7.66 16.43 9.06 16.43 10.77C16.43 13.44 14.67 14.61 13.12 14.61C12.37 14.61 11.8 14.05 11.99 13.41C12.23 12.61 12.7 11.76 12.7 11.2C12.7 10.71 12.39 10.28 11.74 10.28C10.95 10.28 10.35 11 10.35 12.02C10.35 12.59 10.52 12.98 10.52 12.98L9.56 16.63C9.31 17.64 9.53 18.97 9.56 19.22C9.57 19.33 9.7 19.36 9.76 19.27C9.86 19.12 11.17 17.51 11.46 16.56C11.54 16.29 11.91 14.94 11.91 14.94C12.19 15.46 13.03 15.92 13.91 15.92C16.5 15.92 18.35 13.71 18.35 10.82C18.35 8.36 16.22 6 12.26 6C7.91 6 5.33 8.57 5.33 11.15C5.33 12.94 6.22 14.5 7.26 15.3C7.61 15.55 7.94 15.48 8.07 15.14C8.18 14.87 8.3 14.6 8.44 14.31C8.52 14.14 8.46 14.01 8.32 13.9C7.56 13.38 7.14 12.3 7.14 11.29C7.14 9.25 8.76 7.62 12.02 7.62C14.85 7.62 16.33 8.98 16.33 10.71C16.33 13.67 14.72 14.8 13.32 14.8C12.64 14.8 12.05 14.33 12.24 13.77C12.46 13.08 12.84 12.34 12.84 11.84C12.84 11.41 12.61 11.05 12.07 11.05C11.44 11.05 10.91 11.66 10.91 12.5C10.91 12.94 11.07 13.24 11.07 13.24L10.14 16.38C10.08 16.65 10.04 16.92 10.01 17.19C10 17.26 10 17.32 10 17.39C10 17.47 10.05 17.5 10.13 17.5H12C17.5 17.5 22 13 22 7.5C22 4.48 15.94 2 12 2Z" clipRule="evenodd" />
            </svg>
            WhatsApp Chat
          </a>
          
          <a 
            href="https://m.me/airportlinkguesthouse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center bg-[#0078FF] text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition-all"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Messenger
          </a>
        </div>
      )}
      
      {/* Main chat button */}
      <button 
        onClick={toggleChat}
        className={`flex items-center justify-center p-4 rounded-full shadow-lg transition-all ${isOpen ? 'bg-red-600 rotate-45' : 'bg-[#800000]'}`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  );
};

export default FloatingChat;
