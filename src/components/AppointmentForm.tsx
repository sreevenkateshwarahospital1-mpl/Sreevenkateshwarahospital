import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Calendar, Clock, User, Phone, Mail, MessageSquare, Heart, CheckCircle } from "lucide-react";
import { HeartPulse } from "./HeartAssets";

export default function AppointmentForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [patientDetails, setPatientDetails] = useState({ name: "", phone: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const formName = formData.get("name")?.toString() || "";
    const formPhone = formData.get("phone")?.toString() || "";
    setPatientDetails({ name: formName, phone: formPhone });

    try {
      const response = await fetch("https://formspree.io/f/maqkdvge", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setError(data.errors.map((err: any) => err.message).join(", "));
        } else {
          setError("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (err) {
      setError("Oops! There was a network issue. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-10 space-y-3">
           <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-blue leading-[1.2]">
              Book Your <span className="italic font-normal">Online OP Now</span>
           </h2>
           <p className="text-slate-400 text-base italic max-w-xl mx-auto">
              Fill out the form below and our care team will get back to you within 2 hours.
           </p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,59,115,0.15)] border border-brand-blue/5 w-full max-w-4xl relative min-h-[500px] overflow-hidden">
          {/* Colorful Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-blue via-brand-red to-brand-accent"></div>
          
          {/* Subtle logo background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
             <img 
               src="https://res.cloudinary.com/dforgkrp5/image/upload/v1778736224/hospital_logo_wgeldx.png" 
               alt="" 
               className="w-[400px] object-contain"
               referrerPolicy="no-referrer"
              />
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="relative z-10 grid sm:grid-cols-2 gap-6"
          >
             <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest ml-4 transition-colors group-focus-within:text-brand-blue">Full Name</label>
                <div className="relative">
                  <User size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-brand-blue" />
                  <input name="name" type="text" required placeholder="Patient's Name" className="w-full pl-16 pr-6 py-4 bg-brand-light/50 border-2 border-transparent focus:border-brand-blue/20 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-semibold text-base shadow-sm" />
                </div>
             </div>
             
             <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest ml-4 transition-colors group-focus-within:text-brand-blue">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-brand-blue" />
                  <input name="phone" type="tel" required placeholder="+91 00000 00000" className="w-full pl-16 pr-6 py-4 bg-brand-light/50 border-2 border-transparent focus:border-brand-blue/20 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-semibold text-base shadow-sm" />
                </div>
             </div>

             <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest ml-4 transition-colors group-focus-within:text-brand-blue">Email Address (Optional)</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-brand-blue" />
                  <input name="email" type="email" placeholder="john@example.com (Optional)" className="w-full pl-16 pr-6 py-4 bg-brand-light/50 border-2 border-transparent focus:border-brand-blue/20 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-semibold text-base shadow-sm" />
                </div>
             </div>

             <div className="space-y-2 group">
                <label className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest ml-4 transition-colors group-focus-within:text-brand-blue">Preferred Date/Time</label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 transition-colors group-focus-within:text-brand-blue" />
                  <input name="preferred_datetime" type="datetime-local" className="w-full pl-16 pr-6 py-4 bg-brand-light/50 border-2 border-transparent focus:border-brand-blue/20 focus:bg-white rounded-2xl outline-none transition-all font-semibold text-slate-600 appearance-none text-base shadow-sm" />
                </div>
             </div>

             <div className="sm:col-span-2 space-y-2 group">
                <label className="text-[10px] font-bold text-brand-blue/60 uppercase tracking-widest ml-4 transition-colors group-focus-within:text-brand-blue">Brief Problem Description</label>
                <div className="relative">
                  <MessageSquare size={18} className="absolute left-6 top-6 text-slate-300 transition-colors group-focus-within:text-brand-blue" />
                  <textarea name="message" rows={4} placeholder="Please describe symptoms or reason for visit..." className="w-full pl-16 pr-6 py-6 bg-brand-light/50 border-2 border-transparent focus:border-brand-blue/20 focus:bg-white rounded-2xl outline-none transition-all placeholder:text-slate-400 font-semibold text-base resize-none shadow-sm"></textarea>
                </div>
             </div>

             {error && (
               <div className="sm:col-span-2 text-center text-sm font-semibold text-red-500 bg-red-50/50 py-3 px-6 rounded-2xl border border-red-100/50">
                 {error}
               </div>
             )}

             <div className="sm:col-span-2 flex justify-center pt-4">
                <motion.button 
                  whileHover={!submitting ? { scale: 1.05, translateY: -3 } : {}}
                  whileTap={!submitting ? { scale: 0.95 } : {}}
                  type="submit" 
                  disabled={submitting}
                  className="bg-gradient-to-r from-brand-blue to-brand-navy text-white px-12 py-4 rounded-full font-black text-lg shadow-[0_15px_40px_rgba(0,59,115,0.25)] flex items-center gap-3 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {submitting ? "Booking Appointment..." : "Confirm Appointment"}
                  <Send size={20} className="ml-2" />
                </motion.button>
             </div>
          </form>
        </div>
      </div>

      {/* Modern, high-conversion Congrats Overlapping Dialog Backdrop */}
      <AnimatePresence>
        {submitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="bg-white rounded-[2.5rem] shadow-2xl border border-brand-blue/5 p-8 md:p-12 max-w-lg w-full text-center relative overflow-hidden"
            >
              {/* Confetti/Accents */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-brand-blue" />

              <div className="mx-auto w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 shadow-sm border border-emerald-100">
                <CheckCircle size={44} className="stroke-[2.5]" />
              </div>

              <h3 className="text-3xl font-display font-black text-slate-900 leading-[1.2] mb-4">
                Congrats Your OP has Successfully Booked
              </h3>

              <div className="space-y-4 text-slate-500 font-medium text-sm leading-relaxed mb-8">
                <p>
                  A normal text message (SMS) notification is automatically sent to your mobile number{" "}
                  <span className="text-brand-navy font-bold">{patientDetails.phone}</span> in order to verify your appointment details.
                </p>
                <p className="bg-emerald-500/10 text-emerald-800 p-4 rounded-2xl border border-emerald-500/15 text-xs text-left">
                  <strong>ℹ️ WhatsApp Information Sent:</strong> We have successfully initiated a WhatsApp notification regarding your booking details to inform you and answer any FAQs immediately.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919493101531?text=${encodeURIComponent(
                    `Hello, Sree Venkateswara Hospital! I parsed my appointment on your website. Name: ${patientDetails.name}, Phone: ${patientDetails.phone}. Please confirm.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-2xl font-bold text-sm tracking-wide shadow-md hover:translate-y-[-2px] hover:shadow-emerald-500/20 active:translate-y-0 transition-all flex items-center justify-center gap-2"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.588 1.451 5.416 1.452 5.378 0 9.757-4.374 9.76-9.752.002-2.605-1.01-5.055-2.85-6.897-1.84-1.841-4.293-2.853-6.903-2.853-5.38 0-9.76 4.374-9.763 9.755-.001 1.956.511 3.864 1.484 5.56l-.974 3.559 3.655-.959c1.653.901 3.513 1.378 5.175 1.379zm6.015-11.004c-.161-.357-.331-.364-.485-.371-.126-.006-.271-.006-.416-.006-.146 0-.383.055-.584.274-.201.219-.766.748-.766 1.822 0 1.075.78 2.115.89 2.261.11.146 1.534 2.343 3.717 3.284 2.183.941 2.183.627 2.622.583.438-.044 1.41-.577 1.611-1.139.201-.562.201-1.042.141-1.139-.06-.098-.22-.157-.464-.279-.244-.122-1.411-.696-1.63-.775-.219-.079-.378-.122-.538.122-.16.244-.619.775-.758.934-.138.16-.277.18-.521.058-.244-.122-.962-.355-1.832-1.131-.676-.603-1.132-1.349-1.265-1.577-.132-.228-.014-.351.108-.472.11-.11.244-.286.366-.431.122-.146.163-.244.244-.407.081-.164.041-.307-.02-.429-.06-.122-.486-1.171-.666-1.603z" />
                  </svg>
                  Instant Chat
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError(null);
                  }}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors px-6 py-3.5 rounded-2xl font-bold text-sm"
                >
                  OK, Great
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
