
import React from 'react';
import { Phone } from 'lucide-react';

const StickyCall = () => {
  return (
    <a href="tel:+48690353069" className="sticky-call">
      <Phone size={18} className="mr-2" />
      Zadzwoń teraz: +48 690 353 069
    </a>
  );
};

export default StickyCall;
