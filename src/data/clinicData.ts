import { ClinicInfo, HeroSlide, DentalService, PatientReview, GalleryImage, FaqItem } from '../types';

export const CLINIC_INFO: ClinicInfo = {
  name: 'Dental Care',
  bengaliName: 'ডেন্টাল কেয়ার',
  businessType: 'Dental Clinic',
  rating: 5.0,
  reviewCount: 508,
  address: '14/1C, Netaji Nagar Rd, Sahid Nagar Colony, Netaji Nagar, Kolkata, West Bengal 700047',
  addressLines: [
    '14/1C, Netaji Nagar Rd',
    'Sahid Nagar Colony, Netaji Nagar',
    'Kolkata, West Bengal 700047'
  ],
  phone: '09038601761',
  phoneDisplay: '090386 01761',
  locationPlusCode: 'F9J7+3M Kolkata, West Bengal',
  businessStatus: 'Closed · Opens 6 PM',
  dentistIdentified: 'Dr. Arpita Chatterjee'
};

// High-resolution attractive dental photography and verified local facility assets
export const SUPPLIED_IMAGES = {
  // Attractive dental hero & aesthetic images
  HERO_1: '/images/hero-attractive-smile.jpg',
  HERO_2: '/images/hero-modern-clinic.jpg',
  HERO_3: '/images/hero-dentist-care.jpg',
  HERO_4: '/images/hero-aesthetic-dentistry.jpg',
  PATIENT_SMILE: '/images/patient-smile.jpg',
  DENTAL_INSTRUMENTS: '/images/dental-instruments.jpg',
  // Verified local facility photos
  A: '/images/clinic-reception.jpg',
  B: '/images/clinic-operatory.jpg',
  C: '/images/clinic-exterior.jpg',
  // Curated fallbacks
  FALLBACK_HERO_1: '/images/dental-care-1.jpg',
  FALLBACK_HERO_2: '/images/dental-care-2.jpg',
  FALLBACK_HERO_3: '/images/dental-care-3.jpg',
  FALLBACK_ABOUT: '/images/hero-dentist-care.jpg',
  FALLBACK_FEATURED: '/images/hero-modern-clinic.jpg'
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'DENTAL CARE IN NETAJI NAGAR',
    headline: 'A Healthier Smile Starts With Gentle Care',
    description: 'Comfortable, patient-focused dental treatments designed to help you maintain a bright, healthy, and confident smile in Netaji Nagar, Kolkata.',
    ctaText: 'BOOK AN APPOINTMENT',
    ctaAction: 'appointment',
    secondaryCtaText: 'CALL 090386 01761',
    secondaryCtaAction: 'call',
    imageUrl: SUPPLIED_IMAGES.HERO_1,
    fallbackImageUrl: SUPPLIED_IMAGES.FALLBACK_HERO_1,
    imageAlt: 'Healthy Radiant Smile at Dental Care Kolkata',
    objectPosition: 'center 35%'
  },
  {
    id: 'slide-2',
    eyebrow: 'MODERN CLINICAL EXCELLENCE',
    headline: 'Advanced Technology. Gentle Treatment.',
    description: 'A clean, modern operatory equipped with sterile instruments and advanced dental equipment for smooth, pain-free appointments.',
    ctaText: 'EXPLORE SERVICES',
    ctaAction: 'about',
    secondaryCtaText: 'BOOK YOUR VISIT',
    secondaryCtaAction: 'appointment',
    imageUrl: SUPPLIED_IMAGES.HERO_2,
    fallbackImageUrl: SUPPLIED_IMAGES.FALLBACK_HERO_2,
    imageAlt: 'Modern Dental Clinic Operatory and Treatment Chair',
    objectPosition: 'center 45%'
  },
  {
    id: 'slide-3',
    eyebrow: 'COMPASSIONATE DENTIST CARE',
    headline: 'Care You Can Trust, Comfort You Can Feel',
    description: 'Dr. Arpita Chatterjee and our dedicated team ensure gentle procedures in a reassuring, friendly environment where your comfort comes first.',
    ctaText: 'SEE PATIENT REVIEWS',
    ctaAction: 'reviews',
    secondaryCtaText: 'BOOK CONSULTATION',
    secondaryCtaAction: 'appointment',
    imageUrl: SUPPLIED_IMAGES.HERO_3,
    fallbackImageUrl: SUPPLIED_IMAGES.FALLBACK_HERO_3,
    imageAlt: 'Caring Dental Consultation and Patient Treatment',
    objectPosition: 'center 40%'
  },
  {
    id: 'slide-4',
    eyebrow: '5.0★ VERIFIED PATIENT SATISFACTION',
    headline: '500+ Happy Patients. One Trusted Clinic.',
    description: 'Over 508 verified Google reviews celebrating smooth root canals, thorough cleaning, painless extractions, and caring service.',
    ctaText: 'CONTACT THE CLINIC',
    ctaAction: 'contact',
    secondaryCtaText: 'CALL 090386 01761',
    secondaryCtaAction: 'call',
    imageUrl: SUPPLIED_IMAGES.HERO_4,
    fallbackImageUrl: SUPPLIED_IMAGES.PATIENT_SMILE,
    imageAlt: 'Aesthetic Dentistry and Beautiful Smile Care',
    objectPosition: 'center 35%'
  }
];

