import { motion } from "motion/react";
import { Instagram, Facebook, Youtube, Heart } from "lucide-react";

export default function SocialSection() {
  const socials = [
    {
      name: "Instagram",
      icon: <Instagram size={28} />,
      url: "https://www.instagram.com/sreevenkateswarahospital_mpl?igsh=MXkxcW9odXU4ZGxhMQ==",
      color: "hover:text-[#E4405F]",
      bgColor: "bg-[#E4405F]/10",
      borderColor: "border-[#E4405F]/20"
    },
    {
      name: "Facebook",
      icon: <Facebook size={28} />,
      url: "https://www.facebook.com/share/1BBA6JK7bN/",
      color: "hover:text-[#1877F2]",
      bgColor: "bg-[#1877F2]/10",
      borderColor: "border-[#1877F2]/20"
    },
    {
      name: "Youtube",
      icon: <Youtube size={28} />,
      url: "https://www.youtube.com/@Sreevenkateshwarahospital_Mpl",
      color: "hover:text-[#FF0000]",
      bgColor: "bg-[#FF0000]/10",
      borderColor: "border-[#FF0000]/20"
    }
  ];

  return (
    <section className="py-12 bg-brand-light relative overflow-hidden border-y border-slate-100">
      {/* Background elements */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
        <Heart size={150} className="text-brand-blue" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-[0.2em] text-[10px] mb-2"
            >
              <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
              Stay Connected
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy">
              Follow Us <span className="text-brand-blue">On</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`flex items-center gap-3 px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/40 transition-all group ${social.color}`}
              >
                <div className={`p-2.5 rounded-xl ${social.bgColor} transition-colors group-hover:bg-transparent`}>
                  {social.icon}
                </div>
                <span className="font-bold text-base text-brand-navy group-hover:text-inherit">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
