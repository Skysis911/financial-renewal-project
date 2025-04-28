
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white/95 shadow-sm z-50 h-16">
      <div className="container-custom h-full flex items-center justify-between">
        <a href="#" className="text-primary font-bold text-xl">Kancelaria Iustum</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="#dlaczego" className="text-text hover:text-primary transition-colors">Dlaczego My</a>
          <a href="#proces" className="text-text hover:text-primary transition-colors">Jak Pomagamy</a>
          <a href="#konsultacja" className="text-text hover:text-primary transition-colors">Konsultacja</a>
          <a href="#kontakt" className="text-text hover:text-primary transition-colors">Kontakt</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4">
            <a 
              href="#dlaczego" 
              className="px-6 py-3 text-text hover:bg-gray-100" 
              onClick={toggleMobileMenu}
            >
              Dlaczego My
            </a>
            <a 
              href="#proces" 
              className="px-6 py-3 text-text hover:bg-gray-100" 
              onClick={toggleMobileMenu}
            >
              Jak Pomagamy
            </a>
            <a 
              href="#konsultacja" 
              className="px-6 py-3 text-text hover:bg-gray-100" 
              onClick={toggleMobileMenu}
            >
              Konsultacja
            </a>
            <a 
              href="#kontakt" 
              className="px-6 py-3 text-text hover:bg-gray-100" 
              onClick={toggleMobileMenu}
            >
              Kontakt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
