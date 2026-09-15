import React from 'react';
import { CheckCircle2, Phone, Calendar, ArrowRight, Heart, Sparkles, MapPin } from 'lucide-react';
import { CLINIC_INFO, SUPPLIED_IMAGES } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

interface AboutSectionProps {
  onOpenAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointment }) => {
  const values = [
    {
      title: 'Comfort-Focused Care',
      desc: 'Gentle, attentive treatment designed to ease apprehension for patients of all ages.'
    },
    {
      title: 'Hygienic Environment',
      desc: 'Rigorous cleanliness and sanitized treatment spaces for your family’s safety.'
    },
    {
      title: 'Clear Communication',
      desc: 'Every procedure and oral health step is explained thoroughly so you feel confident.'
    },
    {
      title: 'Patient-First Philosophy',
      desc: 'Care tailored around your health, comfort, and well-being every visit.'
    }
  ];

  return (
    <section
      id="about"
      aria-label="About Dental Care"
      className="relative py-20 lg:py-28 bg-[#0b1016] text-slate-100 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Cinematic Fade Treatment */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              {/* Image */}
              <div className="aspect-[4/3] sm:aspect-[16/11] w-full">
                <SafeImage
                  src={SUPPLIED_IMAGES.HERO_3}
                  fallbackSrc={SUPPLIED_IMAGES.HERO_2}
                  alt="Doctor Consultation and Patient Dental Care in Kolkata"
                  objectPosition="center 30%"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gentle bottom-only shadow for the badge legibility */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b1016]/90 to-transparent pointer-events-none" />

              {/* Floating Verified Trust Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#0a0e14]/90 backdrop-blur-md p-4 rounded-xl border border-teal-500/30 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-teal-300" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>{CLINIC_INFO.name}</span>
                    <span className="text-xs text-teal-400 font-normal">({CLINIC_INFO.bengaliName})</span>
                  </div>
                  <p className="text-xs text-slate-300">Gentle Patient Care · Netaji Nagar, Kolkata</p>
                </div>
              </div>
            </div>

            {/* Subtle decorative accent */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 h-24 bg-teal-500/10 rounded-2xl -z-10 blur-sm" />
          </div>

          {/* Right Column: Information Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5 text-teal-400" />
              <TypingText text="ABOUT DENTAL CARE" speed={20} />
            </div>

            {/* Section Heading */}
            <TypingText
              as="h2"
              text="Caring for Your Smile With Comfort and Attention"
              speed={20}
              delay={100}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight font-serif"
            />

            {/* Paragraphs with verified content only */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Dental Care is a patient-focused dental clinic located in Netaji Nagar, Kolkata, dedicated to providing a comfortable and welcoming environment for dental care.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The clinic places importance on patient comfort, cleanliness, careful treatment, and clear communication throughout the dental care journey. We take the time to listen to your concerns, answer your questions, and ensure every appointment is conducted with gentle consideration.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {values.map((v) => (
                <div key={v.title} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-semibold text-sm mb-1">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>{v.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-6">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-book-btn"
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="about-call-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                id="about-location-link"
                href="#contact"
                className="text-xs text-teal-400 hover:text-teal-300 font-medium flex items-center gap-1.5 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Netaji Nagar Clinic Address</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
