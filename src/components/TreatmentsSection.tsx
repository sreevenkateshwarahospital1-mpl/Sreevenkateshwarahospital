import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, ChevronLeft, ChevronRight } from 'lucide-react';

interface CardioVideo {
  id: number;
  title: string;
  publicId: string;
}

const procedures: CardioVideo[] = [
  {
    id: 1,
    title: "Coronary Stent Placement",
    publicId: "Coronary_stent_placement_human_h__202605240944_bmm8dc"
  },
  {
    id: 2,
    title: "Coronary Artery Bypass Graft (CABG)",
    publicId: "Coronary_artery_bypass_graft_sur__202605241007_sincfy"
  },
  {
    id: 3,
    title: "Heart Valve Repair & Replacement",
    publicId: "Heart_valve_repair_replacement_202605241011_pqxgcl"
  },
  {
    id: 4,
    title: "Primary Heart Transplantation",
    publicId: "Heart_transplant_lathe1"
  },
  {
    id: 5,
    title: "Coronary Balloon Angioplasty",
    publicId: "Coronary_angioplasty_procedure_i__202605240951_cqfoup"
  },
  {
    id: 6,
    title: "Pacemaker Implantation",
    publicId: "Pacemaker_implantation_procedure__202605241022_leqqh3"
  },
  {
    id: 7,
    title: "Laser Angioplasty & Atherectomy",
    publicId: "Laser_angioplasty_atherectomy_cl__202605241054_nnamot"
  },
  {
    id: 8,
    title: "ICD Implantation (Defibrillator)",
    publicId: "ICD_implantation_treats_heart_rh__202605241025_fv6aap"
  },
  {
    id: 9,
    title: "LVAD Implantation",
    publicId: "LVAD_implantation_helps_heart_202605241051_gm7hhn"
  },
  {
    id: 10,
    title: "Transcatheter Aortic Valve Implantation (TAVI)",
    publicId: "TAVI_procedure_animation_202605241225_qtyc9u"
  },
  {
    id: 11,
    title: "Rotablation Angioplasty",
    publicId: "Rotablation_Angioplasty_procedur__202605241234_xucc2u"
  },
  {
    id: 12,
    title: "ASD Device Closure",
    publicId: "ASD_device_closure_procedure_heart_202605241237_v5hytf"
  }
];

export default function TreatmentsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigate left/right manually
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? procedures.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % procedures.length);
  };

  return (
    <section 
      id="procedures" 
      className="py-16 bg-white text-slate-800 relative overflow-hidden border-b border-slate-100"
    >
      {/* Background Graphic Electrocardiogram (ECG) Vector Line */}
      <div className="absolute inset-x-0 top-0 h-40 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0 50 L120 50 L140 20 L160 80 L180 50 L340 50 L360 10 L380 90 L400 50 L560 50 L580 20 L600 80 L620 50 L780 50 L800 10 L820 90 L840 50 L1000 50 L1020 20 L1040 80 L1060 50 L1200 50"
            fill="none"
            stroke="#B91C1C"
            strokeWidth="1.5"
            className="ecg-line"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading Panel */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 px-4 py-1.5 rounded-full text-brand-red text-xs font-bold uppercase tracking-widest mb-4">
              <Activity size={14} className="heartbeat text-brand-red" />
              Interactive Medical Loops
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none mb-4">
              Our Advanced Treatments
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Explore our core cardiac treatments and surgical interventions via high-fidelity 3D simulated loops. Use the buttons or navigation dots below to browse.
            </p>
          </div>
        </div>

        {/* 1-Video-Only Carousel Container */}
        <div className="relative max-w-xl md:max-w-2xl mx-auto px-1 md:px-0">
          
          {/* Navigation Controls exactly left and right side of video */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-14 top-[40%] -translate-y-1/2 z-20 p-2.5 md:p-3.5 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-xs text-slate-700 hover:text-brand-red hover:border-brand-red/35 hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Previous Procedure"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-14 top-[40%] -translate-y-1/2 z-20 p-2.5 md:p-3.5 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-xs text-slate-700 hover:text-brand-red hover:border-brand-red/35 hover:shadow-md active:scale-95 transition-all duration-300 cursor-pointer shadow-sm"
            aria-label="Next Procedure"
          >
            <ChevronRight size={18} />
          </button>
          
          <div 
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg relative"
          >
            <div 
              className="flex flex-nowrap transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {procedures.map((item, index) => (
                <div
                  key={item.id}
                  className="w-full shrink-0 flex-none flex flex-col bg-white"
                >
                  {/* Embedded Auto-playing Video Frame */}
                  <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                    {activeIndex === index ? (
                      <iframe
                        src={`https://player.cloudinary.com/embed/?cloud_name=dforgkrp5&public_id=${item.publicId}&autoplay=true&muted=true&loop=true&controls=false`}
                        width="100%"
                        height="100%"
                        style={{ height: "100%", width: "100%", aspectRatio: "640 / 360", border: '0' }}
                        allow="autoplay"
                        title={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-950">
                        <Activity className="text-white/20 animate-pulse" size={48} />
                      </div>
                    )}

                    {/* Invisible Overlay Shield to prevent user interaction (play, pause, click-to-open, right-click, etc) */}
                    <div className="absolute inset-0 bg-transparent z-10 cursor-default select-none" />
                  </div>

                  {/* Heading Title Only with Clean Layout and No Descriptions */}
                  <div className="px-6 py-5 bg-white border-t border-slate-100 flex items-center justify-between">
                    <h3 className="text-base font-black text-slate-900 font-display uppercase tracking-tight leading-tight">
                      {item.title}
                    </h3>

                    <span className="text-[10px] font-black text-brand-red bg-brand-red/10 border border-brand-red/20 px-2.5 py-1 rounded-md uppercase">
                      Active Frame {item.id} / {procedures.length}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Paginator Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {procedures.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? "w-6 bg-brand-red" 
                    : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Emergency clinical consultation help card block */}
        <div className="mt-16 bg-gradient-to-r from-brand-red/5 via-slate-50 to-brand-blue/5 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-[50px] pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="bg-brand-red/10 text-brand-red p-4 rounded-full border border-brand-red/20 shrink-0 shadow-lg shadow-brand-red/5">
              <Heart size={24} className="heartbeat animate-pulse" />
            </div>
            <div>
              <h4 className="text-base font-black text-slate-900 uppercase tracking-tight font-display">Need Immediate Expert Cardiovascular Diagnostics?</h4>
              <p className="text-slate-600 text-xs mt-1 max-w-xl">
                Our cardiac team has fully equipped intensive bypass surgery facilities, ultra-modern cath labs, and rhythm support services online 24 hours a day in Madanapalle.
              </p>
            </div>
          </div>
          <a
            href="#appointment"
            className="flex items-center gap-2 bg-brand-red hover:bg-brand-maroon text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 relative z-10 shadow-lg shadow-brand-red/20 hover:scale-[1.02]"
          >
            <Activity size={14} className="heartbeat" />
            Schedule Cardiology Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
