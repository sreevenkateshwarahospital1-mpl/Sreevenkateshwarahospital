import { useState } from "react";
import { motion } from "motion/react";
import { Award, Star, Activity, Heart, Users, GraduationCap, Trophy, CheckCircle, ChevronRight } from "lucide-react";
import { ECGLine } from "./HeartAssets";

export default function ChiefCardiologist() {
  const [isPausedStats, setIsPausedStats] = useState(false);
  const [isPausedAwards, setIsPausedAwards] = useState(false);

  const stats = [
    { value: "100+", label: "ASD Device Closures", icon: <CheckCircle size={18} /> },
    { value: "250+", label: "Pacemaker Implantations", icon: <Activity size={18} /> },
    { value: "5,000+", label: "Angioplasties & Complex Interventions", icon: <Heart size={18} /> },
    { value: "10+", label: "Young Cardiologists Mentored", icon: <Users size={18} /> },
    { value: "20,000+", label: "Successful Procedures", icon: <Trophy size={18} /> },
    { value: "15+", label: "Years of Excellence", icon: <Star size={18} /> },
  ];

  const highlights = [
    "Performed over 100 ASD device closure procedures",
    "Successfully completed more than 250 pacemaker implantations",
    "Conducted nearly 5,000 angioplasties and complex coronary interventions",
    "Mentored and trained 10 young cardiologists over the past decade",
  ];

  const awards = [
    {
      title: "Dr. Anumolu Seshagiri Rao Memorial Gold Medal",
      year: "2014",
      highlight: "Best Student in Cardiology"
    },
    {
      title: "Dr. Marella Subbarao Memorial Gold Medal",
      year: "2010",
      highlight: "Best Outgoing Student"
    },
    {
      title: "Dr. Indravadan Modi Memorial Gold Medal",
      year: "2014",
      highlight: "Young Investigator Award"
    },
    {
      title: "Academic Excellence Award",
      year: "2012",
      highlight: "Clinical Distinction"
    },
    {
      title: "State Level Honor",
      year: "2015",
      highlight: "Interventional Leader"
    }
  ];

  // Remove displayAwards doubling as it's no longer scrolling
  const displayStats = [...stats, ...stats];

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="chief-cardiologist">
      {/* Background Subtle ECG */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path
            d="M0 50 L100 50 L120 20 L140 80 L160 50 L300 50 L320 10 L340 90 L360 50 L500 50 L520 20 L540 80 L560 50 L700 50 L720 10 L740 90 L760 50 L900 50 L1000 50"
            fill="none"
            stroke="#B91C1C"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 mb-16">
        {/* Main Content Layout - More Compact */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/5 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-slate-50 p-1.5 bg-white shadow-xl overflow-hidden group">
                <img 
                  src="https://res.cloudinary.com/dforgkrp5/image/upload/v1778689495/Screenshot_2026-05-13_215229_fbjsbu.png" loading="lazy" 
                  alt="DR. S. B. KISHORE" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
               <Activity size={12} className="animate-pulse" />
               CHIEF CARDIOLOGIST
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-navy mb-4 leading-tight">
              DR. S. B. <span className="text-brand-red italic font-normal">KISHORE</span>
            </h2>
            
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
              Award-Winning Interventional Cardiologist with <span className="text-brand-red font-bold">15+ years</span> of experience and <span className="text-brand-red font-bold">20,000+ procedures</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                <GraduationCap size={20} className="text-brand-red" />
                <span className="text-xs font-bold text-brand-navy uppercase">Gold Medalist</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                <Trophy size={20} className="text-brand-red" />
                <span className="text-xs font-bold text-brand-navy uppercase">National Awardee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Ribbons */}
      <div className="relative z-10">
        {/* Ribbon 1: Clinical Achievements (Remains scrolling) */}
        <div className="mb-16">
          <div className="max-w-[1200px] mx-auto px-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-brand-navy rounded-full animate-pulse" />
              <span className="text-[11px] font-black text-brand-navy uppercase tracking-[0.2em] bg-slate-100/50 px-4 py-1.5 rounded-lg border border-slate-200/50">Clinical Achievements</span>
            </div>
          </div>
          
          <div 
            className="w-full relative overflow-hidden py-8 border-y-2 border-amber-300 bg-linear-to-r from-amber-400 via-amber-100 to-amber-400 shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]"
            onMouseEnter={() => setIsPausedStats(true)}
            onMouseLeave={() => setIsPausedStats(false)}
          >
            <motion.div 
              className="flex gap-16 items-center"
              animate={{ x: isPausedStats ? undefined : ["0%", "-50%"] }}
              transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
              style={{ width: "max-content" }}
            >
              {displayStats.map((stat, i) => (
                <div key={i} className="flex items-center gap-6 px-4 group">
                  <div className="text-amber-900 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-display font-black text-amber-950 leading-none drop-shadow-sm">{stat.value}</span>
                    <span className="text-[10px] font-black text-amber-800 uppercase tracking-widest mt-1 whitespace-nowrap">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Static Section: Awards & Honors (No longer scrolling) */}
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-[11px] font-black text-brand-red uppercase tracking-[0.2em] bg-red-50/50 px-4 py-1.5 rounded-lg border border-red-100/50">Awards & Recognition Gallery</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden"
              >
                {/* Gold Backdrop Card */}
                <div className="absolute inset-0 bg-linear-to-br from-amber-400 via-amber-100 to-amber-500 rounded-2xl transform group-hover:scale-[1.02] transition-transform duration-500 shadow-xl" />
                
                {/* Inner Content Container */}
                <div className="relative m-[2px] bg-white rounded-2xl p-6 h-full flex flex-col justify-between border border-amber-200/50">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-amber-100/50 p-3 rounded-xl text-amber-600 ring-1 ring-amber-200 group-hover:bg-amber-600 group-hover:text-amber-50 transition-colors">
                      <Award size={24} />
                    </div>
                    <span className="text-[10px] font-black text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-sm">{award.year}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-sm md:text-base font-black text-brand-navy leading-tight mb-2 group-hover:text-amber-700 transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg inline-block">
                      {award.highlight}
                    </p>
                  </div>

                  {/* Top-right shine effect */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-amber-300/10 blur-3xl rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
