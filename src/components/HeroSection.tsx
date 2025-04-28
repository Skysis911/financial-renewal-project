
import React from 'react';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-black/55 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')", 
          backgroundPosition: 'center'
        }}
      ></div>
      
      <div className="container-custom relative z-20 text-white py-16">
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Upadłość Konsumencka – Zacznij Nowy Rozdział Bez Długów
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Bezpłatna 15-minutowa konsultacja online z adwokatem. Sprawdź, czy to rozwiązanie dla Ciebie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#konsultacja" className="btn-primary">
              Umów konsultację
            </a>
            <a href="tel:+48690353069" className="btn-secondary flex items-center justify-center gap-2">
              <Phone size={18} />
              +48 690 353 069
            </a>
          </div>
          
          <div className="border-t border-white/30 pt-6 mt-4">
            <p className="text-white/90">
              Adwokat Magdalena Jędrocha | Adwokat Paul von Ehren
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
