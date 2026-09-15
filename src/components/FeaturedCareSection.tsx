import React from 'react';
import { Calendar, Phone, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, SUPPLIED_IMAGES } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

interface FeaturedCareSectionProps {
  onOpenAppointment: () => void;
}

export const FeaturedCareSection: React.FC<FeaturedCareSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="featured-care"
      aria-label="Featured Dental Care"
      className="relative w-full py-20 lg:py-28 bg-[#090d12] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-[#0b1016] grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>ORAL HEALTH WELLNESS</span>
            </div>

            <TypingText
              as="h2"
              text="GENTLE CARE FOR BETTER ORAL HEALTH"
              speed={20}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-serif"
            />

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Regular dental checkups, preventive hygiene, and timely treatment can help patients maintain healthy teeth and gums throughout life.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              At Dental Care, we focus on identifying potential issues early—helping you avoid uncomfortable toothaches and unnecessary complications through calm, patient-guided care.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Thorough assessments with honest treatment advice</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Relaxed appointments paced for patient comfort</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Dedicated evening clinic hours starting at 6 PM</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="featured-care-book-btn"
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-500/30 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A CONSULTATION</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="featured-care-call-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-teal-300 hover:text-white border border-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Dedicated Photo Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/90 shadow-2xl group bg-slate-900">
              <SafeImage
                src={SUPPLIED_IMAGES.HERO_2}
                fallbackSrc={SUPPLIED_IMAGES.PATIENT_SMILE}
                alt="Modern Hygienic Dental Care Operatory Kolkata"
                objectPosition="center 40%"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-teal-500/30 text-xs text-slate-200 flex items-center justify-between">
                <span className="font-semibold text-teal-300">Modern Dental Operatory</span>
                <span className="text-[11px] text-slate-400">Netaji Nagar, Kolkata</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
