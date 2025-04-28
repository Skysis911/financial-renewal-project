
import React from 'react';
import { Fingerprint, Lock, Award, LucideIcon, CircleDollarSign } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="feature-card">
      <div className="text-primary mb-4">
        <Icon size={36} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyUsSection = () => {
  return (
    <section id="dlaczego" className="bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-12">Dlaczego Warto Z Nami Współpracować</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Indywidualna strategia"
            description="Twoja sytuacja, Twoje rozwiązanie."
            icon={Fingerprint}
          />
          <FeatureCard
            title="Pełna poufność"
            description="Dyskretne prowadzenie sprawy od A do Z."
            icon={Lock}
          />
          <FeatureCard
            title="Doświadczeni adwokaci"
            description="Setki skutecznie zakończonych postępowań."
            icon={Award}
          />
          <FeatureCard
            title="Obsługa 360°"
            description="Dokumenty, wniosek, sąd, plan spłat lub umorzenie zobowiązań."
            icon={CircleDollarSign}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
