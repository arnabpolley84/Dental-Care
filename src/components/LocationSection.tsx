import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, SUPPLIED_IMAGES } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

export const LocationSection: React.FC = () => {
  // Google Maps navigation link based on Plus Code & full address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Dental Care 14/1C Netaji Nagar Rd Sahid Nagar Colony Kolkata 700047'
  )}`;

  return (
    <section
      id="contact"
      aria-label="Clinic Location and Visit Details"
      className="relative py-20 lg:py-28 bg-[#0b1016] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <TypingText text="FIND US IN KOLKATA" speed={22} />
          </div>

          <TypingText
            as="h2"
            text="VISIT DENTAL CARE"
            speed={24}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Conveniently located on Netaji Nagar Road in South Kolkata. We welcome you for evening consultations and dental checkups.
          </p>
        </div>

        {/* Location Grid: Card + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Clinic Details Card */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>{CLINIC_INFO.name}</span>
                  </h3>
                  <p className="text-xs text-teal-400 font-medium tracking-wide">
                    {CLINIC_INFO.bengaliName} · {CLINIC_INFO.businessType}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300">
                    5.0★ (508 Reviews)
                  </span>
                </div>
              </div>

              {/* Clinic Facade Image Preview */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 shadow-md group">
                <SafeImage
                  src={SUPPLIED_IMAGES.C}
                  fallbackSrc={SUPPLIED_IMAGES.A}
                  alt="Dental Care Netaji Nagar Clinic Exterior"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-3 text-xs text-teal-300 font-medium">
                  Clinic Entrance · 14/1C Netaji Nagar Road
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-white font-medium text-sm sm:text-base leading-snug">
                    14/1C, Netaji Nagar Rd,
                  </p>
                  <p className="text-slate-300 text-sm leading-snug">
                    Sahid Nagar Colony, Netaji Nagar,
                  </p>
                  <p className="text-slate-300 text-sm leading-snug">
                    Kolkata, West Bengal 700047
                  </p>
                  <p className="text-xs text-teal-400/90 mt-1 font-mono">
                    Plus Code: {CLINIC_INFO.locationPlusCode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Direct Phone Line
                  </h4>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-lg font-bold text-white hover:text-teal-300 transition-colors block"
                  >
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <span className="text-xs text-slate-400">
                    Tap to call from your mobile device
                  </span>
                </div>
              </div>

              {/* Business Hours / Status */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center shrink-0 mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Hours & Consultation
                  </h4>
                  <p className="text-emerald-400 font-semibold text-sm">
                    {CLINIC_INFO.businessStatus}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Evening appointments for busy work schedules
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <a
                id="location-call-btn"
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW: {CLINIC_INFO.phoneDisplay}</span>
              </a>

              <a
                id="location-directions-btn"
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 text-sm font-semibold transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-teal-400" />
                <span>GET DIRECTIONS (GOOGLE MAPS)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Map Preview Container */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl relative min-h-[380px] lg:min-h-full flex flex-col">
            {/* Embedded interactive OpenStreetMap centered on Netaji Nagar Kolkata */}
            <iframe
              title="Dental Care Netaji Nagar Location Map"
              width="100%"
              height="100%"
              className="w-full flex-grow min-h-[340px] border-0 filter grayscale-[25%] contrast-[105%]"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.354%2C22.478%2C88.368%2C22.492&amp;layer=mapnik&amp;marker=22.4848%2C88.3615"
            />

            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-teal-500/30 shadow-lg max-w-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-xs font-bold text-white">Dental Care (ডেন্টাল কেয়ার)</span>
              </div>
              <p className="text-[11px] text-slate-300 mt-1">
                Netaji Nagar Rd, Sahid Nagar Colony, Kolkata
              </p>
              <div className="mt-2 flex items-center gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-teal-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Bottom Bar inside map */}
            <div className="bg-slate-950/95 border-t border-slate-800 p-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                <span>Easily reachable via Netaji Nagar Main Road</span>
              </div>
              <span className="font-mono text-teal-400/90">F9J7+3M Kolkata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
