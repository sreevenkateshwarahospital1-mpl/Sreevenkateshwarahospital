import { motion } from "motion/react";
import { MoveRight, Phone, MapPin, Heart, Star } from "lucide-react";
import { HeartPulse, ECGLine } from "./HeartAssets";

export default function Hero() {
  return (
    <section id="home" className="relative bg-white pt-2 pb-12 lg:pt-4 lg:pb-14 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-light text-brand-blue px-2.5 py-1 rounded-full text-[9px] font-bold mb-2 border border-slate-100">
            <Heart size={10} className="fill-brand-blue" />
            <span className="uppercase tracking-widest">Madanapalle's Premier Heart Care</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-brand-blue leading-[1.1] mb-5">
            <span className="italic font-normal text-brand-accent">Best</span> <br />
            Heart Hospital in Madanapalle
          </h1>
          
          <p className="text-base text-slate-500 mb-6 max-w-lg leading-relaxed">
            Trust Madanapalle's most advanced cardiology center. We provide 
            world-class cardiac treatments with 4.8★ patient satisfaction 
            and 24/7 emergency support.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#appointment"
              className="bg-brand-blue text-white px-6 py-3.5 rounded-2xl font-bold shadow-xl shadow-brand-blue/30 text-sm"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/919493101531"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border text-slate-900 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-sm text-sm"
            >
               <div className="text-green-500"><Phone size={18} /></div> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#location"
              className="bg-white border text-slate-900 px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-sm text-sm"
            >
               <div className="text-brand-red"><MapPin size={18} /></div> Location
            </motion.a>
          </div>

          <div className="mt-8 flex items-center gap-10 pt-6 border-t border-slate-100">
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Visit Us</span>
                <span className="font-bold text-brand-blue flex items-center gap-2">
                   <div className="bg-brand-light p-1.5 rounded-full"><MapPin size={16} /></div>
                   A.V. Naidu Colony, Madanapalle
                </span>
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Contact</span>
                <span className="font-bold text-brand-blue flex items-center gap-2">
                   <div className="bg-brand-light p-1.5 rounded-full"><Phone size={16} /></div>
                   +91 94931 01531
                </span>
             </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           className="relative"
        >
           <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-50 max-h-[350px] lg:max-h-[420px]">
              <img 
                src="https://res.cloudinary.com/dforgkrp5/image/upload/v1778687522/sree_venkateshwara_hospital_building_ve2smp.jpg" fetchPriority="high" 
                alt="Sree Venkateswara Hospital Building"
                className="w-full h-full object-cover block"
                referrerPolicy="no-referrer"
              />
           </div>
        </motion.div>
      </div>
    </section>
  );
}

