import React, { useState } from 'react';
import { 
  Wallet, 
  ShoppingCart, 
  TrendingUp, 
  Boxes, 
  FolderKanban, 
  Users, 
  Factory, 
  Store, 
  ShieldCheck, 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShoppingBag,
  Truck,
  Cpu,
  HeartPulse,
  Utensils,
  Building2,
  Layers,
  Hammer,
  X
} from 'lucide-react';
import { ERP_MODULES, INDUSTRIES } from '../data/dreamonxData';
import { ErpModule, IndustryItem } from '../types';

interface ServicesPageProps {
  onOpenDemo: () => void;
  onNavigatePricing: () => void;
  onOpenOfflinePos: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onOpenDemo,
  onNavigatePricing,
  onOpenOfflinePos,
}) => {
  const [selectedModule, setSelectedModule] = useState<ErpModule | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  // Icon mapping helper
  const renderModuleIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Wallet': return <Wallet className={className} />;
      case 'ShoppingCart': return <ShoppingCart className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'Boxes': return <Boxes className={className} />;
      case 'FolderKanban': return <FolderKanban className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Factory': return <Factory className={className} />;
      case 'Store': return <Store className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Smartphone': return <Smartphone className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const renderIndustryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Hammer': return <Hammer className={className} />;
      case 'ShoppingCart': return <ShoppingCart className={className} />;
      default: return <Store className={className} />;
    }
  };

  return (
    <div id="services-page-container" className="py-12 sm:py-20 bg-slate-50 space-y-20">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Pakistan's Best ERP Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Powerful ERP Services for Every Business
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From Sales and Inventory to FBR-compliant e-invoicing and mobile Order Booking, Dreamonx ERP gives your business everything it needs to run efficiently, stay compliant, and grow faster.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              Get Free Demo <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigatePricing}
              className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 shadow-xs transition-all cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Modules Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Our Services</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            What Dreamonx ERP Offers
          </h2>
          <p className="text-slate-500 text-sm">
            A complete suite of ERP modules cloud or offline. Click any service to explore full specifications and workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ERP_MODULES.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                    {renderModuleIcon(module.icon)}
                  </div>
                  {module.tag && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {module.tag}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {module.shortDesc}
                  </p>
                </div>
                
                <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  {module.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Learn more</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Interactive Section */}
      <div className="bg-slate-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Industries We Serve</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Built for Every Industry in Pakistan
            </h2>
            <p className="text-slate-400 text-sm">
              Click your industry to see exactly how Dreamonx ERP solves your operational challenges and bottlenecks.
            </p>
          </div>

          {/* Industry Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {INDUSTRIES.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedIndustry.id === ind.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {renderIndustryIcon(ind.icon, "w-4 h-4")}
                <span>{ind.title}</span>
              </button>
            ))}
          </div>

          {/* Active Industry Details Showcase */}
          <div className="bg-slate-950/80 rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {selectedIndustry.title} Solution
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedIndustry.subtitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedIndustry.description}
                </p>
              </div>

              {/* Pain points vs solutions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-red-500/20 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">Common Bottlenecks:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {selectedIndustry.painPoints.map((pain, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                        <span>{pain}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/20 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Dreamonx ERP Solution:</span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {selectedIndustry.solutions.map((sol, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenDemo}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold rounded-xl shadow transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Schedule {selectedIndustry.title} Demo <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenOfflinePos}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition-colors cursor-pointer"
                >
                  Download Offline POS
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/20 text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  {renderIndustryIcon(selectedIndustry.icon, "w-8 h-8")}
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white">Live Industry Template</h4>
                  <p className="text-xs text-slate-400">
                    Pre-configured Chart of Accounts, tax slabs, and inventory workflows ready to deploy.
                  </p>
                </div>
                <div className="p-3 bg-slate-900/90 rounded-xl text-left text-xs space-y-1 border border-slate-800 text-slate-300">
                  <p className="flex items-center justify-between">
                    <span>Deployment:</span> <strong className="text-emerald-400">&lt; 2 Minutes</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>Hardware:</span> <strong className="text-white">PC, Laptop, Mobile</strong>
                  </p>
                  <p className="flex items-center justify-between">
                    <span>FBR Status:</span> <strong className="text-emerald-400">Direct Compliant</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Module Detail Modal */}
      {selectedModule && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedModule(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white p-6 relative">
              <button
                onClick={() => setSelectedModule(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                {renderModuleIcon(selectedModule.icon, "w-6 h-6 text-white")}
              </div>
              <h3 className="text-2xl font-bold">{selectedModule.title}</h3>
              <p className="text-emerald-100 text-xs sm:text-sm mt-1">{selectedModule.shortDesc}</p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Overview</h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedModule.fullDesc}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Included Capabilities</h4>
                <div className="space-y-2">
                  {selectedModule.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex gap-2">
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    onOpenDemo();
                  }}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow"
                >
                  Test This Module in 6-Day Demo
                </button>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="px-4 py-2.5 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
