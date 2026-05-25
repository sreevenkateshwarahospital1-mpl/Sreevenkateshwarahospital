import { motion } from "motion/react";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";

export default function MapSection() {
  return (
    <section id="location" className="py-24 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h4 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Our Location</h4>
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
              Visit Us in <span className="text-brand-maroon">Madanapalle</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-brand-pink p-4 rounded-2xl h-fit text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <MapPin size={32} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Hospital Address</h5>
                  <p className="text-slate-500 leading-relaxed max-w-sm">
                    8th Cross, 1st Main, Prasanth Nagar, A.V. Naidu Colony, Madanapalle, Andhra Pradesh 517326, India
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="bg-brand-pink p-4 rounded-2xl h-fit text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <Phone size={32} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-slate-900 mb-2">Patient Helpline</h5>
                  <p className="text-slate-500 leading-relaxed">
                    +91 94931 01531 <br />
                    Available 24/7 for support & appointments.
                  </p>
                </div>
              </div>

              <motion.a 
                whileHover={{ x: 10 }}
                href="https://www.google.com/maps/place/SREE+VENKATESWARA+SUPER-SPECIALITY+HOSPITAL/@13.5620394,78.5031934,17z"
                target="_blank"
                className="inline-flex items-center gap-3 text-brand-red font-bold text-lg px-2 group"
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-200"
          >
            {/* Real Google Map Embed Style IFrame */}
            <iframe 
              title="Sree Venkateswara Hospital Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.666986280436!2d78.5031934!3d13.5620394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2670056cf3f7b%3A0x8cc30941e93df331!2sSREE+VENKATESWARA+SUPER-SPECIALITY+HOSPITAL!5e0!3m2!1sen!2sin!4v1715682000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.1) brightness(1.0)' }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="absolute top-6 right-6">
               <div className="bg-brand-red text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <Navigation size={20} />
                  <span className="font-bold">8 mins from Bus Stand</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
