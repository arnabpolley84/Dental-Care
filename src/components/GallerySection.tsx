import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Shield } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { TypingText } from './TypingText';
import { SafeImage } from './SafeImage';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section
      id="gallery"
      aria-label="Clinic Photo Gallery"
      className="relative py-20 lg:py-28 bg-[#090d12] text-slate-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider uppercase">
            <Camera className="w-3.5 h-3.5 text-teal-400" />
            <TypingText text="CLINIC TOUR" speed={22} />
          </div>

          <TypingText
            as="h2"
            text="OUR CLINIC"
            speed={24}
            delay={80}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-serif"
          />

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A closer look at Dental Care in Netaji Nagar, Kolkata. A calm, clean, and patient-centered environment.
          </p>
        </div>

        {/* Dynamic Gallery Grid */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`${item.aspect || 'col-span-12 md:col-span-6 aspect-[16/10]'} relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group cursor-pointer shadow-lg hover:border-teal-500/50 transition-all duration-300`}
              onClick={() => openLightbox(idx)}
            >
              <SafeImage
                src={item.imageUrl}
                fallbackSrc={item.fallbackUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient overlay for caption & hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d12] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Corner expand icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4 text-teal-300" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-left">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Info Note */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Shield className="w-4 h-4 text-teal-400" />
          <span>Clean and hygienic operatory maintained for patient safety</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
              <SafeImage
                src={GALLERY_ITEMS[selectedImageIndex].imageUrl}
                fallbackSrc={GALLERY_ITEMS[selectedImageIndex].fallbackUrl}
                alt={GALLERY_ITEMS[selectedImageIndex].title}
                className="w-full h-full max-h-[75vh] object-contain bg-black"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-base sm:text-lg font-bold text-white">
                {GALLERY_ITEMS[selectedImageIndex].title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {GALLERY_ITEMS[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
