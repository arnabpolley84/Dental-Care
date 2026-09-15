import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Star, MapPin, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  onOpenAppointment: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0e14]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-slate-800/80 py-2 sm:py-2.5'
            : 'bg-[#0a0e14]/90 sm:bg-gradient-to-b sm:from-[#090d12]/95 sm:via-[#0b1015]/85 sm:to-transparent backdrop-blur-md sm:backdrop-blur-none border-b border-slate-800/60 sm:border-transparent py-2.5 sm:py-3.5'
        }`}
      >
        {/* Top micro-bar for quick status & rating on desktop */}
        <div className="hidden lg:block border-b border-white/5 pb-2 mb-2 text-xs text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>5.0 / 5.0 Google Rating</span>
                <span className="text-slate-400 font-normal">({CLINIC_INFO.reviewCount} Reviews)</span>
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>{CLINIC_INFO.businessStatus}</span>
              </span>
              <span className="text-slate-400">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Netaji Nagar, Kolkata 700047</span>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                id="header-top-phone-link"
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>Call: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between gap-1.5 sm:gap-4">
            {/* Logo & Bengali Identity */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#home');
              }}
              className="flex items-center gap-2 sm:gap-2.5 group min-w-0 flex-1 max-w-[210px] sm:max-w-none"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-0.5 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#0d141c] rounded-[10px] flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2C8.5 2 6 4 6 7c0 3.5 1 5 1.5 7.5.5 2.5 1 5.5 2.5 5.5 1 0 1.5-1.5 2-4 .5 2.5 1 4 2 4 1.5 0 2-3 2.5-5.5.5-2.5 1.5-4 1.5-7.5 0-3-2.5-5-6-5z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors truncate">
                    {CLINIC_INFO.name}
                  </span>
                  <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-medium bg-teal-950/80 text-teal-300 border border-teal-500/30 rounded-full tracking-wide">
                    {CLINIC_INFO.bengaliName}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide truncate">
                  <span className="inline md:hidden text-teal-300 mr-1 font-semibold">{CLINIC_INFO.bengaliName} ·</span>
                  KOLKATA
                </span>
              </div>
            </a>

            {/* Desktop Navigation - STRICT SINGLE LINE */}
            <nav
              id="desktop-navbar"
              aria-label="Primary Navigation"
              className="hidden xl:flex items-center space-x-5 lg:space-x-6 text-[13px] font-semibold tracking-wider text-slate-300 whitespace-nowrap"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="hover:text-teal-400 transition-colors relative py-1 text-slate-300 hover:text-white group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Action CTAs - Header Right */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 ml-auto">
              {/* Phone Call CTA */}
              <a
                id="header-phone-cta-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                aria-label={`Call Dental Care at ${CLINIC_INFO.phoneDisplay}`}
                className="flex items-center justify-center p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-teal-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm active:scale-95 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400 animate-pulse" />
                <span className="hidden sm:inline sm:ml-1.5">CALL NOW</span>
              </a>

              {/* Book Appointment CTA Button - Visible on tablet/desktop, easily accessed in menu on mobile */}
              <button
                id="header-book-appointment-btn"
                onClick={onOpenAppointment}
                type="button"
                className="hidden sm:flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-teal-500/20 hover:shadow-teal-500/40 transition-all transform active:scale-95 whitespace-nowrap cursor-pointer shrink-0"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>BOOK APPOINTMENT</span>
              </button>

              {/* Mobile / Tablet Menu Button - Always visible, highly prominent and never cut off */}
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:w-10 sm:h-10 rounded-xl bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/50 text-teal-300 hover:text-white active:scale-95 transition-all shadow-sm cursor-pointer shrink-0"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
                    <span className="text-[11px] font-bold text-teal-300 tracking-wider sm:hidden">CLOSE</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300" />
                    <span className="text-[11px] font-bold text-teal-300 tracking-wider sm:hidden">MENU</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-backdrop"
          className="xl:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[998] transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Slide-Over Drawer */}
      <div
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`xl:hidden fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0c1219] border-l border-slate-800 z-[999] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Top Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-[#0d141c] rounded-[10px] flex items-center justify-center">
                <svg className="w-4 h-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.5 2 6 4 6 7c0 3.5 1 5 1.5 7.5.5 2.5 1 5.5 2.5 5.5 1 0 1.5-1.5 2-4 .5 2.5 1 4 2 4 1.5 0 2-3 2.5-5.5.5-2.5 1.5-4 1.5-7.5 0-3-2.5-5-6-5z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-white flex items-center gap-1.5">
                <span>{CLINIC_INFO.name}</span>
                <span className="text-xs text-teal-400 font-normal">({CLINIC_INFO.bengaliName})</span>
              </div>
              <p className="text-[11px] text-slate-400">Netaji Nagar, Kolkata</p>
            </div>
          </div>

          <button
            id="mobile-drawer-close-btn"
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Pill in Drawer */}
        <div className="px-5 pt-3">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span className="text-amber-300 font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              5.0★ (508 Reviews)
            </span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Opens 6 PM
            </span>
          </div>
        </div>

        {/* Navigation Links (Scrollable area) */}
        <nav className="flex-1 px-5 py-4 overflow-y-auto space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              id={`mobile-nav-${link.label.toLowerCase()}`}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-teal-300 hover:bg-slate-800/80 active:bg-slate-800 transition-colors"
            >
              <span>{link.label}</span>
              <span className="text-slate-500 text-xs">→</span>
            </a>
          ))}
        </nav>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-slate-800 bg-[#090d12] space-y-3">
          <button
            id="mobile-drawer-book-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenAppointment();
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-500/20 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            BOOK APPOINTMENT
          </button>

          <a
            id="mobile-drawer-call-btn"
            href={`tel:${CLINIC_INFO.phone}`}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-teal-300 hover:text-white font-semibold text-sm active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            Call: {CLINIC_INFO.phoneDisplay}
          </a>

          <div className="text-center text-[11px] text-slate-400 pt-1">
            <span>14/1C Netaji Nagar Road, Kolkata 700047</span>
          </div>
        </div>
      </div>
    </>
  );
};
