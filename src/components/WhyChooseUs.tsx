import React from 'react';
import { Star, Heart, UserCheck, ShieldCheck, MessageSquare, MapPin, Sparkles, Check } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      id: 'p1',
      title: 'Comfort-Focused Care',
      desc: 'Care tailored to put nervous or anxious patients at ease, using gentle methods and patient-centered pacing.',
      icon: Heart,
      color: 'teal'
    },
    {
      id: 'p2',
      title: '5.0 Google Rating & 508 Reviews',
      desc: 'Consistently top-rated by 508 real patients for thoughtful care, warm conduct, and reliable results.',
      icon: Star,
      color: 'amber'
    },
    {
      id: 'p3',
      title: 'Patient-First Approach',
      desc: 'We prioritize your long-term oral health and comfort, recommending only treatments that are truly beneficial.',
      icon: UserCheck,
      color: 'teal'
    },
    {
      id: 'p4',
      title: 'Clean & Sanitized Environment',
      desc: 'A spotless, hygienic clinical atmosphere maintained with strict sterilization and clean clinical protocols.',
      icon: ShieldCheck,
      color: 'emerald'
    },
    {
      id: 'p5',
      title: 'Clear Step-by-Step Communication',
      desc: 'We explain diagnoses, options, and what to expect during appointments in plain language without rush.',
      icon: MessageSquare,
      color: 'teal'
    },
    {
      id: 'p6',
      title: 'Convenient Netaji Nagar Location',
      desc: 'Easily accessible in Sahid Nagar Colony, Netaji Nagar, Kolkata 700047 with evening consultation hours.',
      icon: MapPin,
      color: 'sky'
    }
  ];

  return (
    <section
      id="why-us"
      aria-label="Why Choose Dental Care"
      className="relative py-20 lg:py-28 bg-[#090d12] text-slate-100 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <TypingText text="WHY CHOOSE US" speed={22} />
          </div>

          <TypingText
            as="h2"
            text="Why Patients Trust Dental Care"
            speed={20}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From your first checkup to ongoing oral maintenance, here is what sets Dental Care in Netaji Nagar apart in everyday patient experience.
          </p>
        </div>

        {/* Dynamic Highlight Grid: 2 Large Feature Blocks + 4 Refined Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => {
            const IconComponent = p.icon;
            const isRating = p.id === 'p2';

            return (
              <div
                key={p.id}
                className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-300 group flex flex-col justify-between ${
                  isRating
                    ? 'bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-slate-900/90 border border-amber-500/40 shadow-xl shadow-amber-950/20'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-850 shadow-md'
                }`}
              >
                <div>
                  {/* Icon and status badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isRating
                          ? 'bg-amber-500/20 border border-amber-500/40 text-amber-400'
                          : 'bg-teal-500/15 border border-teal-500/30 text-teal-300'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {isRating && (
                      <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold">
                        508 REVIEWS
                      </span>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center text-xs text-teal-400 font-medium">
                  <Check className="w-4 h-4 mr-1.5 text-teal-400" />
                  <span>Verified Patient Care Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Bengali Identity */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-teal-950/60 via-[#0e1720] to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center shrink-0">
              <span className="text-teal-300 font-serif font-bold text-lg">ড</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                ডেন্টাল কেয়ার · নেতাজি নগর, কলকাতা
              </p>
              <p className="text-xs text-slate-400">
                Patient-friendly dental care with an emphasis on gentle treatment and genuine comfort.
              </p>
            </div>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="px-4 py-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 hover:text-white border border-teal-500/40 text-xs font-bold transition-all whitespace-nowrap"
          >
            Direct Inquiry: {CLINIC_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
