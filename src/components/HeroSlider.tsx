import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, ArrowRight, Star, Shield, Award } from 'lucide-react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

interface HeroSliderProps {
  onOpenAppointment: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenAppointment }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const slide = HERO_SLIDES[currentSlideIndex];

  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setAnimKey((prev) => prev + 1);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setAnimKey((prev) => prev + 1);
  };

  // Auto-play slideshow every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToNextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, goToNextSlide]);

  const handleCtaClick = (action?: string) => {
    if (action === 'appointment') {
      onOpenAppointment();
    } else if (action === 'call') {
      window.location.href = `tel:${CLINIC_INFO.phone}`;
    } else if (action === 'reviews') {
      const element = document.querySelector('#reviews');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'contact') {
      const element = document.querySelector('#contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'about') {
      const element = document.querySelector('#about');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenAppointment();
    }
  };

  return (
    <section
      id="home"
      aria-label="Dental Care Hero Section"
      className="relative w-full min-h-[85vh] lg:min-h-[88vh] flex items-center overflow-hidden bg-[#070b10] pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background: Faded Attractive Dental Imagery with Smooth Transitions */}
      {HERO_SLIDES.map((s, index) => {
        const isActive = index === currentSlideIndex;
        return (
          <div
            key={s.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            {/* High-resolution dental image container with bright photographic clarity */}
            <div className="absolute inset-0 w-full h-full">
              <SafeImage
                src={s.imageUrl}
                fallbackSrc={s.fallbackImageUrl}
                alt={s.imageAlt}
                objectPosition={s.objectPosition || 'center 35%'}
                className="w-full h-full object-cover scale-[1.02] filter brightness-105 contrast-[1.03] transform transition-transform duration-7000 ease-out"
              />
            </div>

            {/*
              Luminous Bright Overlay:
              Significantly reduced fade opacity so dental imagery (bright smile, modern clinic)
              shines through brightly and vibrantly, with a gentle soft gradient for text readability.
            */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(7, 11, 16, 0.72) 0%,
                    rgba(7, 11, 16, 0.48) 40%,
                    rgba(7, 11, 16, 0.16) 72%,
                    rgba(7, 11, 16, 0.0) 100%
                  ),
                  linear-gradient(
                    to bottom,
                    rgba(7, 11, 16, 0.45) 0%,
                    transparent 18%,
                    transparent 82%,
                    rgba(7, 11, 16, 0.65) 100%
                  )
                `
              }}
            />

            {/* Subtle soft medical glow on the corner */}
            <div className="absolute inset-0 bg-radial-at-tl from-teal-500/10 via-transparent to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Foreground Hero Content Container - Lifted Up & Focused */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl xl:max-w-4xl space-y-5 sm:space-y-6 p-4 sm:p-6 rounded-3xl bg-slate-950/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none border border-white/5 sm:border-transparent">
          {/* Slide Eyebrow with Verified Badge */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/85 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-semibold tracking-wider uppercase backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <TypingText
                text={slide.eyebrow}
                triggerKey={`eyebrow-${animKey}`}
                speed={20}
                className="font-semibold text-teal-300"
              />
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-semibold backdrop-blur-md shadow-md">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              5.0★ Google Verified ({CLINIC_INFO.reviewCount} Reviews)
            </span>
          </div>

          {/* Slide Main Headline with Typing animation */}
          <div className="min-h-[100px] sm:min-h-[120px] lg:min-h-[145px] flex items-center">
            <TypingText
              as="h1"
              text={slide.headline}
              triggerKey={`head-${animKey}`}
              speed={24}
              delay={80}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] font-serif"
            />
          </div>

          {/* Slide Description Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed font-normal min-h-[56px] sm:min-h-[52px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
            <TypingText
              text={slide.description}
              triggerKey={`desc-${animKey}`}
              speed={12}
              delay={320}
              showCursor={false}
              className="text-slate-100"
            />
          </p>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <button
              id="hero-primary-cta"
              type="button"
              onClick={() => handleCtaClick(slide.ctaAction)}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary CTA */}
            {slide.secondaryCtaText && (
              <button
                id="hero-secondary-cta"
                type="button"
                onClick={() => handleCtaClick(slide.secondaryCtaAction)}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700/90 font-semibold text-sm sm:text-base backdrop-blur-md transition-all shadow-md cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>{slide.secondaryCtaText}</span>
              </button>
            )}
          </div>

          {/* Trust Badges below buttons */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-7 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Hygienic & Sanitized Clinic</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Patient-First Comfort Care</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span>{CLINIC_INFO.businessStatus}</span>
            </div>
          </div>
        </div>

        {/* Slideshow Controls Bar */}
        <div className="mt-8 sm:mt-10 pt-4 flex items-center justify-between border-t border-slate-800/70 max-w-3xl xl:max-w-4xl">
          {/* Slide Indicator Pills */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                id={`hero-dot-${idx}`}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.imageAlt}`}
                className="group relative py-2 focus:outline-none cursor-pointer"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentSlideIndex
                      ? 'w-10 sm:w-14 bg-gradient-to-r from-teal-400 to-emerald-400 shadow-sm shadow-teal-500/50'
                      : 'w-3 sm:w-4 bg-slate-700/80 group-hover:bg-slate-500'
                  }`}
                />
              </button>
            ))}
            <span className="text-xs text-slate-400 pl-2 font-mono">
              0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400 border-l border-slate-700 pl-3">
              {slide.imageAlt}
            </span>
          </div>

          {/* Prev/Next Arrows */}
          <div className="flex items-center space-x-2">
            <button
              id="hero-prev-btn"
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous Hero Slide"
              className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer active:scale-95 shadow-md"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              id="hero-next-btn"
              type="button"
              onClick={goToNextSlide}
              aria-label="Next Hero Slide"
              className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer active:scale-95 shadow-md"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
