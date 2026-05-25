import { motion } from "motion/react";

export default function Experts() {
  const posters = [
    "https://res.cloudinary.com/dforgkrp5/image/upload/v1778687522/kishoresir_portfolio_2_awnict.jpg",
    "https://res.cloudinary.com/dforgkrp5/image/upload/v1778687522/kishore_sir_portfolio_igwgb1.jpg"
  ];

  return (
    <section className="py-8 bg-white overflow-hidden" id="experts">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-2"
            >
              <div className="w-8 h-[1.5px] bg-brand-blue" />
              <span className="text-brand-blue font-black tracking-widest text-[9px] uppercase">Expert Portfolio</span>
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posters.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: index * 0.2 
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group rounded-[2rem] overflow-hidden shadow-lg bg-slate-50 border border-slate-100"
            >
              <img 
                src={src} 
                alt={`Expert Portfolio ${index + 1}`}
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-brand-blue/10 pointer-events-none flex items-center justify-center"
              >
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-brand-blue text-[10px] font-black uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Profile
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
