import React from 'react';
import { Phone, MapPin, Calendar, Clock, Star, ArrowUp } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#070b0f] text-slate-400 border-t border-slate-800/80 pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Clinic Brand & Bengali Name */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#0d141c] rounded-[10px] flex items-center justify-center text-teal-400 font-bold">
                  DC
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-sm text-teal-400 font-medium">
                  {CLINIC_INFO.bengaliName}
                </p>
              </div>
            </div>

            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              {CLINIC_INFO.businessType} · Netaji Nagar, Kolkata
            </p>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Patient-focused dental care providing a comfortable, clean, and attentive environment for preventive, restorative, and general oral care in South Kolkata.
            </p>

            <div className="flex items-center gap-2 pt-1 text-amber-300 text-xs font-semibold">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>5.0 / 5.0 Google Rating</span>
              <span className="text-slate-400 font-normal">({CLINIC_INFO.reviewCount} Verified Reviews)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-nav-${link.label.toLowerCase()}`}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-teal-400 transition-colors block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Contact Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">
              Clinic Location & Phone
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div className="text-slate-300">
                  <p className="text-white font-medium">14/1C, Netaji Nagar Rd,</p>
                  <p>Sahid Nagar Colony, Netaji Nagar,</p>
                  <p>Kolkata, West Bengal 700047</p>
                  <p className="text-xs text-teal-400/80 font-mono mt-1">
                    Plus Code: {CLINIC_INFO.locationPlusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a
                  id="footer-phone-link"
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-white font-bold hover:text-teal-400 transition-colors"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-emerald-400">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{CLINIC_INFO.businessStatus}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-book-appointment-btn"
                type="button"
                onClick={onOpenAppointment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© Dental Care. All Rights Reserved.</p>

          <p className="text-[11px] text-slate-400">
            ডেন্টাল কেয়ার · নেতাজি নগর, কলকাতা
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
