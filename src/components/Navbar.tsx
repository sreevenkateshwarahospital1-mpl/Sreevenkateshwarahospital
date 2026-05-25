import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Doctors", href: "#chief-cardiologist" },
    { name: "Contact", href: "#appointment" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:flex bg-brand-maroon text-white py-2 px-6 justify-between items-center text-sm font-medium">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 94931 01531</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Madanapalle, Andhra Pradesh</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Open 24 Hours
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-white py-5 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="bg-white p-1 rounded-lg">
               <img 
                 src="https://res.cloudinary.com/dforgkrp5/image/upload/v1778736224/hospital_logo_wgeldx.png" 
                 alt="Sree Venkateswara Hospital" 
                 className="h-16 md:h-20 w-auto object-contain rounded-md"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl md:text-3xl font-display font-bold text-brand-blue tracking-tight uppercase">SREE VENKATESWARA</span>
              <span className="text-[11px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mt-1">Super-Speciality Hospital</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-blue font-semibold transition-colors relative group"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919493101531"
              className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold hover:bg-brand-navy transition-all shadow-lg flex items-center gap-2"
            >
              <Phone size={18} />
              Emergency 24/7
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl border-t md:hidden flex flex-col py-6 px-6 gap-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#appointment"
                className="bg-brand-red text-white text-center py-4 rounded-xl font-bold mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
