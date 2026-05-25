import { motion } from "motion/react";
import { Activity, Zap, Stethoscope, Heart, ClipboardList, ShieldAlert, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cardiology",
      desc: "Specialized diagnosis and treatment of complex heart conditions with expert care.",
      icon: <Activity className="text-brand-blue" size={28} />,
      color: "bg-blue-50"
    },
    {
      title: "Heart Checkups",
      desc: "Comprehensive screening packages tailored for all age groups to ensure early detection.",
      icon: <ClipboardList className="text-brand-blue" size={28} />,
      color: "bg-indigo-50"
    },
    {
      title: "Emergency Heart Care",
      desc: "Golden hour support with rapid response teams and advanced critical care Units.",
      icon: <ShieldAlert className="text-brand-blue" size={28} />,
      color: "bg-rose-50"
    },
    {
      title: "Super-Speciality Consultation",
      desc: "Multi-disciplinary expert opinions for holistic healthcare management and guidance.",
      icon: <Stethoscope className="text-brand-blue" size={28} />,
      color: "bg-purple-50"
    },
    {
      title: "Diagnostic Support",
      desc: "Advanced 2D Echo, TMT, and ECG labs with highly accurate results for better care.",
      icon: <Zap className="text-brand-blue" size={28} />,
      color: "bg-emerald-50"
    },
    {
      title: "Follow-up Care",
      desc: "Post-treatment guidance and continuous monitoring for long-term heart health.",
      icon: <Search className="text-brand-blue" size={28} />,
      color: "bg-amber-50"
    }
  ];

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
             <Heart size={240} className="text-brand-blue" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            WHAT WE OFFER
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
             Precision <span className="underline decoration-brand-accent decoration-4 underline-offset-8">Heart Services</span>
          </h2>
          <p className="text-slate-400 italic max-w-2xl mx-auto text-xl italic mb-10">
            "Every heart deserves precision. We provide the most advanced cardiology and super-speciality services in the region."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-100/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`${service.color} p-6 rounded-3xl inline-flex mb-8`}>
                   {service.icon}
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-blue mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg mb-8">
                   {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

