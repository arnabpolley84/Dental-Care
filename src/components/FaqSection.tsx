import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, Calendar, Sparkles } from 'lucide-react';
import { FAQ_LIST, CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';

interface FaqSectionProps {
  onOpenAppointment: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenAppointment }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative py-20 lg:py-28 bg-[#090d12] text-slate-100 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
            <TypingText text="COMMON QUESTIONS" speed={22} />
          </div>

          <TypingText
            as="h2"
            text="FREQUENTLY ASKED QUESTIONS"
            speed={22}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Helpful information about appointments, location, and what to expect when visiting Dental Care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-teal-500/50 shadow-lg shadow-teal-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  id={`faq-btn-${index}`}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-teal-500/20 text-teal-300 rotate-180'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-slate-800/60 text-slate-300 text-sm sm:text-base leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-teal-400" />
              Have a question not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with Dental Care at our Netaji Nagar clinic. We are here to help.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenAppointment}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Visit</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
