import React from 'react';
import { motion } from 'motion/react';

export default function HeartbeatBar() {
  return (
    <div className="w-full h-24 bg-white relative overflow-hidden flex items-center justify-center group/bar">
      {/* Background ECG Waves */}
      <div className="absolute inset-0 opacity-[0.1]">
        <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <motion.path
            d="M0 50 L100 50 L120 20 L140 80 L160 50 L300 50 L320 10 L340 90 L360 50 L500 50 L520 20 L540 80 L560 50 L700 50 L720 10 L740 90 L760 50 L900 50 L1000 50"
            fill="none"
            stroke="#B91C1C"
            strokeWidth="2"
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </svg>
      </div>

      {/* Heart Video Center - Cropped to remove vignette */}
      <div className="relative z-10 h-full aspect-square md:aspect-video flex items-center justify-center overflow-hidden">
        <div className="scale-125 md:scale-110 w-full h-full flex items-center justify-center">
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dforgkrp5&public_id=heart_beat_1_cosm1e&autoplay=true&loop=true&muted=true&controls=false"
            width="640"
            height="360" 
            className="h-full w-auto pointer-events-none"
            style={{ height: '100%', width: 'auto', aspectRatio: '640 / 360' }}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </div>

      {/* Side Labels */}
      <div className="absolute left-8 z-20 hidden lg:flex items-center gap-3">
        <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Live Vitality</span>
          <span className="text-xs font-black text-brand-red uppercase">Core Sync</span>
        </div>
      </div>

      <div className="absolute right-8 z-20 hidden lg:flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Hospitality</span>
          <span className="text-xs font-black text-brand-red uppercase">Actively Caring</span>
        </div>
        <div className="w-1.5 h-1.5 bg-brand-red rounded-full animate-ping" />
      </div>
    </div>
  );
}
