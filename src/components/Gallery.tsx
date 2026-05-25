import { motion } from "motion/react";
import { Camera } from "lucide-react";

export default function Gallery() {
  const images = [
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_1_rgrfbfr_ydqmj5.webp",
      title: "Advanced Cardiac Lab",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_1_rgh_etcv16.webp",
      title: "Modern Consultation",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_1_rfbfbhth_h5vggp.webp",
      title: "Diagnostic Excellence",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_1_rgrhbh_bnsorg.webp",
      title: "Specialized Care Unit",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-2"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_1_rgrg_mkoqrb.webp",
      title: "Patient Comfort",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738783/unnamed_df_kotnai.webp",
      title: "Hospital Entrance",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    },
    {
      url: "https://res.cloudinary.com/dforgkrp5/image/upload/v1778738784/unnamed_2_wxhnut.jpg",
      title: "Emergency Care",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1"
    }
  ];

  return (
    <section id="gallery" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            <Camera size={14} /> EXPLORE OUR FACILITY
          </motion.div>
          <h2 className="text-5xl lg:text-7xl font-display font-bold text-brand-blue mb-6">
            Hospital <span className="italic font-normal">Gallery</span>
          </h2>
          <p className="text-slate-400 italic max-w-2xl mx-auto text-xl italic mb-10">
            Take a visual tour of our state-of-the-art medical infrastructure and compassionate environment.
          </p>
        </div>

        {/* Featured Video Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white max-w-5xl mx-auto group relative bg-black"
        >
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dforgkrp5&public_id=kishore_sir_award_video_sgfp58&fluid=true"
            className="w-full aspect-video"
            style={{ border: 0, display: 'block' }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[1200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${image.colSpan} ${image.rowSpan} group relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
