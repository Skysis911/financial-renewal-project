
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ConsultationSection = () => {
  return (
    <section id="konsultacja">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">
            Darmowa konsultacja – 15 minut online lub telefonicznie
          </h2>
          
          <div className="bg-card p-8 rounded-lg shadow-sm">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary flex-shrink-0 mr-3 mt-1" size={20} />
                <span>Otrzymasz wstępną analizę sytuacji i możliwych rozwiązań.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary flex-shrink-0 mr-3 mt-1" size={20} />
                <span>Dowiesz się, jakie dokumenty będą potrzebne.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary flex-shrink-0 mr-3 mt-1" size={20} />
                <span>Poznasz orientacyjny czas i koszty postępowania.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
