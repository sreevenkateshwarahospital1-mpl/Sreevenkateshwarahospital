import { motion } from "motion/react";
import { CheckCircle, Clock, MapPin, Award, Users, Heart, Zap, ShieldCheck, Star } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Clock size={28} />, title: "Open 24 Hours", desc: "Round-the-clock emergency and casualty services for heart crises." },
    { icon: <Star size={28} />, title: "4.8 Patient Rating", desc: "Highly trusted by the Madanapalle community for reliable care." },
    { icon: <ShieldCheck size={28} />, title: "Expert Cardiologists", desc: "Team of senior specialists with decades of experience in heart care." },
    { icon: <Zap size={28} />, title: "Cutting-Edge Technology", desc: "Equipped with the latest diagnostic and imaging equipment." },
    { icon: <MapPin size={28} />, title: "Prime Location", desc: "Easily accessible at A.V. Naidu Colony for quick transit." },
    { icon: <Heart size={28} />, title: "Compassionate Care", desc: "We treat every patient with empathy and personalized attention." },
  ];

  return (
    <section className="py-0 bg-brand-blue relative overflow-hidden h-auto">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2">
         {/* Text Section */}
         <div className="p-12 lg:p-32 space-y-12">
            <div className="space-y-4">
               <h4 className="text-brand-accent font-bold uppercase tracking-widest text-xs">WHY PATIENTS TRUST US</h4>
               <h2 className="text-5xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
                  Unmatched Expertise, <br />
                  <span className="italic font-normal">Unwavering Commitment.</span>
               </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-12">
               {features.map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="bg-white/10 text-white p-3 rounded-xl h-fit group-hover:bg-brand-accent group-hover:text-brand-blue transition-all">
                       {item.icon}
                    </div>
                    <div>
                       <h5 className="font-bold text-white text-lg mb-2">{item.title}</h5>
                       <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         {/* Visual Section as per screenshot */}
         <div className="relative min-h-[600px] lg:min-h-full">
            <img 
               src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200" 
               alt="Surgical Team" 
               className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply" />
            
            {/* Vision Overlay card as per screenshot */}
            <div className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-3xl p-10 rounded-[3rem] border border-white/20">
               <p className="text-2xl font-display italic text-white leading-relaxed mb-6">
                  "Healing hearts isn't just our job, it's our spiritual commitment."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-0.5 bg-white/40" />
                  <span className="text-xs font-bold text-white uppercase tracking-[0.2em]">Our Vision</span>
               </div>
            </div>
         </div>
      </div>
    </section>
  );
}

