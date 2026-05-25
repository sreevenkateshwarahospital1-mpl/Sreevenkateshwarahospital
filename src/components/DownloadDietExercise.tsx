import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Download, 
  Leaf, 
  Activity, 
  Heart, 
  CheckCircle2, 
  Calendar, 
  Flame, 
  ShieldAlert, 
  Check, 
  Printer, 
  Clock, 
  Waves, 
  HelpCircle,
  Stethoscope 
} from "lucide-react";

interface VisualItem {
  title: string;
  subtitle: string;
  highlight: string;
  detailedItems: string[];
  recommendation: string;
  rationale: string;
  color: "emerald" | "sky" | "amber" | "teal" | "rose" | "indigo" | "orange";
  imageUrl: string;
}

const dietItems: VisualItem[] = [
  {
    title: "Premium Nitrate-Rich Leafy Greens",
    subtitle: "Naturally relaxes blood vessel lining to reduce myocardial workload",
    highlight: "Vitamin K, Nitrates & Magnesium",
    detailedItems: ["Baby Spinach Leaves", "Curly Dark Kale", "Swiss Chard Stems", "Arugula (Rocket)", "Fresh Romaine bedding", "Collard Greens", "Beet Greens"],
    recommendation: "1-2 servings daily, steamed or as fresh bedding",
    rationale: "Green vegetables contain concentrated nitric oxide precursors which assist coronary dilation and control blood pressure spikes.",
    color: "emerald",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Cold-Water Fatty Fish (Omega-3 Core)",
    subtitle: "Actively minimizes arterial plaque build-up and cellular swelling",
    highlight: "Essential DHA & EPA Fats",
    detailedItems: ["Wild-caught Salmon", "Atlantic Mackerel", "Sardines in spring water", "Albacore Tuna chunks", "Pacific Sardines", "Anchovies / Herring"],
    recommendation: "2-3 servings weekly (approx. 150g per serving)",
    rationale: "Omega-3 fatty acids decrease system inflammatory markers, optimize serum lipids, and decrease arrhythmia risk.",
    color: "sky",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Beta-Glucan Soluble Fibers",
    subtitle: "Reduces circulating total LDL cholesterol levels in vascular channels",
    highlight: "Soluble Fiber & Zinc",
    detailedItems: ["Steel-cut Oats", "Organic Rolled Oats", "Whole-grain Barley", "Oat Bran", "Coarse Whole Rye"],
    recommendation: "1 cup daily, served warm and unsweetened",
    rationale: "Soluble fiber acts like a sponge in the digestive tract, actively binding cholesterol precursors and removing them from circulation.",
    color: "amber",
    imageUrl: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Monounsaturated Polyphenol Core",
    subtitle: "Protects delicate arterial lining from oxidative stress",
    highlight: "Squalene & Oleocanthal",
    detailedItems: ["Cold-pressed Extra Virgin Olive Oil", "Organic Hass Avocados", "Pure Avocado Salad Oil", "Pitted Green & Black Olives"],
    recommendation: "2-3 tablespoons daily, drizzled cold",
    rationale: "Active polyphenols downregulate critical inflammatory cytokines, reinforcing vascular compliance and overall elasticity.",
    color: "teal",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "High-ORAC Active Forest Berries",
    subtitle: "Strengthens delicate endothelial microvascular junctions",
    highlight: "Anthocyanins & Flavonoids",
    detailedItems: ["Wild Mountain Blueberries", "Red Raspberries", "Glossy Blackberries", "Tart Morello Cherries", "Organic Goji Berries"],
    recommendation: "1/2 cup daily, fresh or frozen",
    rationale: "Anthocyanins give berries their deep colors and trigger powerful antioxidant protections in the vascular lining.",
    color: "rose",
    imageUrl: "https://images.unsplash.com/photo-1488900128323-21503983a07e?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Unsalted Polyunsaturated Nuts",
    subtitle: "Optimizes the clean ratio of high-density to low-density lipids",
    highlight: "Omega-3 ALAs & Plant Sterols",
    detailedItems: ["Raw English Walnuts", "Fresh Almond halves", "Organic Chia Seeds", "Dry Pumpkin Seeds", "Ground Flax Seeds"],
    recommendation: "1 handful (~30g) as an afternoon snack",
    rationale: "Provides highly stable plant sterols and L-Arginine, which support nitrogen balance and microvascular relaxation.",
    color: "orange",
    imageUrl: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400"
  }
];

