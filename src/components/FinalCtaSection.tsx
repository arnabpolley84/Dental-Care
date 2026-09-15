import React from 'react';
import { Calendar, Phone, ArrowRight, Star, Heart } from 'lucide-react';
import { CLINIC_INFO, SUPPLIED_IMAGES } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

interface FinalCtaSectionProps {
  onOpenAppointment: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="final-cta"
      aria-label="Final Appointment Call to Action"
      className="relative py-24 lg:py-32 bg-[#0a0e14] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl bg-[#0b1016]">
          {/* Background image positioned on the right */}
          <div className="absolute inset-0 w-full h-full">
            <SafeImage
              src={SUPPLIED_IMAGES.A}
              fallbackSrc={SUPPLIED_IMAGES.FALLBACK_HERO_1}
              alt="Dental Care Netaji Nagar Clinic"
              objectPosition="center 30%"
              className="w-full h-full object-cover"
            />

            {/* Premium cinematic dark-to-transparent fade */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(10, 14, 20, 0.96) 0%,
                    rgba(10, 14, 20, 0.85) 35%,
                    rgba(10, 14, 20, 0.4) 65%,
                    rgba(10, 14, 20, 0.08) 100%
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(10, 14, 20, 0.5) 0%,
                    transparent 30%,
                    rgba(10, 14, 20, 0.85) 100%
                  )
                `
              }}
            />
          </div>

          {/* Foreground content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                <Heart className="w-3.5 h-3.5 text-teal-400" />
                <span>EXPERIENCE COMFORTABLE CARE</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
                <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                5.0★ Google Rating
              </span>
            </div>

            <TypingText
              as="h2"
              text="YOUR SMILE DESERVES THE RIGHT CARE"
              speed={20}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-serif"
            />

            <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed">
              Have a dental concern or simply due for a checkup? Get in touch with Dental Care. We are dedicated to making every visit comfortable and attentive.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="final-cta-book-btn"
                type="button"
                onClick={onOpenAppointment}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-base shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>BOOK AN APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="final-cta-call-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-teal-300 hover:text-white border border-teal-500/40 font-semibold text-base backdrop-blur-md transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>CALL {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-4 text-xs text-slate-400 flex flex-wrap items-center gap-4">
              <span>Opens 6:00 PM</span>
              <span>•</span>
              <span>14/1C Netaji Nagar Rd, Kolkata</span>
              <span>•</span>
              <span>508 Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
