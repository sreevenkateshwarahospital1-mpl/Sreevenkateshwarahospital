import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Apple, 
  Flame, 
  Activity, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Info,
  ShieldCheck,
  Ban,
  Check,
  Plus,
  Trash2,
  Printer,
  HeartPlus,
  Sparkles,
  Utensils,
  Dumbbell
} from "lucide-react";

interface SubCategoryItem {
  name: string;
  benefit: string;
  type: "highly-recommended" | "avoid";
  rationale?: string;
  nutritionInfo?: string;
  detailedItems?: string[];
}

interface ProgramData {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  colorTheme: string;
  diet: {
    intro: string;
    nutrients: Array<{ name: string; desc: string; ratio: number }>;
    items: SubCategoryItem[];
  };
  exercise: {
    intro: string;
    nutrients: Array<{ name: string; desc: string; ratio: number }>;
    items: SubCategoryItem[];
  };
}

export default function HeartWellness() {
  const [activeTab, setActiveTab] = useState<"patients" | "prevention">("patients");
  const [selectedSubCategory, setSelectedSubCategory] = useState<"diet" | "exercise">("diet");
  const [customPlan, setCustomPlan] = useState<SubCategoryItem[]>([]);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Structured Content for both programs featuring precise visual keys & highly detailed listings
  const data: Record<"patients" | "prevention", ProgramData> = {
    patients: {
      title: "Cardiac Rehab",
      subtitle: "Clinically monitored recovery pathways post-surgery or event.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400",
      imageAlt: "Controlled athletic breathing and cardiac stretch rehab",
      colorTheme: "from-sky-600 to-indigo-600",
      diet: {
        intro: "Focused strictly on stabilizing arterial pressure, low sodium, and cellular re-building.",
        nutrients: [
          { name: "Sodium Guard (<1500mg)", desc: "Essential boundary to prevent fluid swelling.", ratio: 95 },
          { name: "Soluble Fiber Intake", desc: "Actively binds cholesterol in digestion.", ratio: 90 },
          { name: "High Potassium Balance", desc: "Helps offset salt effects naturally.", ratio: 85 }
        ],
        items: [
          { 
            name: "Nitrate-rich Leafy Greens", 
            benefit: "Relaxes blood vessel lining to lower heart strain.", 
            type: "highly-recommended",
            rationale: "Spinach, Swiss chard, and kale contain concentrated nitric oxide precursors.",
            nutritionInfo: "Rich in Vitamin K, Nitrates, and Magnesium",
            detailedItems: ["Baby Spinach leaves", "Curly Dark Kale", "Swiss Chard ribs", "Arugula (Rocket)", "Fresh Romaine bedding", "Collard Greens", "Beet Greens"]
          },
          { 
            name: "Cold-Water Fatty Fish", 
            benefit: "Omega-3 acids help stabilize natural heart rhythm.", 
            type: "highly-recommended",
            rationale: "Salmon and mackerel decrease inflammatory markers and optimize serum lipids.",
            nutritionInfo: "Provides ~2.5g of DHA/EPA per serving",
            detailedItems: ["Wild-caught Salmon", "Atlantic Mackerel", "Sardines in water", "Albacore Tuna chunks", "Pacific Sardines", "Anchovies / Herring"]
          },
          { 
            name: "Organic Whole Oats", 
            benefit: "Beta-glucan traps bad LDL cholesterol.", 
            type: "highly-recommended",
            rationale: "Daily intake reduces total risk metrics by lowering arterial plaque feedstocks.",
            nutritionInfo: "Contains 5g of soluble fiber per cup",
            detailedItems: ["Steel-cut Oats", "Organic Rolled Oats", "Unrefined Barley kernels", "High-fiber Oat Bran", "Coarse Whole-grain Rye"]
          },
          { 
            name: "Nitrite-Cured Meats", 
            benefit: "Concentrated sodium instantly spikes arterial pressure.", 
            type: "avoid",
            rationale: "Preservatives and severe salt generate instant endothelin-mediated tension.",
            nutritionInfo: "Average 1200mg sodium per 100g",
            detailedItems: ["Hard Cured Salami", "Smoked Pork Bacon", "Standard Hot Dogs", "Processed Deli Ham", "Cured Pepperoni slices", "Bologna slices", "Packed Corned Beef"]
          },
          { 
            name: "Refined Wheat Flour & Sugars", 
            benefit: "Causes rapid, swelling vascular inflammation forks.", 
            type: "avoid",
            rationale: "Spikes blood sugar, causing oxidative stress",
            nutritionInfo: "Destroys cellular cardiovascular elasticity",
            detailedItems: ["Soft White Bread", "Processed White Crackers", "Commercial Cupcakes", "Refined Table Sugar", "Sugary Frosted Cereals", "Sweet Butter Biscuits", "Fancy Milk Chocolates"]
          }
        ]
      },
      exercise: {
        intro: "Light, low-impact exercise intended to maintain safely loaded metabolic stroke limits.",
        nutrients: [
          { name: "Aerobic Loading (50-65% Max)", desc: "Comfortable pacing supporting safe coronary output.", ratio: 70 },
          { name: "Gradual Warmup Duration", desc: "Crucial 10m start prevents myocardial pressure shocks.", ratio: 100 },
          { name: "Weekly Target (150m)", desc: "Steady active training aids cardiac muscle remodelling.", ratio: 80 }
        ],
        items: [
          { 
            name: "Paced Ground Walking", 
            benefit: "Reduces peripheral arterial resistance safely.", 
            type: "highly-recommended",
            rationale: "Increases circulatory capillary networks with minimal coronary artery load.",
            nutritionInfo: "Burn: ~150-200 kcal/hr at gentle pace",
            detailedItems: ["Level Grass Trails", "Paved Studio Tracks", "Indoor Mall Walkways", "Home Treadmill (0-1% incline)", "Gentle neighborhood strolls"]
          },
          { 
            name: "Supportive Cycling", 
            benefit: "Maintains optimal lower-body aerobic flow.", 
            type: "highly-recommended",
            rationale: "Allows fine tuning of wattage and resistance to prevent spikes in rate pressure.",
            nutritionInfo: "Low joint impact; heart rate controlled",
            detailedItems: ["Recumbent Stationary Bike", "Low-resistance Upright Bike", "Gentle level outdoor cycling paths", "Padded exercise trikes"]
          },
          { 
            name: "Therapeutic Water Aerobics", 
            benefit: "Uses gentle pool support to return circulation.", 
            type: "highly-recommended",
            rationale: "Warm pool temperatures prevent dangerous peripheral vasoconstriction.",
            nutritionInfo: "Provides passive pneumatic support",
            detailedItems: ["Shallow pool joint walks", "Supervised medical hydro-stretches", "Buoyancy-supported kick exercises", "Underwater chest breathing presses"]
          },
          { 
            name: "Heavy Isometric Lifting", 
            benefit: "Triggers immediate and dangerous pressure peaks.", 
            type: "avoid",
            rationale: "Holding your breath under loads spikes internal chest pressures instantly.",
            nutritionInfo: "Restricts oxygen flow temporarily",
            detailedItems: ["Overhead military shoulder press", "Heavy barbell bench press", "Max-load squats", "Straining leg presses", "Heavy kettlebell clean overheads"]
          },
          { 
            name: "Extreme Weather Jogging", 
            benefit: "Forced cold or hot air triggers high vascular strain.", 
            type: "avoid",
            rationale: "Increases workload on struggling coronary bypass graphs or valves.",
            nutritionInfo: "Dangerous mismatch in oxygen delivery",
            detailedItems: ["Winter morning runs (< 40°F / 4°C)", "Mid-day summer trails (> 90°F / 32°C)", "High-wind high-humidity beach jogging", "Cold air morning walks without layers"]
          }
        ]
      }
    },
    prevention: {
      title: "Prevention Care",
      subtitle: "A proactive shield to defend healthy arteries and heart parameters.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400",
      imageAlt: "Fresh premium greens, avocados, and heart safe meals",
      colorTheme: "from-emerald-600 to-teal-500",
      diet: {
        intro: "A powerhouse diet designed to enrich the endothelium and prevent atherosclerosis early.",
        nutrients: [
          { name: "Monounsaturated Lipids", desc: "Maintains flexible, friction-free artery walls.", ratio: 95 },
          { name: "Polyphenols & Nitrates", desc: "Promotes nitric oxide synthesis for cell flexibility.", ratio: 90 },
          { name: "Antioxidant Reservoirs", desc: "Protects lipids from oxidation in vascular loops.", ratio: 85 }
        ],
        items: [
          { 
            name: "Extra Virgin Olive Oil", 
            benefit: "Directly minimizes coronary inflammatory cytokines.", 
            type: "highly-recommended",
            rationale: "Oleocanthal and squalene molecules help downregulate inflammatory vascular cytokines.",
            nutritionInfo: "High in stable monounsaturated fats",
            detailedItems: ["Cold-pressed EVOO drizzling", "Unfiltered Greek Olive Oil", "Fresh Organic Hass Avocados", "Pure cold-pressed Avocado Salad Oil", "Whole pitted black and green olives"]
          },
          { 
            name: "Organic Forest Berries", 
            benefit: "Anthocyanins preserve blood vessel cell integrity.", 
            type: "highly-recommended",
            rationale: "Strengthens arterial capillary junctions and reduces free radical pressure.",
            nutritionInfo: "Massive active ORAC antioxidant score",
            detailedItems: ["Wild Mountain Blueberries", "Fresh Blackberries", "Red Raspberries", "Sieved Strawberries", "Tart Morello Cherries", "Dried organic Goji Berries"]
          },
          { 
            name: "Raw Unsalted Walnuts", 
            benefit: "Concentrated plant-based omega-3 alpha-linolenic acids.", 
            type: "highly-recommended",
            rationale: "Consistently lowers serum resting cholesterol levels inside vascular loops.",
            nutritionInfo: "High-density protein plus raw omega-3s",
            detailedItems: ["Chipped raw English Walnuts", "Fresh raw Pecan halves", "Dry-roasted whole Almonds", "Fresh ground Flax Seeds", "Organic Chia seed pudding", "Shelled Pumpkin Seeds"]
          },
          { 
            name: "Industrial Trans Fats & Fried Fast Food", 
            benefit: "Forces systematic arterial tissue scarring.", 
            type: "avoid",
            rationale: "Directly increases dangerous small dense LDL and damages arterial compliance.",
            nutritionInfo: "Highly unstable hydrogenated chain molecules",
            detailedItems: ["Margarine tub spreads", "Hydrogenated vegetable shortening", "Commercial deep-fried French fries", "Boxed frozen donuts", "Processed grocery store frosting", "Salty potato chips"]
          },
          { 
            name: "Added Refined Sugars", 
            benefit: "Causes swift cellular plaque progression.", 
            type: "avoid",
            rationale: "High glucose levels damages arterial lining and triggers free radical creation.",
            nutritionInfo: "Destroys micronutrient balance",
            detailedItems: ["High Fructose Corn Syrup (HFCS)", "Sweetened carbonated sodas", "Citrus energy sports drinks", "Sweet dessert syrups", "Artificial jelly candy drops", "Flavored sweetened tea packages"]
          }
        ]
      },
      exercise: {
        intro: "Active metabolic training focused on stroke volume expansion and lowering resting heart rate.",
        nutrients: [
          { name: "Aerobic Capacity (70-85%)", desc: "Expands heart chambers, promoting premium stroke metrics.", ratio: 90 },
          { name: "Weekly Duration (150-200m)", desc: "Promotes cellular tolerance against vascular fatigue.", ratio: 85 },
          { name: "Resistance Training", desc: "Relieves mechanical fluid pressure load off the heart.", ratio: 75 }
        ],
        items: [
          { 
            name: "Brisk Forest Road Jogging", 
            benefit: "Maximizes lung oxygen capacity and vessel flexibility.", 
            type: "highly-recommended",
            rationale: "Progressive ground reaction forces stimulate general nitric oxide releases.",
            nutritionInfo: "Burn: ~600 kcal/hr; boosts resting endorphins",
            detailedItems: ["Nature trail forest runs at 5-6 mph", "Paced speed walking with arm swings", "Outdoor power hikes", "Active incline hill climbs"]
          },
          { 
            name: "Free-style Lap Swimming", 
            benefit: "Full chest endurance without high gravitational shock.", 
            type: "highly-recommended",
            rationale: "Horizontal alignment assists return circulation and reduces cardiac fatigue issues.",
            nutritionInfo: "Full body muscle engagement",
            detailedItems: ["Medium-tempo breaststroke laps", "Horizontal flutter boards", "Warm saltwater lane pacing", "Water-resistance pool drills"]
          },
          { 
            name: "Short HIIT Intervals", 
            benefit: "Triggers supreme metabolic and adaptive recovery speeds.", 
            type: "highly-recommended",
            rationale: "Short intervals improve quick recovery rate of the myocardial nodes.",
            nutritionInfo: "Significantly elevates VO2 max",
            detailedItems: ["20-second active sprint / 40-second walk loops", "Stationary cycle high-wattage bursts", "Alternating bodyweight light jumps", "Rowing machine intense stroke runs"]
          },
          { 
            name: "Sedentary Desk Binding", 
            benefit: "Promotes leg alignment pooling and blood sluggishness.", 
            type: "avoid",
            rationale: "Slowing circulation increases chances of microscopic lining damage.",
            nutritionInfo: "Elevates risk factor exponentially",
            detailedItems: ["Continuous office chair sitting > 3 hours", "Slouched sofa TV watching hours", "Prolonged screen desk bindings without stretch breaks", "Static standing in one spot without leg movement"]
          },
          { 
            name: "Overtraining Exhaustion", 
            benefit: "Can raise systemic resting cortisol ratios dangerously.", 
            type: "avoid",
            rationale: "Too much physical loading with zero rest triggers general systemic stress.",
            nutritionInfo: "Spikes systemic systemic inflammation",
            detailedItems: ["Consecutive heavy daily training loops", "Pushing exercise through joint aches", "Skipping deep REM sleep cycles", "Severe muscle strain routines without recovery weeks"]
          }
        ]
      }
    }
  };

  const currentProfile = data[activeTab];
  const currentCategory = currentProfile[selectedSubCategory];

  // Add Item to planner sheet
  const handleAddToPlan = (item: SubCategoryItem) => {
    if (customPlan.some((p) => p.name === item.name)) return;
    setCustomPlan([...customPlan, item]);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 2000);
  };

  // Remove Item from planner sheet
  const handleRemoveFromPlan = (name: string) => {
    setCustomPlan(customPlan.filter((itm) => itm.name !== name));
  };

  const handlePrintPlan = () => {
    window.print();
  };

  return (
    <section 
      id="heart-wellness" 
      className="py-12 bg-slate-50 text-slate-900 border-t border-b border-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Compact unified console window: All accessible at once with NO PAGE SCROLLING */}
        <div className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl shadow-sky-900/5 relative overflow-hidden">
          
          {/* Subtle colored header line and grid lines */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.015)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-60" />

          {/* Top Console Bar - Row containing title, tabs, and actions cleanly packed */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
            
            {/* Title Block */}
            <div className="flex items-center gap-3">
              <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 border border-rose-100 hidden sm:block shrink-0 shadow-sm animate-pulse">
                <Heart size={24} fill="currentColor" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xs font-black text-rose-600 uppercase tracking-widest leading-none mb-1">
                  <Activity size={12} className="text-emerald-500" />
                  Clinical CardioStation
                </div>
                <h2 className="text-xl md:text-2xl font-display font-black text-slate-900 tracking-tight leading-none flex items-center gap-2">
                  Heart Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">Console</span>
                </h2>
              </div>
            </div>

            {/* Program profile switches + Subcategory toggles tightly grouped together */}
            <div className="flex flex-wrap items-center gap-3">
              
              {/* Cardiac Rehab vs Pre Protection */}
              <div className="bg-slate-100 p-1 rounded-xl border border-slate-200/50 flex gap-1 shadow-inner">
                <button
                  onClick={() => {
                    setActiveTab("patients");
                    setSelectedSubCategory("diet");
                  }}
                  id="tab-cardiac-rehab"
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-black text-[11px] uppercase tracking-wider transition-all ${
                    activeTab === "patients" 
                      ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <Heart size={12} className={activeTab === "patients" ? "text-rose-100 fill-rose-500" : "text-slate-400"} />
                  Cardiac Rehab
                </button>
                <button
                  onClick={() => {
                    setActiveTab("prevention");
                    setSelectedSubCategory("diet");
                  }}
                  id="tab-pre-protection"
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg font-black text-[11px] uppercase tracking-wider transition-all ${
                    activeTab === "prevention" 
                      ? "bg-gradient-to-r from-teal-600 to-sky-600 text-white shadow-sm" 
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  <ShieldCheck size={12} className={activeTab === "prevention" ? "text-emerald-100 fill-emerald-500" : "text-slate-400"} />
                  Pre Protection
                </button>
              </div>

              {/* Diet vs Exercises selector */}
              <div className="bg-slate-100 p-1 rounded-xl flex gap-1 shadow-inner border border-slate-200/40">
                <button
                  onClick={() => setSelectedSubCategory("diet")}
                  id="toggle-diet"
                  className={`px-3 py-1.5 rounded-lg font-extrabold text-[11px] transition-all flex items-center gap-1 ${
                    selectedSubCategory === "diet" 
                      ? "bg-white text-slate-900 shadow-xs" 
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <Apple size={12} className={selectedSubCategory === "diet" ? "text-emerald-500" : "text-slate-400"} />
                  Diet
                </button>
                <button
                  onClick={() => setSelectedSubCategory("exercise")}
                  id="toggle-exercise"
                  className={`px-3 py-1.5 rounded-lg font-extrabold text-[11px] transition-all flex items-center gap-1 ${
                    selectedSubCategory === "exercise" 
                      ? "bg-white text-slate-900 shadow-xs" 
                      : "text-slate-400 hover:text-slate-700"
                  }`}
                >
                  <Flame size={12} className={selectedSubCategory === "exercise" ? "text-amber-500" : "text-slate-400"} />
                  Exercise
                </button>
              </div>

            </div>

          </div>

          {/* Three-Column Desktop Dashboard: Extreme layout precision to view everything simultaneously */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* COLUMN 1: Profile details & interactive stocks photo (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-150">
              
              <div className="space-y-3">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img 
                    src={currentProfile.image} 
                    alt={currentProfile.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-sky-100 text-[8px] font-mono font-black text-sky-800 uppercase">
                    SVH Active Guide
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-800 leading-tight flex items-center gap-1.5">
                    {activeTab === "patients" ? <Heart size={14} className="text-rose-500 fill-rose-500/10" /> : <ShieldCheck size={14} className="text-teal-600" />}
                    {currentProfile.title} Portfolio
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-snug mt-1 italic">
                    {currentProfile.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 text-[11px] space-y-2">
                  <div className="bg-white/80 p-2.5 rounded-xl border border-slate-100 shadow-xs">
                    <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Clinical Standard</span>
                    <span className="text-xs text-slate-700 font-semibold block leading-relaxed">
                      {currentCategory.intro}
                    </span>
                  </div>
                </div>
              </div>

              {/* Extra branding and feedback values */}
              <div className="text-[10px] text-slate-400 font-bold border-t border-slate-200/60 pt-3 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                No scrolling needed • Approved V2
              </div>

            </div>

            {/* COLUMN 2: Target sliders & Recommended lists with easy click actions (lg:col-span-6) */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-5">
              
              {/* Target gauges aligned nicely and tightly in a grid */}
              <div>
                <span className="text-[9px] font-mono tracking-widest text-sky-700 font-black uppercase block mb-2">
                  Clinical parameters & Target Gauges
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentCategory.nutrients.map((target, idx) => (
                    <div 
                      key={idx}
                      className="bg-white px-3.5 py-3 rounded-xl border border-slate-150 shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold text-slate-800 uppercase block tracking-tight line-clamp-1">
                          {target.name}
                        </span>
                        <p className="text-[10px] text-slate-400 line-clamp-2 mt-0.5 leading-tight">
                          {target.desc}
                        </p>
                      </div>
                      
                      <div className="mt-2.5 pt-2 border-t border-slate-50">
                        <div className="flex justify-between text-[9px] font-bold mb-0.5">
                          <span className="text-slate-400 font-mono">TARGET</span>
                          <span className="text-sky-600 font-mono">{target.ratio}%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-sky-500 rounded-full" 
                            style={{ width: `${target.ratio}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended / Avoidances combined card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                
                {/* DOs list */}
                <div className="bg-emerald-500/[0.02] border border-emerald-500/15 rounded-2xl p-3 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-center gap-1.5 pb-2 border-b border-emerald-500/10 mb-2 font-black text-[10px] uppercase text-emerald-800 tracking-wider">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      Highly Recommended
                    </div>

                    <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-1">
                      {currentCategory.items
                        .filter(itm => itm.type === "highly-recommended")
                        .map((item, idx) => (
                          <div 
                            key={idx}
                            className="bg-white p-2.5 rounded-xl border border-slate-150 shadow-xs hover:border-emerald-300 transition-colors flex items-start justify-between gap-1 group/item cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="min-w-0 flex-1">
                              <h5 className="text-[11px] font-black text-slate-800 leading-snug group-hover/item:text-emerald-700">
                                {item.name}
                              </h5>
                              <p className="text-[9px] text-slate-400 mt-0.5 leading-snug">
                                {item.benefit}
                              </p>
                              {item.detailedItems && (
                                <div className="mt-1.5 flex flex-wrap gap-1">
                                  {item.detailedItems.map((sub, sIdx) => (
                                    <span key={sIdx} className="bg-emerald-50 text-emerald-800 text-[8px] px-1.5 py-0.5 rounded-sm font-semibold border border-emerald-100">
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => handleAddToPlan(item)}
                              className="bg-sky-50 hover:bg-sky-600 text-sky-600 hover:text-white p-1 rounded-md border border-sky-100 transition-all ml-1 shrink-0 self-start"
                              title="Add to safety sheet"
                            >
                              <Plus size={10} strokeWidth={3} />
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>

                  <span className="text-[8px] text-slate-400 font-semibold italic block pt-1 border-t border-emerald-500/10 mt-1">
                    * Click elements to view logic mechanism.
                  </span>
                </div>

                {/* DONTs list */}
                <div className="bg-rose-500/[0.02] border border-rose-500/15 rounded-2xl p-3 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-center gap-1.5 pb-2 border-b border-rose-500/10 mb-2 font-black text-[10px] uppercase text-rose-800 tracking-wider font-black">
                      <Ban size={13} className="text-rose-500" />
                      Crucial Avoidances
                    </div>

                    <div className="space-y-2.5 max-h-[190px] overflow-y-auto pr-1">
                      {currentCategory.items
                        .filter(itm => itm.type === "avoid")
                        .map((item, idx) => (
                          <div 
                            key={idx}
                            className="bg-white p-2.5 rounded-xl border border-slate-150 shadow-xs hover:border-rose-300 transition-colors flex items-start justify-between gap-1 group/item cursor-pointer"
                            onMouseEnter={() => setHoveredItem(item.name)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <div className="min-w-0 flex-1">
                              <h5 className="text-[11px] font-black text-slate-800 leading-snug group-hover/item:text-rose-700">
                                {item.name}
                              </h5>
                              <p className="text-[9px] text-slate-400 mt-0.5 leading-snug">
                                {item.benefit}
                              </p>
                              {item.detailedItems && (
                                <div className="mt-1.5 flex flex-wrap gap-1">
                                  {item.detailedItems.map((sub, sIdx) => (
                                    <span key={sIdx} className="bg-rose-50 text-rose-800 text-[8px] px-1.5 py-0.5 rounded-sm font-semibold border border-rose-100">
                                      {sub}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="text-rose-450 p-1 mr-0.5 shrink-0 select-none self-start">
                              <AlertTriangle size={11} className="text-rose-500" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  <span className="text-[8px] text-rose-500/80 font-bold italic block pt-1 border-t border-rose-500/10 mt-1">
                    * Minimize limits to avoid high strains.
                  </span>
                </div>

              </div>
              
            </div>

            {/* COLUMN 3: Dynamic interactive Planner sheet with physical PDF triggers (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-4 bg-slate-900 text-white p-4 rounded-2xl relative overflow-hidden">
              
              {/* Overlay heart grid */}
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <HeartPlus size={80} />
              </div>

              <div>
                <span className="text-[8px] font-mono tracking-widest text-sky-400 font-black uppercase block mb-1">
                  // Interactive Planner tool
                </span>
                
                <h4 className="text-sm font-black text-white flex items-center gap-1.5">
                  <HeartPlus size={14} className="text-rose-500 fill-rose-500" />
                  Your Care Sheet
                </h4>
                
                <p className="text-[10px] text-slate-400 mt-1.5 leading-relaxed">
                  Click the <span className="text-sky-300 font-bold">+</span> buttons on recommended items to construct your dynamic physical chart card.
                </p>

                {/* Custom items tracker */}
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-[9px] text-slate-500 uppercase font-black">
                    <span>ADDED ENTRIES ({customPlan.length})</span>
                    {customPlan.length > 0 && (
                      <button 
                        onClick={() => setCustomPlan([])}
                        className="text-rose-400 hover:text-rose-300 font-bold transition-all underline"
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  {customPlan.length === 0 ? (
                    <div className="bg-slate-950 p-4 rounded-xl border border-dashed border-slate-800 text-center flex flex-col items-center justify-center min-h-[140px]">
                      <Utensils size={20} className="text-slate-600 mb-1" />
                      <span className="text-[10px] text-slate-500 font-bold">List is currently empty</span>
                      <p className="text-[8px] text-slate-600 mt-0.5 max-w-xs">
                        Push recommendations to auto-generate diagnostic details.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1 custom-scrollbar">
                      {customPlan.map((p, index) => (
                        <div 
                          key={p.name}
                          className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex flex-col gap-1.5"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <h6 className="text-[10px] font-black text-slate-100 truncate">{p.name}</h6>
                            </div>
                            <button
                              onClick={() => handleRemoveFromPlan(p.name)}
                              className="text-slate-500 hover:text-rose-400 transition-colors p-0.5 shrink-0"
                            >
                              <Trash2 size={10} />
                            </button>
                          </div>
                          {p.detailedItems && (
                            <div className="flex flex-wrap gap-1">
                              {p.detailedItems.slice(0, 3).map((subItem, sIdx) => (
                                <span key={sIdx} className="bg-slate-900 text-slate-300 text-[7px] px-1 py-0.2 rounded font-medium border border-slate-800 leading-none">
                                  {subItem}
                                </span>
                              ))}
                              {p.detailedItems.length > 3 && (
                                <span className="text-[7px] text-slate-500 font-bold leading-none self-center">
                                  +{p.detailedItems.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action output triggers */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <button
                  onClick={handlePrintPlan}
                  className="w-full bg-gradient-to-r from-sky-500 to-teal-500 hover:opacity-90 text-slate-950 h-9 rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
                >
                  <Printer size={12} strokeWidth={2.5} />
                  Print Safety Sheet
                </button>
                <div className="text-[8px] text-slate-500 text-center font-bold uppercase tracking-wider font-sans">
                  SVH Myocardial Board Approved
                </div>
              </div>

            </div>

          </div>

          {/* Hover mechanism tooltips box anchored cleanly inside console footer spacing */}
          <AnimatePresence>
            {hoveredItem && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute bottom-4 left-6 right-6 bg-[#0c1938] text-white p-3.5 rounded-xl border border-[#22d3ee]/20 text-xs flex gap-3 z-30 print:hidden"
              >
                <Info size={16} className="text-[#22d3ee] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-cyan-300">Biochemical Mechanism:</strong>{" "}
                  {currentCategory.items.find((i) => i.name === hoveredItem)?.rationale || ""}
                  {" • "}
                  <span className="text-emerald-400 font-extrabold font-mono">
                    {currentCategory.items.find((i) => i.name === hoveredItem)?.nutritionInfo || ""}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* 
        ============================================================
        CLINICAL PRINT WORKSHEET / DOWLOADABLE PDF PATIENT REPORT
        ============================================================
      */}
      <div className="hidden print:block w-full bg-white text-slate-900 p-8 font-sans leading-relaxed">
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
              Clinical Quality Standard • V2 Interactive Core Safety Sheet
            </p>
          </div>
          <div className="text-right">
            <div className="bg-rose-50 border border-rose-100 p-1 px-2.5 rounded-lg text-rose-600 font-extrabold text-[10px] uppercase tracking-wider inline-block">
              Cardio-Station Diagnostic Worksheet
            </div>
            <p className="text-[9px] text-slate-400 mt-1 font-mono">
              Date Printed: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Selected Program Block */}
        <div className="mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">PRESCRIBED CARE PROFILE</span>
              <span className="text-sm font-black text-slate-800 uppercase block">
                {activeTab === "patients" ? "Cardiac rehabilitation program" : "atherosclerosis preventive care shield"}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider font-bold">ACTIVE DISCIPLINE FOCUS</span>
              <span className="text-sm font-bold text-slate-700 capitalize block">
                Selected Active Discipline: <span className="underline">{selectedSubCategory} guidelines</span>
              </span>
            </div>
          </div>
        </div>

        {/* Custom Care Items */}
        <div className="mb-6">
          <h3 className="text-sm font-black uppercase text-slate-900 tracking-wider border-b-2 border-slate-300 pb-1.5 mb-3">
            I. Clinically Structured Recommendations & Avoidances ({customPlan.length} Curated Entries)
          </h3>
          
          {customPlan.length === 0 ? (
            <div className="border-2 border-dashed border-slate-300 p-6 text-center text-xs text-slate-500 rounded-lg">
              No specific items were added to the interactive planner card. Standard cardiologist guidelines apply.
              Open the heart care console onscreen to select recommended items to curate a tailored print layout.
            </div>
          ) : (
            <div className="space-y-4">
              {customPlan.map((p, idx) => (
                <div key={p.name} className="border-b border-slate-100 pb-3 last:border-0 break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-sm font-black text-slate-800">
                      {idx + 1}. {p.name}
                    </span>
                    <span className="text-[9px] font-bold text-emerald-750 border border-emerald-100 bg-emerald-50 px-2 py-0.5 rounded uppercase font-mono">
                      {p.type === "highly-recommended" ? "Highly Recommended Limit" : "Strict Avoid Limit"}
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-600 mb-1 pl-4">
                    <strong>Therapeutic Benefit:</strong> {p.benefit}
                  </p>
                  
                  {p.rationale && (
                    <p className="text-[10px] text-slate-500 italic pl-4 mb-1.5">
                      <strong>Physiological Mechanism:</strong> {p.rationale}
                    </p>
                  )}

                  {p.detailedItems && p.detailedItems.length > 0 && (
                    <div className="pl-4 mt-1.5">
                      <span className="text-[8px] font-extrabold uppercase tracking-wide text-slate-400 block mb-1">
                        Approved Food Elements & Action items in Details:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.detailedItems.map((itemValue) => (
                          <span key={itemValue} className="bg-slate-105 text-slate-800 text-[10px] px-2 py-0.5 rounded border border-slate-200/60 font-medium">
                            • {itemValue}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Global Reference Targets */}
        <div className="mb-6 grid grid-cols-2 gap-6 break-inside-avoid">
          <div>
            <h4 className="text-xs font-black uppercase text-slate-950 tracking-wider border-b border-slate-350 pb-1 mb-2">
              II. Clinical Target Benchmarks ({activeTab === "patients" ? "Rehab" : "Prevention"})
            </h4>
            <div className="space-y-2">
              {currentCategory.nutrients.map((target, idx) => (
                <div key={idx} className="text-xs flex justify-between items-center text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                  <span className="font-semibold">{target.name}</span>
                  <span className="font-bold text-slate-900">{target.ratio}% Target Adherence</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase text-slate-950 tracking-wider border-b border-slate-350 pb-1 mb-2">
              III. Clinical Standard Safety Brief
            </h4>
            <p className="text-[10px] text-slate-500 leading-relaxed italic">
              "This custom care sheet contains selective elements compiled under official Sree Venkateshwara Hospital Myocardial Board guidelines. It is meant to augment, not replace, physical clinical therapy sessions or prescribed pharmaceuticals. If any symptoms layout pain, chest weight, or shortness of breath occur, cease physical behaviors immediately."
            </p>
          </div>
        </div>

        {/* Attending Signature Portion */}
        <div className="border-t border-slate-400 pt-6 mt-10 grid grid-cols-2 gap-8 break-inside-avoid">
          <div>
            <p className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-10">SVH MEDICAL BOARD ACCREDITATION STAMP</p>
            <div className="border-t border-slate-300 w-48 pt-1">
              <p className="text-[9px] font-bold text-slate-500">Board Reference ID: SVH-CARDIO-D2</p>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-10 block">ATTENDING CARDIOLOGIST / COORDINATOR</span>
            <div className="border-t border-slate-300 w-48 pt-1 text-right">
              <p className="text-[9px] font-bold text-slate-500">Authorized Clinician Signature / Date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