const exerciseItems: VisualItem[] = [
  {
    title: "Low-Impact Aerobic Base Walking",
    subtitle: "Safely strengthens heart muscle contractions without joint stress",
    highlight: "Zone 1-2 Heart Rate Range",
    detailedItems: ["Grassy nature trails", "Paved park circular tracks", "Indoor walking lanes", "Treadmill (0-1% flat incline)"],
    recommendation: "30-45 minutes daily, consistent continuous pace",
    rationale: "Walking generates gentle muscle reaction forces that stimulate peripheral circulation and raise resting blood flow capacity.",
    color: "emerald",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Therapeutic Power-Controlled Cycling",
    subtitle: "Cardiorespiratory conditioning with strict RPM monitoring",
    highlight: "Low Resistance Aerobics",
    detailedItems: ["Recumbent stationary cycles", "Low-impact upright gym bikes", "Flat paved cycling lanes"],
    recommendation: "20-30 minutes, 3-4 times per week",
    rationale: "Cycling forces a controlled cyclic leg pump which assists blood return to the right atrium with minimal cardiac load.",
    color: "sky",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Hydrostatic Buoyant Pool Therapy",
    subtitle: "Applies gentle hydrostatic pressure to support overall circulation",
    highlight: "Warm Water Cardio Relief",
    detailedItems: ["Supervised chest pool walk", "Float-supported leg steps", "Hydro-aerobic joint stretches", "Water marching"],
    recommendation: "30-40 minutes in heated pool (84-88°F)",
    rationale: "Warm water hydrostatic pressure assists deep venous return, reduces swelling, and prevents thermal vascular spasm.",
    color: "teal",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Progressive Steady-State Hikes",
    subtitle: "Improves overall VO2 max thresholds and arterial oxygen transfer",
    highlight: "Enhanced Cardiorespiratory Load",
    detailedItems: ["Gently sloped dirt trails", "Paced outdoor hikes", "Low gradient climbing tracks"],
    recommendation: "20-30 minutes, 2-3 times per week",
    rationale: "Climbing flat gradients challenges myocardial reserves cleanly, encouraging collateral blood vessel growth.",
    color: "rose",
    imageUrl: "https://images.unsplash.com/photo-1502904585520-2a21c6ba0b8f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Autonomic Node Interval Training",
    subtitle: "Teaches the autonomic nervous system to recover rapidly from exertion",
    highlight: "Controlled Pace Variation",
    detailedItems: ["20-sec active sprint / 40-sec walk", "Dual-resistance cycle intervals", "Rhythmic rowing machine slides"],
    recommendation: "15-20 minutes, 1-2 times weekly",
    rationale: "Pace adjustments alternate sympathetic and parasympathetic states, directly optimizing long-term Heart Rate Variability.",
    color: "indigo",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400"
  }
];

