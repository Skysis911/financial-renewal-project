
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to a backend
    // For now we'll just show a success toast
    toast({
      title: "Formularz wysłany",
      description: "Dziękujemy za kontakt. Odezwiemy się wkrótce.",
    });
    
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
      submitted: true
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" className="bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6">Formularz kontaktowy</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Imię i nazwisko *</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="input-field"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Twoje imię i nazwisko"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">E-mail *</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Twój adres e-mail"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Telefon</label>
                <input 
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-field"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="Opcjonalny numer telefonu"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Krótkie opisanie sytuacji *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="input-field resize-none"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Opisz krótko swoją sytuację"
                ></textarea>
              </div>
              
              {/* Hidden honeypot field for spam prevention */}
              <div className="hidden">
                <input type="text" name="bot-field" />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Wyślij
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h2 className="mb-6">Dane kancelarii</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Adres</h3>
                  <address className="not-italic">
                    al. Beliny-Prażmowskiego 9/3<br />
                    31-514 Kraków
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-primary flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Telefon</h3>
                  <a href="tel:+48690353069" className="hover:text-primary transition-colors">
                    +48 690 353 069
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-primary flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <a href="mailto:kancelaria.janowski@gmail.com" className="hover:text-primary transition-colors">
                    kancelaria.janowski@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-primary flex-shrink-0 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Godziny</h3>
                  <p>Pon-Pt 8:00–18:00</p>
                </div>
              </div>
              
              <a href="tel:+48690353069" className="btn-primary w-full mt-8 flex items-center justify-center gap-2">
                <Phone size={18} />
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
