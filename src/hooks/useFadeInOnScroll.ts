
import { useEffect } from 'react';

export const useFadeInOnScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-fade-in');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export default useFadeInOnScroll;
