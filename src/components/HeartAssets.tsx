import { motion } from "motion/react";

export const HeartIconSimple = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const HeartPulse = ({ className = "w-12 h-12 text-brand-red" }: { className?: string }) => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative flex items-center justify-center"
  >
    <HeartIconSimple className={className} />
    <motion.div
      initial={{ scale: 1, opacity: 0.5 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute inset-0 border-2 border-current rounded-full"
    />
  </motion.div>
);

export const ECGLine = ({ className = "" }: { className?: string }) => (
  <div className={`overflow-hidden h-12 w-full ${className}`}>
    <svg 
      className="w-full h-full text-brand-red opacity-20" 
      viewBox="0 0 1000 100" 
      preserveAspectRatio="none"
    >
      <path
        d="M0 50 L100 50 L120 20 L140 80 L160 50 L300 50 L320 10 L340 90 L360 50 L600 50 L620 20 L640 80 L660 50 L800 50 L820 10 L840 90 L860 50 L1000 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="ecg-line"
      />
    </svg>
  </div>
);