export default function DownloadDietExercise() {
  const [activePrintType, setActivePrintType] = useState<"diet" | "exercise" | null>(null);
  const [activeTab, setActiveTab] = useState<"diet" | "exercise">("diet");

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const currentItems = activeTab === "diet" ? dietItems : exerciseItems;
  const currentActiveItem = currentItems[selectedItemIndex] || currentItems[0];

  const handleTabChange = (tab: "diet" | "exercise") => {
    setActiveTab(tab);
    setSelectedItemIndex(0);
  };

  const colors = {
    emerald: "border-emerald-200 bg-emerald-50/40 text-emerald-800 focus-ring-emerald",
    sky: "border-sky-200 bg-sky-50/40 text-sky-800 focus-ring-sky",
    amber: "border-amber-200 bg-amber-50/40 text-amber-800 focus-ring-amber",
    teal: "border-teal-200 bg-teal-50/40 text-teal-800 focus-ring-teal",
    rose: "border-rose-200 bg-rose-50/40 text-rose-800 focus-ring-rose",
    indigo: "border-indigo-200 bg-indigo-50/40 text-indigo-800 focus-ring-indigo",
    orange: "border-orange-200 bg-orange-50/40 text-orange-800 focus-ring-orange"
  };

  const badgeColors = {
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    sky: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  };

  const badgeTextColors = {
    emerald: "text-emerald-400",
    sky: "text-sky-400",
    amber: "text-amber-400",
    teal: "text-teal-400",
    rose: "text-rose-400",
    indigo: "text-indigo-400",
    orange: "text-orange-400"
  };

  const handleDownload = (type: "diet" | "exercise") => {
    const url = type === "diet"
      ? "https://drive.google.com/file/d/12jwgyoI2pgZNJ-cyOaF4xlgCWJHOkPVY/view?usp=sharing"
      : "https://drive.google.com/file/d/1ssdoQaXOkqnSqWSliR4G5XLVpfG9pSi7/view?usp=sharing";
    window.open(url, "_blank");
  };

  return (
    <section 
      id="download-diet-exercise" 
      className="py-16 bg-slate-900 text-slate-100 relative overflow-hidden border-t border-slate-800 print:bg-white print:p-0 print:border-0"
    >
      {/* Background graphic flare */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Dynamic Style Injection for isolation during print */}
      {activePrintType === "diet" && (
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body > #root > :not(.print-diet-sheet-container) {
              display: none !important;
            }
            .print-diet-sheet-container {
              display: block !important;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white !important;
              color: #0f172a !important;
            }
          }
        `}} />
      )}

      {activePrintType === "exercise" && (
        <style dangerouslySetInnerHTML={{__html: `
          @media print {
            body > #root > :not(.print-exercise-sheet-container) {
              display: none !important;
            }
            .print-exercise-sheet-container {
              display: block !important;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              background: white !important;
              color: #0f172a !important;
            }
          }
        `}} />
      )}
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-950/50 border border-emerald-500/25 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">
            <Activity size={12} className="heartbeat" />
            Clinical Discharge Guides
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-4">
            Download My Diet & Exercise
          </h2>
          <p className="text-sm md:text-base text-slate-400 font-medium">
            Review illustrated therapeutic catalogs below. Access clinically validated medical lists, item descriptions, and professional rationales. Export them as beautifully pre-formatted print PDFs for your pantry or fitness room.
          </p>
        </div>

        {/* Tab Selection Console and Direct Download actions */}
        <div className="bg-slate-950/40 backdrop-blur-md rounded-3xl border border-slate-800/80 p-4 md:p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex bg-slate-900 p-1.5 rounded-2xl border border-slate-800 w-full md:w-auto">
            <button
              onClick={() => handleTabChange("diet")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "diet"
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Leaf size={14} strokeWidth={2.5} />
              Cardio-Protective Diet
            </button>
            <button
              onClick={() => handleTabChange("exercise")}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "exercise"
                  ? "bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Activity size={14} strokeWidth={2.5} />
              Rehabilitation Exercise
            </button>
          </div>

          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button
              onClick={() => handleDownload("diet")}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 px-5 py-3 rounded-xl border border-emerald-500/30 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <Download size={14} strokeWidth={2.5} />
              Download Diet List
            </button>
            <button
              onClick={() => handleDownload("exercise")}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-sky-400 hover:text-sky-300 px-5 py-3 rounded-xl border border-sky-500/30 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer"
            >
              <Download size={14} strokeWidth={2.5} />
              Download Exercise List
            </button>
          </div>
        </div>

        {/* Catalog Items Grid Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeTab === "diet" ? dietItems : exerciseItems).map((item, index) => {
              const borderCol = activeTab === "diet" ? "hover:border-emerald-500/30" : "hover:border-sky-500/30";
              const keyBadgeColor = badgeColors[item.color];
              return (
                <div
                  key={index}
                  className={`bg-slate-950/60 rounded-3xl border border-slate-800/80 p-5 overflow-hidden flex flex-col justify-between group transition-all duration-300 ${borderCol}`}
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-slate-800/30">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      
                      {/* Sub-label Highlight inside Image */}
                      <span className={`absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border backdrop-blur-md ${keyBadgeColor}`}>
                        {item.highlight}
                      </span>
                    </div>

                    {/* Metadata */}
                    <h3 className="text-base font-black text-white group-hover:text-emerald-350 transition-colors duration-200 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium leading-relaxed mt-1 mb-4">
                      {item.subtitle}
                    </p>

                    {/* Detailed List */}
                    <div className="mb-4">
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block mb-1.5">
                        {activeTab === "diet" ? "Approved Eatable Items" : "Approved Clinical Activities"}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.detailedItems.map((det, detIdx) => (
                          <span 
                            key={detIdx} 
                            className="bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1"
                          >
                            <span className={`w-1 h-1 rounded-full ${activeTab === "diet" ? "bg-emerald-400" : "bg-sky-400"}`} />
                            {det}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Frequency and Clinical Rationale Section */}
                  <div className="border-t border-slate-900 pt-4 mt-2">
                    <div className="flex items-center gap-1.5 text-[10px] text-yellow-500 font-extrabold uppercase tracking-wide mb-1">
                      <Clock size={11} />
                      Prescribed Guideline
                    </div>
                    <p className="text-xs text-slate-200 font-semibold mb-2.5 bg-slate-900/40 p-2 rounded-lg border border-slate-800/40">
                      {item.recommendation}
                    </p>
                    <p className="text-[10px] text-slate-400 italic leading-relaxed">
                      <strong>Medical Rationale:</strong> {item.rationale}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Core Quick Print Reminder Callout */}
        <div className="mt-12 bg-slate-950/40 rounded-3xl p-6 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-950/50 text-emerald-400 p-3 rounded-full border border-emerald-500/20 shrink-0">
              <Stethoscope size={20} />
            </div>
            <div>
              <h4 className="text-sm font-black text-white">Need a dynamic, customized discharge list?</h4>
              <p className="text-xs text-slate-400">Use the interactive Heart Care Console above to custom select recommended parameters and write custom reports.</p>
            </div>
          </div>
          <button 
            onClick={() => handleDownload(activeTab)}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            <Download size={13} strokeWidth={2.5} />
            Download Currently Selected Visual List
          </button>
        </div>
      </div>

      {/* 
        ============================================================
        EXPORTABLE CLINICAL DIET PDF DOCUMENT (HIDDEN EXCEPT ON PRINT)
        ============================================================
      */}
      <div className="hidden print-diet-sheet-container w-full bg-white text-slate-900 p-10 font-sans leading-relaxed">
        {/* Letterhead */}
        <div className="border-b-4 border-slate-900 pb-4 mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
              Sree Venkateshwara Hospital
            </h1>
            <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">
              Department of Cardiology & Cardiovascular Prevention
            </p>
            <p className="text-[10px] text-slate-400">
              Official Reference Guide • SVH Cardioprotective Diet Standard
            </p>
          </div>
          <div className="text-right">
            <div className="bg-emerald-50 border border-emerald-100 p-1 px-2.5 rounded-lg text-emerald-800 font-extrabold text-[10px] uppercase tracking-wider inline-block">
              Prescribed Diet Master Record
            </div>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">
              Date Printed: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-700 font-bold mb-1">
            <strong>CLINICAL INTENT:</strong> To introduce concentrated dietary nitrates, essential Omega-3 fatty acids, and key soluble fibers to support cell recovery, downregulate myocardial oxygen demand, and inhibit arterial plaque formation.
          </p>
          <p className="text-[10px] text-slate-500 font-medium">
            *This list constitutes a direct clinical recommendation compiled under SVH Myocardial Board parameters. Keep visible in family kitchens.
          </p>
        </div>

        {/* Visual-oriented list item details featuring pictures in table-like or clean-grid format for paper */}
        <div className="space-y-6">
          {dietItems.map((item, index) => (
            <div key={index} className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 break-inside-avoid">
              {/* Thumbnail Container */}
              <div className="w-24 h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Key descriptions */}
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-black text-slate-900">{index + 1}. {item.title}</h4>
                  <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 uppercase font-mono">
                    {item.highlight}
                  </span>
                </div>
                
                <p className="text-xs text-slate-700 font-semibold mb-1">
                  <strong>Dosage / Rule:</strong> {item.recommendation}
                </p>

                <p className="text-[11px] text-slate-500 mb-2">
                  <strong>Physiological Mechanism:</strong> {item.rationale}
                </p>

                {/* Approved Detailed Foods list inside paper guide */}
                <div className="flex flex-wrap gap-1">
                  <span className="text-[9px] font-black text-slate-400 mr-2 self-center">APPROVED FOOD ELEMENTS:</span>
                  {item.detailedItems.map((food, fIdx) => (
                    <span key={fIdx} className="bg-slate-100 text-slate-900 text-[10px] px-2 py-0.5 rounded font-bold border border-slate-250/70">
                      ✔ {food}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer verification details */}
        <div className="border-t border-slate-400 pt-6 mt-8 grid grid-cols-2 gap-8 break-inside-avoid">
          <div>
            <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-8">SVH CLINICAL VERIFICATION STAMP</p>
            <div className="border-t border-slate-300 w-48 pt-1">
              <p className="text-[9px] font-bold text-slate-500">Board Authority Reference: SVH-DIET-X1</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-8 block">PRESCRIPTION AUDIT LOG</span>
            <div className="border-t border-slate-300 w-48 pt-1 text-right">
              <p className="text-[9px] font-bold text-slate-500">Board Certified Signature / Date</p>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ============================================================
        EXPORTABLE CLINICAL EXERCISE PDF DOCUMENT (HIDDEN EXCEPT ON PRINT)
        ============================================================
      */}
      <div className="hidden print-exercise-sheet-container w-full bg-white text-slate-900 p-10 font-sans leading-relaxed">
        {/* Letterhead */}
        <div className="border-b-4 border-slate-900 pb-4 mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
              Sree Venkateshwara Hospital
            </h1>
            <p className="text-xs font-bold text-slate-500 tracking-wider uppercase">
              Department of Cardiology & Cardiovascular Prevention
            </p>
            <p className="text-[10px] text-slate-400">
              Official Reference Guide • SVH Cardioprotective Rehabilitation Activity Standard
            </p>
          </div>
          <div className="text-right">
            <div className="bg-sky-50 border border-sky-100 p-1 px-2.5 rounded-lg text-sky-800 font-extrabold text-[10px] uppercase tracking-wider inline-block">
              Prescribed Activity Master Record
            </div>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">
              Date Printed: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-700 font-bold mb-1">
            <strong>CLINICAL INTENT:</strong> To introduce safe steady-state cardiovascular conditioning, increase autonomic heart node adaptation speeds, and encourage healthy blood return without creating elevated chest pressures.
          </p>
          <p className="text-[10px] text-slate-500 font-medium">
            *This list constitutes a direct clinical recommendation compiled under SVH Myocardial Board parameters. Do not exceed target heart rates.
          </p>
        </div>

        {/* Visual-oriented list item details featuring pictures to allow easy offline activity guidance */}
        <div className="space-y-6">
          {exerciseItems.map((item, index) => (
            <div key={index} className="flex gap-4 border-b border-slate-100 pb-4 last:border-0 break-inside-avoid">
              {/* Thumbnail Container */}
              <div className="w-24 h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Key Descriptions */}
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-sm font-black text-slate-900">{index + 1}. {item.title}</h4>
                  <span className="text-[9px] font-bold text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 uppercase font-mono">
                    {item.highlight}
                  </span>
                </div>
                
                <p className="text-xs text-slate-700 font-semibold mb-1">
                  <strong>Pacing / Duration:</strong> {item.recommendation}
                </p>

                <p className="text-[11px] text-slate-500 mb-2">
                  <strong>Physiological Mechanism:</strong> {item.rationale}
                </p>

                {/* Approved Detailed item list inside paper guide */}
                <div className="flex flex-wrap gap-1">
                  <span className="text-[9px] font-black text-slate-400 mr-2 self-center">APPROVED MODALITIES:</span>
                  {item.detailedItems.map((act, aIdx) => (
                    <span key={aIdx} className="bg-slate-100 text-slate-900 text-[10px] px-2 py-0.5 rounded font-bold border border-slate-250/70">
                      ✔ {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer stamp authentication info */}
        <div className="border-t border-slate-400 pt-6 mt-8 grid grid-cols-2 gap-8 break-inside-avoid">
          <div>
            <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-8">SVH CLINICAL VERIFICATION STAMP</p>
            <div className="border-t border-slate-300 w-48 pt-1">
              <p className="text-[9px] font-bold text-slate-500">Board Authority Reference: SVH-EXERCISE-Y2</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-8 block">PRESCRIPTION AUDIT LOG</span>
            <div className="border-t border-slate-300 w-48 pt-1 text-right">
              <p className="text-[9px] font-bold text-slate-500">Board Certified Signature / Date</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
