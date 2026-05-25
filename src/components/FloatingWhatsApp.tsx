import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const phoneNumber = "919493101531";
  const defaultMessage = "Hello! I am reaching out from your website for an appointment or enquiry.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Toast Notification message with smooth bounce / slide - hidden on extra small/small mobile devices to preserve screen estate */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
        className="hidden md:flex bg-slate-900/90 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md border border-slate-800/50 items-center gap-2 pointer-events-auto select-none"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Need Quick Help? Chat on WhatsApp
      </motion.div>

      {/* Floating Button - Always fully visible and clickable on all views */}
      <motion.a
        id="floating-whatsapp-btn"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1, translateY: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:bg-[#20ba5a] transition-all cursor-pointer relative group"
      >
        {/* Pulsating background ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.588 1.451 5.416 1.452 5.378 0 9.757-4.374 9.76-9.752.002-2.605-1.01-5.055-2.85-6.897-1.84-1.841-4.293-2.853-6.903-2.853-5.38 0-9.76 4.374-9.763 9.755-.001 1.956.511 3.864 1.484 5.56l-.974 3.559 3.655-.959c1.653.901 3.513 1.378 5.175 1.379zm6.015-11.004c-.161-.357-.331-.364-.485-.371-.126-.006-.271-.006-.416-.006-.146 0-.383.055-.584.274-.201.219-.766.748-.766 1.822 0 1.075.78 2.115.89 2.261.11.146 1.534 2.343 3.717 3.284 2.183.941 2.183.627 2.622.583.438-.044 1.41-.577 1.611-1.139.201-.562.201-1.042.141-1.139-.06-.098-.22-.157-.464-.279-.244-.122-1.411-.696-1.63-.775-.219-.079-.378-.122-.538.122-.16.244-.619.775-.758.934-.138.16-.277.18-.521.058-.244-.122-.962-.355-1.832-1.131-.676-.603-1.132-1.349-1.265-1.577-.132-.228-.014-.351.108-.472.11-.11.244-.286.366-.431.122-.146.163-.244.244-.407.081-.164.041-.307-.02-.429-.06-.122-.486-1.171-.666-1.603z" />
        </svg>
      </motion.a>
    </div>
  );
}
