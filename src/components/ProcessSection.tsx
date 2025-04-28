
import React from 'react';
import { ClipboardList, FileText, Scale, PiggyBank } from 'lucide-react';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const StepCard = ({ number, title, description, icon: Icon }: StepCardProps) => {
  return (
    <div className="step-card pl-8">
      <div className="absolute top-4 left-4 text-primary font-bold text-2xl">
        {number}
      </div>
      <div className="flex items-start">
        <div className="mr-4 text-primary">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="proces">
      <div className="container-custom">
        <h2 className="text-center mb-12">Jak Pomagamy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <StepCard
            number={1}
            title="Audyt zadłużenia"
            description="Wspólnie analizujemy Twoje zobowiązania i kompletujemy dokumenty."
            icon={ClipboardList}
          />
          <StepCard
            number={2}
            title="Wniosek o upadłość"
            description="Przygotowujemy i składamy go w Twoim imieniu."
            icon={FileText}
          />
          <StepCard
            number={3}
            title="Reprezentacja w sądzie"
            description="Bronimy Twoich interesów, minimalizując stres."
            icon={Scale}
          />
          <StepCard
            number={4}
            title="Nowy plan finansowy"
            description="Wynegocjowany plan spłat lub całkowite umorzenie długu."
            icon={PiggyBank}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
