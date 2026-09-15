import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, CheckCircle, ShieldCheck } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';

export const ReviewsSection: React.FC = () => {
  const [count, setCount] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Animated counter for 508 reviews when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1800;
          const steps = 60;
          const increment = 508 / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= 508) {
              setCount(508);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section
      id="reviews"
      aria-label="Patient Testimonials and Google Reviews"
      className="relative py-20 lg:py-28 bg-[#0b1016] text-slate-100 overflow-hidden"
    >
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <TypingText text="PATIENT TRUST & FEEDBACK" speed={22} />
          </div>

          <TypingText
            as="h2"
            text="WHAT OUR PATIENTS SAY"
            speed={22}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Trusted by patients across Netaji Nagar and Kolkata. Every review reflects real experiences with compassionate care and gentle treatment.
          </p>
        </div>

        {/* Highlight Section: 5.0 Rating + Animated 508 Counter */}
        <div
          ref={counterRef}
          id="review-highlight-metric"
          className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-teal-950/40 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-amber-400 font-serif tracking-tight">
                  5.0
                </span>
                <span className="text-xl sm:text-2xl text-slate-400 font-medium">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="h-12 w-px bg-slate-700 hidden md:block" />

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                {count}+ <span className="text-xl sm:text-2xl font-bold font-sans text-amber-300">Google Reviews</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Verified feedback from patients visiting our Netaji Nagar clinic
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>100% Verified Google Patient Experiences</span>
            </div>
          </div>
        </div>

        {/* Real Reviews Cards (strictly using supplied reviews without fabricating) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-850 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  {review.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-[11px] font-semibold">
                      {review.badge}
                    </span>
                  )}
                </div>

                <Quote className="w-8 h-8 text-teal-500/20 mb-3 group-hover:text-teal-400/40 transition-colors" />

                {/* Review Text */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Mention */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{review.author}</span>
                  <span className="text-slate-400 text-[11px]">{review.source}</span>
                </div>

                {review.doctorMentioned && (
                  <div className="text-right">
                    <span className="text-teal-400 font-medium text-[11px] block flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-teal-400" />
                      {review.doctorMentioned}
                    </span>
                    <span className="text-[10px] text-slate-400">Treated Doctor</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Review Footer Note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <span>Verified patient reviews from Google Business Profile for Dental Care (Netaji Nagar, Kolkata).</span>
          </p>
        </div>
      </div>
    </section>
  );
};