export const DENTAL_SERVICES: DentalService[] = [
  {
    id: 'checkups',
    name: 'Dental Checkups',
    description: 'Routine oral examinations to identify dental issues early and maintain healthy teeth and gums.',
    details: 'Regular checkups allow early detection of decay, enamel wear, and gum issues before they cause discomfort.',
    category: 'Preventive Care',
    iconName: 'Stethoscope'
  },
  {
    id: 'cleaning',
    name: 'Teeth Cleaning & Scaling',
    description: 'Professional plaque and tartar removal to support gum health, prevent staining, and freshen breath.',
    details: 'Thorough, gentle cleaning using ultrasonic instruments to protect against gingivitis and buildup.',
    category: 'Preventive Care',
    iconName: 'Sparkles'
  },
  {
    id: 'rct',
    name: 'Root Canal Treatment',
    description: 'Careful treatment to relieve tooth pain, resolve deep infection, and preserve natural teeth.',
    details: 'Modern conservative procedures focused on patient comfort and saving the natural tooth structure.',
    category: 'Restorative Care',
    iconName: 'Activity'
  },
  {
    id: 'fillings',
    name: 'Dental Fillings',
    description: 'Tooth-colored restorations to treat cavities, restore chewing surface, and stop further decay.',
    details: 'Durable, natural-looking composite fillings matched to your natural tooth shade.',
    category: 'Restorative Care',
    iconName: 'ShieldCheck'
  },
  {
    id: 'wisdom-tooth',
    name: 'Wisdom Tooth Care',
    description: 'Assessment and gentle care for impacted, crowding, or problematic third molars.',
    details: 'Evaluation with radiographic diagnostics and comfortable management of erupting wisdom teeth.',
    category: 'Oral Care',
    iconName: 'Layers'
  },
  {
    id: 'extractions',
    name: 'Tooth Extraction',
    description: 'Gentle, careful removal of compromised or non-restorable teeth when necessary.',
    details: 'Conducted under careful local anesthesia with clear aftercare instructions for smooth recovery.',
    category: 'Surgical Care',
    iconName: 'HeartHandshake'
  },
  {
    id: 'crowns',
    name: 'Dental Crowns',
    description: 'Custom protective coverings to restore strength, shape, and function to damaged teeth.',
    details: 'Precision-fitted crowns crafted to blend seamlessly with surrounding natural teeth.',
    category: 'Restorative Care',
    iconName: 'Smile'
  },
  {
    id: 'bridges',
    name: 'Dental Bridges',
    description: 'Fixed tooth replacements anchored to adjacent teeth to fill gaps and restore bite stability.',
    details: 'Reliable tooth replacement solution to prevent adjacent teeth from shifting.',
    category: 'Prosthodontics',
    iconName: 'Columns'
  },
  {
    id: 'dentures',
    name: 'Dentures',
    description: 'Comfortable complete or partial prostheses designed for natural speech, chewing, and smile confidence.',
    details: 'Custom measured and adjusted to ensure stability and everyday patient comfort.',
    category: 'Prosthodontics',
    iconName: 'CheckCircle2'
  },
  {
    id: 'gum-care',
    name: 'Gum Care',
    description: 'Targeted care for bleeding gums, swelling, gingivitis, and periodontal health maintenance.',
    details: 'Gentle therapeutic care to keep the supporting structures of your teeth healthy and resilient.',
    category: 'Periodontal Care',
    iconName: 'Heart'
  },
  {
    id: 'preventive',
    name: 'Preventive Dental Care',
    description: 'Guidance, fluoride care, and preventive maintenance designed to protect smiles across all ages.',
    details: 'Proactive oral hygiene habits and individualized advice for everyday dental wellness.',
    category: 'Preventive Care',
    iconName: 'Award'
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Dental Care',
    description: 'Aesthetic smile improvements, minor reshaping, and polishing for a radiant, confident smile.',
    details: 'Tailored aesthetic consultations focused on natural smile enhancement.',
    category: 'Cosmetic Care',
    iconName: 'Sun'
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: 'review-1',
    author: 'Verified Patient',
    rating: 5.0,
    text: 'I used to be terrified of visiting the dentist because I was afraid of the pain. But after being treated by Dr. Arpita Chatterjee, that fear gradually disappeared. She made sure I was comfortable throughout the entire treatment...',
    source: 'Google Review',
    doctorMentioned: 'Dr. Arpita Chatterjee',
    badge: 'Gentle Care'
  },
  {
    id: 'review-2',
    author: 'Verified Patient',
    rating: 5.0,
    text: 'Dr. Arpita Chatterjee is an excellent dentist. She is very kind, patient, and makes you feel at ease from the moment you walk in. I was quite nervous initially, but her calm approach and clear explanation really helped. The treatment was smooth and painless. Truly grateful for her care!',
    source: 'Google Review',
    doctorMentioned: 'Dr. Arpita Chatterjee',
    badge: 'Painless Experience'
  },
  {
    id: 'review-3',
    author: 'Verified Patient',
    rating: 5.0,
    text: 'Dr Arpita Chatterjee provides exceptional dental care for my entire family. She possesses a thorough understanding of dental procedures and explains each step with great clarity. Her professional expertise and helpful guidance is remarkable.',
    source: 'Google Review',
    doctorMentioned: 'Dr. Arpita Chatterjee',
    badge: 'Family Care'
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    id: 'wc-1',
    title: '5.0★ Google Rating',
    description: 'Backed by 508 verified Google patient reviews highlighting consistent satisfaction and gentle care.',
    icon: 'Star'
  },
  {
    id: 'wc-2',
    title: 'Comfort-Focused Care',
    description: 'Treatment paced to your ease, with gentle approaches especially beneficial for nervous or anxious patients.',
    icon: 'Heart'
  },
  {
    id: 'wc-3',
    title: 'Patient-First Approach',
    description: 'Every recommendation is guided strictly by what is in the best interest of your long-term oral health.',
    icon: 'UserCheck'
  },
  {
    id: 'wc-4',
    title: 'Clean & Hygienic Environment',
    description: 'A sanitized, spotless clinic setting following rigorous disinfection protocols for every visit.',
    icon: 'ShieldCheck'
  },
  {
    id: 'wc-5',
    title: 'Clear Communication',
    description: 'Procedures are thoroughly explained step-by-step so you feel fully informed and confident.',
    icon: 'MessageSquare'
  },
  {
    id: 'wc-6',
    title: 'Convenient Netaji Nagar Location',
    description: 'Easily accessible at 14/1C, Netaji Nagar Rd in South Kolkata, opening at 6 PM for evening appointments.',
    icon: 'MapPin'
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Dental Care Clinic',
    caption: 'Clean, modern patient care environment in Netaji Nagar, Kolkata',
    imageUrl: SUPPLIED_IMAGES.A,
    fallbackUrl: SUPPLIED_IMAGES.FALLBACK_HERO_1,
    aspect: 'col-span-12 md:col-span-8 aspect-[16/10]'
  },
  {
    id: 'gal-2',
    title: 'Treatment Operatory',
    caption: 'Equipped operatory designed with patient comfort and hygiene as top priorities',
    imageUrl: SUPPLIED_IMAGES.B,
    fallbackUrl: SUPPLIED_IMAGES.FALLBACK_HERO_2,
    aspect: 'col-span-12 md:col-span-4 aspect-[4/3] md:aspect-auto'
  },
  {
    id: 'gal-3',
    title: 'Patient Care Area',
    caption: 'Welcoming consultation and clinical space',
    imageUrl: SUPPLIED_IMAGES.C,
    fallbackUrl: SUPPLIED_IMAGES.FALLBACK_HERO_3,
    aspect: 'col-span-12 md:col-span-6 aspect-[16/10]'
  },
  {
    id: 'gal-4',
    title: 'Hygienic Clinical Setup',
    caption: 'Strict sterilization standards to safeguard your family',
    imageUrl: SUPPLIED_IMAGES.FALLBACK_ABOUT,
    fallbackUrl: SUPPLIED_IMAGES.FALLBACK_HERO_1,
    aspect: 'col-span-12 md:col-span-6 aspect-[16/10]'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment easily by clicking the "Book Appointment" button on this website, or by calling our clinic directly at 090386 01761. Our clinic opens at 6:00 PM.'
  },
  {
    id: 'faq-2',
    question: 'Where is Dental Care located?',
    answer: 'Dental Care is located at 14/1C, Netaji Nagar Rd, Sahid Nagar Colony, Netaji Nagar, Kolkata, West Bengal 700047 (Plus Code: F9J7+3M Kolkata). You can view the location map below or click "Get Directions" for GPS navigation.'
  },
  {
    id: 'faq-3',
    question: 'What should I bring to my dental appointment?',
    answer: 'Please bring any previous dental records, current medication details, or recent X-rays if you have them. If it is your first visit, arriving a few minutes early helps ensure a relaxed consultation.'
  },
  {
    id: 'faq-4',
    question: 'How often should I have a dental checkup?',
    answer: 'For most individuals, a routine dental checkup and professional cleaning is recommended every six months. Regular visits help detect plaque buildup, early cavities, and gum conditions before they progress.'
  },
  {
    id: 'faq-5',
    question: 'Is dental treatment painful?',
    answer: 'Many dental procedures can be performed comfortably with modern techniques and appropriate local anesthesia. Your dentist will explain each step beforehand and prioritize your comfort throughout the visit.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide dental care for families?',
    answer: 'Yes. Dental Care provides dental consultations and treatments for individuals and family members of various age groups, from routine preventive maintenance to restorative procedures.'
  },
  {
    id: 'faq-7',
    question: 'How can I contact the clinic?',
    answer: 'You can contact Dental Care directly by phone at 090386 01761. The clinic opens at 6:00 PM.'
  }
];
