import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, Clock, CheckCircle2, User, HelpCircle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, DENTAL_SERVICES } from '../data/clinicData';
import { AppointmentBooking } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'General Dental Consultation'
}) => {
  const [formData, setFormData] = useState<AppointmentBooking>({
    name: '',
    phone: '',
    service: defaultService,
    preferredDate: '',
    preferredTime: 'Evening (6:00 PM - 7:30 PM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrorMsg('');
      if (defaultService) {
        setFormData((prev) => ({ ...prev, service: defaultService }));
      }
      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      setFormData((prev) => ({
        ...prev,
        preferredDate: prev.preferredDate || today
      }));
    }
  }, [isOpen, defaultService]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0d141c] border border-slate-700/90 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close Appointment Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-500/30 text-teal-300">
                  {CLINIC_INFO.name} ({CLINIC_INFO.bengaliName})
                </span>
                <span className="text-xs text-amber-300 font-bold">5.0★ (508 Reviews)</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-serif tracking-tight">
                Request an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Clinic opens at 6:00 PM for evening consultations in Netaji Nagar, Kolkata.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-medium">
                {errorMsg}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 090386 01761"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Service / Consultation Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white transition-colors"
                >
                  <option value="General Dental Consultation">General Dental Consultation</option>
                  {DENTAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.category})
                    </option>
                  ))}
                  <option value="Tooth Pain / Emergency Evaluation">Tooth Pain / Evaluation</option>
                  <option value="Other Consultation">Other Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white transition-colors"
                  >
                    <option value="Evening (6:00 PM - 7:30 PM)">Evening (6:00 PM - 7:30 PM)</option>
                    <option value="Evening (7:30 PM - 9:00 PM)">Evening (7:30 PM - 9:00 PM)</option>
                    <option value="Flexible / Callback Needed">Flexible / Callback Needed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Additional Notes or Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about any specific concern or toothache..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-teal-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm shadow-lg shadow-teal-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>SUBMIT APPOINTMENT REQUEST</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-1">
                  <span>Need immediate assistance?</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-teal-400 font-bold hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    Call {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white font-serif mb-1">
                Appointment Request Received!
              </h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Dental Care in Netaji Nagar has noted your request.
              </p>
            </div>

            <div className="bg-slate-900/90 rounded-2xl p-4 text-left border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Service:</span>
                <span className="font-semibold text-white">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Preferred Date:</span>
                <span className="font-semibold text-white">{formData.preferredDate || 'Upcoming Date'}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-1.5">
                <span className="text-slate-400">Time Window:</span>
                <span className="font-semibold text-white">{formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Clinic Status:</span>
                <span className="font-semibold text-emerald-400">{CLINIC_INFO.businessStatus}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Our clinic will reach out to your phone (<span className="text-teal-300">{formData.phone}</span>) to confirm your exact time slot.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 hover:text-white border border-slate-700 text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Clinic Directly: {CLINIC_INFO.phoneDisplay}
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
