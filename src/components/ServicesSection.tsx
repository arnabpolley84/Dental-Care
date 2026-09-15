import React, { useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Activity,
  ShieldCheck,
  Layers,
  HeartHandshake,
  Smile,
  Columns,
  CheckCircle2,
  Heart,
  Award,
  Sun,
  Calendar,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { DENTAL_SERVICES, CLINIC_INFO } from '../data/clinicData';
import { TypingText } from './TypingText';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Preventive Care', 'Restorative Care', 'Prosthodontics', 'Oral Care', 'Periodontal Care'];

  const filteredServices =
    selectedCategory === 'All'
      ? DENTAL_SERVICES
      : DENTAL_SERVICES.filter((s) => s.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  // Icon mapping helper
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope': return Stethoscope;
      case 'Sparkles': return Sparkles;
      case 'Activity': return Activity;
      case 'ShieldCheck': return ShieldCheck;
      case 'Layers': return Layers;
      case 'HeartHandshake': return HeartHandshake;
      case 'Smile': return Smile;
      case 'Columns': return Columns;
      case 'CheckCircle2': return CheckCircle2;
      case 'Heart': return Heart;
      case 'Award': return Award;
      case 'Sun': return Sun;
      default: return Smile;
    }
  };

  return (
    <section
      id="services"
      aria-label="Dental Services"
      className="relative py-20 lg:py-28 bg-[#0b1016] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <Smile className="w-3.5 h-3.5 text-teal-400" />
            <TypingText text="OUR DENTAL SERVICES" speed={20} />
          </div>

          <TypingText
            as="h2"
            text="COMPLETE DENTAL CARE FOR YOUR SMILE"
            speed={20}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We provide attentive general dental care focused on oral hygiene, comfort, and restorative health. Ask our clinic about any treatment category to learn what suits your needs best.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/30'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Varied Composition Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = getServiceIcon(service.iconName);
            const isFeatured = index === 0 && selectedCategory === 'All';

            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-to-br from-teal-950/80 via-slate-900 to-slate-900 border border-teal-500/40 shadow-xl'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-teal-400/90 bg-teal-950/70 border border-teal-500/20 px-2.5 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-3">
                    {service.description}
                  </p>

                  {service.details && (
                    <p className="text-xs text-slate-400 leading-normal mb-4 bg-slate-950/40 p-3 rounded-lg border border-slate-800/60">
                      {service.details}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5 text-teal-400" />
                    Ask our clinic about care
                  </span>

                  <button
                    type="button"
                    onClick={() => onSelectService(service.name)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-500/15 hover:bg-teal-500/30 text-teal-300 hover:text-white border border-teal-500/30 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note / Disclaimer below services */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto space-y-2">
          <p>
            Treatment recommendations are provided following clinical evaluation at Dental Care in Netaji Nagar.
          </p>
          <p className="text-slate-400">
            For specific treatment questions or to schedule your visit, call{' '}
            <a href={`tel:${CLINIC_INFO.phone}`} className="text-teal-400 font-bold hover:underline">
              {CLINIC_INFO.phoneDisplay}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};
