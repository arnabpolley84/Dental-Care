import React from 'react';
import { Star, MessageSquare, MapPin, Phone, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const InfoStrip: React.FC = () => {
  return (
    <div
      id="info-strip"
      className="relative z-20 bg-gradient-to-r from-slate-900 via-[#0d151e] to-slate-900 border-y border-teal-500/20 py-4 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
          {/* Rating */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-base font-bold text-white">5.0 / 5.0</span>
                <span className="text-xs text-amber-400">★★★★★</span>
              </div>
              <span className="text-xs text-slate-400 block font-medium">Google Rating</span>
            </div>
          </div>

          {/* Review Count */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="text-base font-bold text-white">{CLINIC_INFO.reviewCount}+</span>
              <span className="text-xs text-slate-400 block font-medium">Patient Reviews</span>
            </div>
          </div>

          {/* Care Philosophy */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="text-base font-bold text-white">Patient-Focused</span>
              <span className="text-xs text-slate-400 block font-medium">Comfort & Hygiene</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <span className="text-base font-bold text-white">Netaji Nagar</span>
              <span className="text-xs text-slate-400 block font-medium">Kolkata 700047</span>
            </div>
          </div>

          {/* Hours & Quick Call */}
          <div className="col-span-2 sm:col-span-1 flex items-center space-x-3 pt-2 sm:pt-0 sm:px-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-teal-400" />
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-400 block">{CLINIC_INFO.businessStatus}</span>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="text-xs sm:text-sm font-bold text-white hover:text-teal-400 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-teal-400" />
                {CLINIC_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
