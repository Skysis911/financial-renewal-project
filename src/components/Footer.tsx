
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container-custom text-center">
        <p>© Kancelaria Iustum {new Date().getFullYear()}. Wszystkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
