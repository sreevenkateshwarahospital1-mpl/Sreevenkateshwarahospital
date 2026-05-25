import { motion } from "motion/react";
import { Heart, Activity, CheckCircle, ShieldCheck, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-brand-accent font-bold italic text-3xl mb-4 text-serif">Our Legacy</h4>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-brand-blue mb-10 leading-tight">
              Sree Venkateswara Super-Speciality Hospital: <span className="text-brand-blue/80 decoration-brand-accent underline underline-offset-8">The Heart of Madanapalle</span>
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg">
              Founded with a mission to bring world-class cardiac care to Andhra Pradesh, Sree Venkateswara Hospital has emerged as a beacon of hope for heart patients. We combine advanced medical technology with a compassionate approach, ensuring every patient feels like family.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 "State-of-the-art non-invasive cardiac labs",
                 "Advanced emergency heart response units",
                 "Comprehensive super-speciality consultations",
                 "Post-operative rehabilitative care"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-brand-blue font-semibold">
                    <div className="bg-green-100 text-green-600 p-1 rounded-full"><CheckCircle size={16} /></div>
                    {item}
                 </div>
               ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-3xl">
               <img 
                 src="https://res.cloudinary.com/dforgkrp5/image/upload/v1779018749/madanapalli_city_img_n1vbxx.png" loading="lazy" 
                 alt="Hospital location in Madanapalle" 
                 className="w-full h-auto block"
                 referrerPolicy="no-referrer"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

