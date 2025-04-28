
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyUsSection from '@/components/WhyUsSection';
import ProcessSection from '@/components/ProcessSection';
import InfoSection from '@/components/InfoSection';
import ConsultationSection from '@/components/ConsultationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import StickyCall from '@/components/StickyCall';

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyUsSection />
      <ProcessSection />
      <InfoSection />
      <ConsultationSection />
      <ContactSection />
      <Footer />
      <StickyCall />
    </>
  );
};

export default Index;
