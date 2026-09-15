import React from 'react';
import { Calendar, Phone, ArrowRight, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';

interface QuickAppointmentBarProps {
  onOpenAppointment: () => void;
}

export const QuickAppointmentBar: React.FC<QuickAppointmentBarProps> = ({ onOpenAppointment }) => {
  return (
    <section
      id="appointment-cta-banner"
      aria-label="Appointment Quick Action"
      className="relative z-10 bg-gradient-to-r from-teal-950 via-[#0e1d24] to-slate-900 border-b border-teal-500/20 py-10 sm:py-14 text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left copy with typing animation on heading */}
          <div className="max-w-2xl text-center lg:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>Evening Appointments Available · Opens 6 PM</span>
            </div>

            <TypingText
              as="h2"
              text="READY TO TAKE CARE OF YOUR SMILE?"
              speed={22}
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-serif"
            />

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a consultation and take the next step toward better oral health. We are dedicated to providing gentle, comfortable care for you and your family.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <button
              id="cta-bar-book-btn"
              type="button"
              onClick={onOpenAppointment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="cta-bar-call-btn"
              href={`tel:${CLINIC_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-teal-300 hover:text-white border border-teal-500/30 font-semibold text-sm sm:text-base transition-all shadow-sm cursor-pointer whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
