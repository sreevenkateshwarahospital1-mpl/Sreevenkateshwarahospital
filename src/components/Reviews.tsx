import { motion } from "motion/react";
import { Star, Quote, Heart } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Suresh Kumar",
      content: "One of the best heart hospitals in Madanapalle. The staff is very cooperative and the doctors are highly experienced. Received excellent treatment for my father.",
      rating: 5,
      date: "2 months ago"
    },
    {
      name: "Anjali Reddy",
      content: "Highly recommend Sree Venkateswara Hospital. Their emergency response is very quick. The diagnostic facility is state-of-the-art.",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Venkatesh P",
      content: "Very clean and professional hospital. The cardiologists explained the procedure clearly. Great patient care.",
      rating: 4,
      date: "3 months ago"
    }
  ];

  return (
    <section id="reviews" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
             <span className="text-brand-accent font-bold uppercase tracking-[0.2em] text-xs mb-6 block">PATIENT TESTIMONIALS</span>
             <h2 className="text-5xl lg:text-8xl font-display font-bold text-brand-blue leading-[1.1]">
                Voices of <span className="text-brand-blue">Resilience</span>
             </h2>
          </div>
          <div className="bg-brand-light p-8 rounded-[2.5rem] border border-slate-100 flex items-center gap-10 shadow-xl shadow-slate-100">
             <div className="text-7xl font-display font-bold text-brand-blue">4.8</div>
             <div className="space-y-2">
                <div className="flex gap-1 text-brand-accent">
                   {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-2xl font-bold text-brand-blue">132+</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Google Reviews</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-12 rounded-[4rem] bg-white border border-slate-100 relative group shadow-2xl shadow-slate-100 flex flex-col justify-between"
            >
              <div className="absolute top-10 right-10 text-slate-100 opacity-50 group-hover:text-brand-accent transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="relative z-10">
                 <div className="flex gap-1 text-brand-accent mb-8">
                   {[...Array(5)].map((_, i) => <Star key={i} size={20} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-slate-200"} />)}
                 </div>
                 
                 <p className="text-2xl font-display italic text-slate-600 leading-relaxed mb-12">
                   "{review.content}"
                 </p>
              </div>
              
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                    <img src={`https://i.pravatar.cc/100?u=${review.name}`} alt={review.name} className="w-14 h-14 rounded-full" />
                    <div>
                       <h5 className="font-bold text-brand-blue text-lg leading-tight">{review.name}</h5>
                       <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                    </div>
                 </div>
                 <button className="text-slate-300 hover:text-brand-accent transition-colors">
                    <Heart size={20} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
