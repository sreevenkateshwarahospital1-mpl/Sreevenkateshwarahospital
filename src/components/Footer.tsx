import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-12 relative z-10">
        <div className="bg-white/5 rounded-[4rem] p-12 lg:p-20 grid lg:grid-cols-4 gap-12 border border-white/5">
           
           {/* Section 1: Logo & Info */}
           <div className="space-y-12">
              <div className="flex flex-col gap-6">
                <div className="bg-white p-2 rounded-3xl w-fit">
                   <img 
                     src="https://res.cloudinary.com/dforgkrp5/image/upload/v1778736224/hospital_logo_wgeldx.png" 
                     alt="Sree Venkateswara Hospital" 
                     className="h-20 w-auto object-contain rounded-2xl"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl xl:text-3xl font-display font-bold text-white tracking-tight uppercase">SREE VENKATESWARA</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">Super-Speciality Hospital</span>
                </div>
              </div>
              <p className="text-slate-400 text-base leading-relaxed">
                Empowering lives through world-class cardiac care and compassionate service in Madanapalle since 2009.
              </p>
              <div className="flex gap-4">
                 {[
                   { Icon: Facebook, url: "https://www.facebook.com/share/1BBA6JK7bN/" },
                   { Icon: Instagram, url: "https://www.instagram.com/sreevenkateswarahospital_mpl?igsh=MXkxcW9odXU4ZGxhMQ==" },
                   { Icon: Youtube, url: "https://www.youtube.com/@Sreevenkateshwarahospital_Mpl" }
                 ].map(({ Icon, url }, i) => (
                   <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-navy hover:border-brand-accent transition-all">
                      <Icon size={20} />
                   </a>
                 ))}
              </div>
           </div>

           {/* Section 2: Quick Links */}
           <div className="lg:pl-8">
              <h4 className="text-xl font-display font-bold mb-10 decoration-brand-accent decoration-2 underline underline-offset-8">Quick Links</h4>
              <ul className="space-y-6">
                 {[
                   { name: "Home", href: "#home" },
                   { name: "About Us", href: "#about" },
                   { name: "Services", href: "#services" },
                   { name: "Specialists", href: "#chief-cardiologist" },
                   { name: "Patient Reviews", href: "#reviews" }
                 ].map((link, i) => (
                   <li key={i}>
                      <a href={link.href} className="text-base text-slate-400 hover:text-white transition-colors">{link.name}</a>
                   </li>
                 ))}
              </ul>
           </div>

           {/* Section 3: Contact Us */}
           <div>
              <h4 className="text-xl font-display font-bold mb-10 decoration-brand-accent decoration-2 underline underline-offset-8">Contact Us</h4>
              <ul className="space-y-8">
                 <li className="flex gap-4">
                    <div className="text-brand-accent shrink-0"><MapPin size={24} /></div>
                    <span className="text-base text-slate-400 leading-relaxed">
                       8th Cross, 1st Main, Prasanth Nagar, A.V. Naidu Colony, Madanapalle, Andhra Pradesh 517326, India
                    </span>
                 </li>
                 <li className="flex gap-4">
                    <div className="text-brand-accent shrink-0"><Phone size={24} /></div>
                    <span className="text-base text-slate-400">+91 94931 01531</span>
                 </li>
                 <li className="flex gap-4">
                    <div className="text-brand-accent shrink-0"><Mail size={24} /></div>
                    <span className="text-base text-slate-400">care@svhospital.com</span>
                 </li>
              </ul>
           </div>

           {/* Section 4: Emergency Card */}
           <div>
              <div className="bg-brand-blue rounded-[2.5rem] p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                 <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
                    <Heart size={150} className="text-white" />
                 </div>
                 <div className="relative z-10">
                    <h5 className="text-2xl font-display font-bold mb-4">Need Urgent Care?</h5>
                    <p className="text-slate-300 mb-8 text-sm">Our emergency department is open 24/7 for you.</p>
                    <a 
                      href="tel:+919493101531" 
                      className="bg-white text-brand-navy py-5 px-4 rounded-2xl font-black text-center block text-xl shadow-xl hover:bg-brand-accent transition-colors"
                    >
                       Emergency Call
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
}

