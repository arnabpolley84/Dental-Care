export interface HeroSlide {
  id: string;
  eyebrow: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaAction?: 'appointment' | 'reviews' | 'contact' | 'call' | 'about';
  secondaryCtaText?: string;
  secondaryCtaAction?: 'call' | 'appointment' | 'about';
  imageUrl: string;
  fallbackImageUrl?: string;
  imageAlt: string;
  objectPosition?: string;
}

export interface ClinicInfo {
  name: string;
  bengaliName: string;
  businessType: string;
  rating: number;
  reviewCount: number;
  address: string;
  addressLines: string[];
  phone: string;
  phoneDisplay: string;
  locationPlusCode: string;
  businessStatus: string;
  dentistIdentified: string;
}

export interface DentalService {
  id: string;
  name: string;
  description: string;
  details?: string;
  category: string;
  iconName: string;
}

export interface PatientReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  doctorMentioned?: string;
  badge?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  fallbackUrl: string;
  aspect?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentBooking {
  name: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}
