
import React from 'react';

const InfoSection = () => {
  return (
    <section id="info" className="bg-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            Jeśli miesięczne raty przekraczają Twoje możliwości, a wierzyciele nie dają Ci spokoju, upadłość konsumencka może być kluczem do finansowego spokoju. Dowiedz się w 15 minut, czy możesz zacząć od nowa.
          </p>
          <a href="#konsultacja" className="btn-secondary text-white border-white hover:bg-white hover:text-primary">
            Sprawdź teraz
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
