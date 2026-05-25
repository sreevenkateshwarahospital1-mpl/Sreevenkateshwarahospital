import { motion } from "motion/react";
import { Phone, Clock, MapPin, Navigation, AlertCircle, Heart } from "lucide-react";
import { HeartPulse } from "./HeartAssets";

export default function Emergency() {
  return (
    <section className="py-0">
      <div className="max-w-[1400px] mx-auto bg-brand-navy p-12 lg:p-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 relative z-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 bg-brand-accent/20 border border-brand-accent/30 text-brand-accent px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-10">
               <div className="bg-brand-accent p-1 rounded-full"><AlertCircle size={14} className="text-brand-navy" /></div>
               CRITICAL EMERGENCY LINE
            </div>
            <h2 className="text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-8">
              Every <span className="text-brand-accent italic font-normal">Second</span> <br />
              Counts in Heart Care.
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-12">
              Our 24/7 Rapid Response Cardiac Team is ready to act. If you or a loved one experiences chest pain, don't wait.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
               <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-4 rounded-full text-white"><Clock size={24} /></div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Availability</span>
                     <span className="font-bold text-white">Open 24 Hours</span>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="bg-white/5 p-4 rounded-full text-white"><Heart size={24} /></div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Team</span>
                     <span className="font-bold text-white">Senior Cardiologists</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="relative group">
             <div className="absolute -inset-4 bg-white/5 blur-3xl group-hover:bg-brand-accent/5 transition-all" />
             <a 
               href="tel:+919493101531"
               className="relative bg-white p-12 lg:p-16 rounded-[4rem] text-brand-navy block shadow-2xl hover:scale-105 transition-transform"
             >
                <div className="flex flex-col items-center">
                   <Phone className="text-brand-accent mb-6" size={64} strokeWidth={2.5} />
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">EMERGENCY CALL NOW</span>
                   <span className="text-4xl lg:text-6xl font-black">+91 94931 01531</span>
                </div>
                <div className="mt-8 text-center">
                   <p className="text-xs font-bold text-slate-300 italic">*Toll-Free and Priority Dispatch for Cardiac Emergencies</p>
                </div>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
