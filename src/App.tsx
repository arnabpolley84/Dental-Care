import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { InfoStrip } from './components/InfoStrip';
import { QuickAppointmentBar } from './components/QuickAppointmentBar';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedCareSection } from './components/FeaturedCareSection';
import { ReviewsSection } from './components/ReviewsSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('General Dental Consultation');

  const handleOpenAppointment = () => {
    setSelectedServiceForBooking('General Dental Consultation');
    setIsAppointmentModalOpen(true);
  };

  const handleSelectServiceForBooking = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0e14] text-slate-100 font-sans selection:bg-teal-500 selection:text-white relative">
      {/* 1. Sticky Header / Navigation */}
      <Header onOpenAppointment={handleOpenAppointment} />

      <main id="main-content">
        {/* 2. Cinematic Hero Slideshow with dark faded gradient on left */}
        <HeroSlider onOpenAppointment={handleOpenAppointment} />

        {/* 3. Top Information Strip */}
        <InfoStrip />

        {/* 4. Immediate Appointment CTA Section */}
        <QuickAppointmentBar onOpenAppointment={handleOpenAppointment} />

        {/* 5. About Dental Care with subtle image fade */}
        <AboutSection onOpenAppointment={handleOpenAppointment} />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Comprehensive Dental Services */}
        <ServicesSection onSelectService={handleSelectServiceForBooking} />

        {/* 8. Featured Dental Care Section */}
        <FeaturedCareSection onOpenAppointment={handleOpenAppointment} />

        {/* 9. Patient Trust / 5.0 Google Reviews & 508 Counter */}
        <ReviewsSection />

        {/* 10. Clinic Gallery with Lightbox */}
        <GallerySection />

        {/* 11. Location, Address & Map */}
        <LocationSection />

        {/* 12. Medically Responsible FAQ */}
        <FaqSection onOpenAppointment={handleOpenAppointment} />

        {/* 13. Final Appointment CTA */}
        <FinalCtaSection onOpenAppointment={handleOpenAppointment} />
      </main>

      {/* 14. Sophisticated Footer */}
      <Footer onOpenAppointment={handleOpenAppointment} />

      {/* Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={handleCloseAppointment}
        defaultService={selectedServiceForBooking}
      />
    </div>
  );
}
