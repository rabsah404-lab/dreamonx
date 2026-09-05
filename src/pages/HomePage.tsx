import React, { useState, useRef } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Star, 
  Clock, 
  Lock, 
  BarChart3, 
  Layers, 
  Globe, 
  Smartphone, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  QrCode, 
  ShieldCheck, 
  FileCheck2, 
  Zap, 
  Building2, 
  ShoppingCart, 
  DollarSign, 
  Boxes, 
  Briefcase, 
  Factory, 
  TrendingUp,
  MapPin,
  Flame,
  CheckCheck
} from 'lucide-react';
import { motion } from 'motion/react';
import { PageType } from '../types';
import { ERP_MODULES, TESTIMONIALS, PRICING_PLANS } from '../data/dreamonxData';
import { Spotlight } from '../components/Spotlight';
import { ContainerScroll } from '../components/ContainerScroll';
import { LogoMarquee } from '../components/LogoMarquee';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
  onOpenOfflinePos: () => void;
  onWatchVideo: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDemo,
  onOpenOfflinePos,
  onWatchVideo,
}) => {
  const [activeDashboardTab, setActiveDashboardTab] = useState<'overview' | 'invoicing' | 'pos'>('overview');
  const [activeInvoiceStep, setActiveInvoiceStep] = useState<number>(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div id="home-page-root" className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION WITH SPOTLIGHT & GRID BACKGROUND */}
      <section className="relative w-full py-12 sm:py-20 lg:py-24 bg-grid-pattern overflow-hidden flex items-center justify-center border-b border-slate-100">
        {/* Radial mask for soft grid fading */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Aceternity UI Spotlight Animation */}
        <Spotlight className="-top-40 left-0 md:left-20 md:-top-20 text-brand/[0.22]" fill="#3169b8" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Left Hero Content */}
            <div className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
              
              {/* Badge Pill */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs sm:text-sm border border-slate-200/80 rounded-full py-1.5 px-4 bg-white/90 shadow-xs backdrop-blur-xs text-slate-700"
              >
                <span>Automate Your</span>
                <span className="font-bold text-brand">Business</span>
                <span className="flex h-2 w-2 rounded-full bg-brand animate-pulse" />
              </motion.div>

              {/* Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
              >
                Get A <span className="text-brand">Business</span> Solution Ever
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                We provide Pakistan's best enterprise resource planning solution, featuring many easy and affordable options for Cloud, Multi-Branch & Offline operations.
              </motion.p>

              {/* Hero CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
              >
                <button
                  id="hero-btn-watch-demo"
                  onClick={onWatchVideo}
                  className="px-5 sm:px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all shadow-xs flex items-center gap-2.5 cursor-pointer hover:border-slate-400 group"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch a demo</span>
                </button>

                <button
                  id="hero-btn-try-free"
                  onClick={onOpenDemo}
                  className="px-6 sm:px-7 py-3 rounded-xl bg-brand hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Try for free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Trust Badge */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-500"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Trusted by hundreds of businesses across Pakistan</span>
              </motion.div>
            </div>

            {/* Right Hero Graphic with Floating 3D Animation */}
            <motion.div
              animate={{ translateY: [-14, 14] }}
              transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3.5, ease: 'easeInOut' }}
              className="relative mx-auto lg:mx-0 w-full max-w-lg lg:max-w-none"
            >
              {/* Soft decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl -z-10" />

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl text-white space-y-4">
                
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300 ml-2">
                      Dreamonx ERP Engine
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Cloud Sync
                  </span>
                </div>

                {/* Hero Dashboard Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">Total Monthly Sales</p>
                    <p className="text-base sm:text-lg font-bold text-white mt-1">Rs 8.42M</p>
                    <span className="text-[10px] text-emerald-400 font-semibold">↑ +18.4% this month</span>
                  </div>
                  <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">FBR Validated Invoices</p>
                    <p className="text-base sm:text-lg font-bold text-white mt-1">14,280</p>
                    <span className="text-[10px] text-blue-400 font-semibold">100% Verified</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60">
                    <p className="text-[11px] text-slate-400">Inventory Items</p>
                    <p className="text-base sm:text-lg font-bold text-white mt-1">2,840 Units</p>
                    <span className="text-[10px] text-teal-400 font-semibold">Across 4 Warehouses</span>
                  </div>
                </div>

                {/* Interactive Order Flow graphic */}
                <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-200">Recent Transactions & Dispatches</span>
                    <span className="text-[11px] text-brand">Real-Time Ledger</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { inv: 'INV-2025-0891', client: 'Al-Madina Textile Mills', amount: 'Rs 142,500', status: 'FBR Tax Paid' },
                      { inv: 'INV-2025-0890', client: 'Shahid Traders Lahore', amount: 'Rs 88,200', status: 'Delivered' },
                      { inv: 'INV-2025-0889', client: 'Crescent Mart Islamabad', amount: 'Rs 45,900', status: 'Completed' }
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="font-mono text-slate-300">{tx.inv}</span>
                          <span className="text-slate-400 hidden sm:inline">• {tx.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{tx.amount}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300">
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. INFINITE LOGO MARQUEE */}
      <LogoMarquee />

      {/* 3. CONTAINER SCROLL 3D PERSPECTIVE ANIMATION ("address to your needs") */}
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="text-xs sm:text-sm font-bold tracking-wider text-brand uppercase">
              Automated Business Control
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-none">
              Address To Your Needs
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
              Scroll down to experience the complete unified command dashboard built for business owners, finance executives, and branch managers.
            </p>
          </motion.div>
        }
      >
        {/* Full Rich ERP Dashboard Preview */}
        <div className="w-full bg-slate-950 text-white p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Top Bar inside mockup */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center font-bold text-white shadow-md">
                D
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white leading-none">Dreamonx Enterprise Suite</h4>
                <p className="text-[11px] text-slate-400 mt-1">Multi-Branch Central Server • v4.8</p>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg text-xs">
              <button
                onClick={() => setActiveDashboardTab('overview')}
                className={`px-3.5 py-1.5 rounded-md font-semibold transition-all ${
                  activeDashboardTab === 'overview' ? 'bg-brand text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Executive KPIs
              </button>
              <button
                onClick={() => setActiveDashboardTab('invoicing')}
                className={`px-3.5 py-1.5 rounded-md font-semibold transition-all ${
                  activeDashboardTab === 'invoicing' ? 'bg-brand text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                FBR E-Invoicing
              </button>
              <button
                onClick={() => setActiveDashboardTab('pos')}
                className={`px-3.5 py-1.5 rounded-md font-semibold transition-all ${
                  activeDashboardTab === 'pos' ? 'bg-brand text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Retail POS
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Total Revenue</span>
                <DollarSign className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-white mt-2">Rs 24.8M</p>
              <span className="text-[11px] text-emerald-400 font-semibold mt-1 inline-block">↑ +14.2% vs last month</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Active Purchase Orders</span>
                <ShoppingCart className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-white mt-2">1,420</p>
              <span className="text-[11px] text-blue-400 font-semibold mt-1 inline-block">98.4% Fulfillment rate</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Stock Valuation</span>
                <Boxes className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-white mt-2">Rs 18.2M</p>
              <span className="text-[11px] text-purple-400 font-semibold mt-1 inline-block">Zero discrepancy</span>
            </div>

            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>E-Invoices Dispatched</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-xl sm:text-2xl font-extrabold text-white mt-2">100%</p>
              <span className="text-[11px] text-emerald-400 font-semibold mt-1 inline-block">FBR & PRA Compliant</span>
            </div>
          </div>

          {/* Interactive view depending on tab */}
          {activeDashboardTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white">Sales & Expenditure Trends (Past 6 Months)</span>
                  <span className="text-slate-400">Values in PKR Millions</span>
                </div>
                <div className="h-44 sm:h-52 flex items-end justify-between gap-3 pt-4 px-2">
                  {[
                    { month: 'Oct', sales: 65, exp: 40 },
                    { month: 'Nov', sales: 78, exp: 45 },
                    { month: 'Dec', sales: 92, exp: 50 },
                    { month: 'Jan', sales: 85, exp: 46 },
                    { month: 'Feb', sales: 110, exp: 58 },
                    { month: 'Mar', sales: 135, exp: 62 },
                  ].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="w-full flex items-end justify-center gap-1 h-full">
                        <div 
                          style={{ height: `${bar.sales}%` }} 
                          className="w-full max-w-[20px] bg-brand rounded-t-sm hover:opacity-90 transition-opacity" 
                          title={`Sales: Rs ${bar.sales / 10}M`}
                        />
                        <div 
                          style={{ height: `${bar.exp}%` }} 
                          className="w-full max-w-[20px] bg-slate-700 rounded-t-sm hover:opacity-90 transition-opacity" 
                          title={`Expenses: Rs ${bar.exp / 10}M`}
                        />
                      </div>
                      <span className="text-[11px] text-slate-400">{bar.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-brand rounded-xs" /> Gross Invoiced Sales</span>
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-slate-700 rounded-xs" /> Operating Cost</span>
                </div>
              </div>

              <div className="bg-slate-900/70 p-4 rounded-xl border border-slate-800 space-y-3">
                <span className="font-bold text-white text-xs block">Active Live Connected Terminals</span>
                <div className="space-y-2">
                  {[
                    { branch: 'Head Office - Faisalabad', users: '18 Active', status: 'Online' },
                    { branch: 'Regional Hub - Lahore Gulberg', users: '12 Active', status: 'Online' },
                    { branch: 'Warehouse - Karachi Port', users: '9 Active', status: 'Online' },
                    { branch: 'Field Sales Mobile Fleet', users: '45 Bookers', status: 'Syncing' },
                  ].map((node, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-slate-800/60 flex items-center justify-between text-xs">
                      <div>
                        <p className="font-semibold text-slate-200">{node.branch}</p>
                        <p className="text-[11px] text-slate-400">{node.users}</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {node.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeDashboardTab === 'invoicing' && (
            <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">Government Certified Digital Fiscalization Engine</h4>
                  <p className="text-xs text-slate-400">Integrated with FBR (Federal Board of Revenue) & Provincial Tax Authorities</p>
                </div>
                <span className="px-3 py-1 bg-brand text-white text-xs font-bold rounded-full">
                  FBR Certified
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400">QR Code Generation</span>
                  <p className="font-bold text-emerald-400 text-sm mt-1">Instant Encrypted Seal</p>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400">Fiscal Device Status</span>
                  <p className="font-bold text-emerald-400 text-sm mt-1">Connected & Authorized</p>
                </div>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400">Submission Latency</span>
                  <p className="font-bold text-emerald-400 text-sm mt-1">&lt; 150ms Per Invoice</p>
                </div>
              </div>
            </div>
          )}

          {activeDashboardTab === 'pos' && (
            <div className="bg-slate-900/70 p-6 rounded-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white">High-Speed Offline & Cloud POS</h4>
                  <p className="text-xs text-slate-400">Barcode scanning, touch counters, thermal receipt printing, and split payments</p>
                </div>
                <button 
                  onClick={onOpenOfflinePos}
                  className="px-3.5 py-1.5 bg-brand hover:bg-blue-700 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                >
                  Download Free Offline POS
                </button>
              </div>
            </div>
          )}

        </div>
      </ContainerScroll>

      {/* 4. FEATURES OF DREAMONX ERP (BENTO GRID WITH ORBIT RINGS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Address To Your Needs</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Features Of <span className="text-brand">Dreamonx ERP</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dreamonx ERP software is an enterprise resource planning solution. Here are core pillars built to streamline operations.
          </p>
        </motion.div>

        {/* Bento Grid with exact styling and dashed circular radar orbits */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-6 gap-5">
          
          {/* Feature 1: User-Based Security */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="sm:col-span-3 lg:col-span-2 relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div className="relative mx-auto p-6 flex aspect-square size-32 rounded-full border-4 border-dashed border-brand/25 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand/10 items-center justify-center group-hover:scale-105 transition-transform">
              <Lock className="w-10 h-10 text-brand" />
            </div>
            <div className="space-y-2 text-center mt-6">
              <h3 className="text-lg font-bold text-slate-900">User-Based Security</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Grant specific permissions to users based on their roles. Keep ledgers, payroll, and trade secrets strictly confidential.
              </p>
            </div>
          </motion.div>

          {/* Feature 2: Comprehensive Reports & Backups */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sm:col-span-3 lg:col-span-2 relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div className="relative mx-auto p-6 flex aspect-square size-32 rounded-full border-4 border-dashed border-brand/25 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand/10 items-center justify-center group-hover:scale-105 transition-transform">
              <BarChart3 className="w-10 h-10 text-brand" />
            </div>
            <div className="space-y-2 text-center mt-6">
              <h3 className="text-lg font-bold text-slate-900">Comprehensive Reports & Backups</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Automated daily cloud backups, deep ledger audit trails, exportable P&L, balance sheets, and tax summaries in 1-click.
              </p>
            </div>
          </motion.div>

          {/* Feature 3: Sleek Design & Intuitive Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:col-span-6 lg:col-span-2 relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            <div className="relative mx-auto p-6 flex aspect-square size-32 rounded-full border-4 border-dashed border-brand/25 before:absolute before:-inset-2 before:rounded-full before:border before:border-brand/10 items-center justify-center group-hover:scale-105 transition-transform">
              <Layers className="w-10 h-10 text-brand" />
            </div>
            <div className="space-y-2 text-center mt-6">
              <h3 className="text-lg font-bold text-slate-900">Sleek Design, Intuitive Experience</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Engineered for speed, minimizing keystrokes so sales clerks and accountants process vouchers 3x faster than legacy desktop tools.
              </p>
            </div>
          </motion.div>

          {/* Feature 4: Access Anytime, Anywhere (Wide Bento Card) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sm:col-span-6 lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand flex items-center justify-center mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Access Anytime, Anywhere</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Stay connected to your business across the globe. Whether checking inventory from your home laptop, processing orders on a tablet, or reviewing daily profit from mobile, Dreamonx is fully synchronized.
              </p>
            </div>
            <div className="pt-4 flex items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-brand"><Check className="w-4 h-4" /> 100% Web Accessible</span>
              <span className="flex items-center gap-1.5 text-brand"><Check className="w-4 h-4" /> Multi-Branch Ready</span>
            </div>
          </motion.div>

          {/* Feature 5: 2 Minutes Setup & Quick Start */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sm:col-span-6 lg:col-span-3 bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <span className="text-brand bg-blue-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
                Instant Onboarding
              </span>
              <h3 className="text-2xl font-bold text-white">Operational In Under 2 Minutes</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Pre-configured Pakistani charts of accounts, standard tax brackets, and sample inventory templates make onboarding instantaneous.
              </p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Get Free 6-Day Access</span>
                <Flame className="w-4 h-4 text-orange-500 fill-current" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. CERTIFIED E-INVOICING COMPLIANCE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl mb-10 border border-slate-200 flex flex-col items-center justify-center py-10 lg:py-16 overflow-hidden bg-grid-pattern bg-slate-50/50">
          
          {/* Subtle edge fades */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 left-0 h-full w-5 md:w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-5 md:w-24 bg-gradient-to-l from-white to-transparent" />

          {/* Heading */}
          <div className="text-center mb-8 sm:mb-12 relative z-10 px-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Certified <span className="text-brand">E-Invoicing</span> Compliance
            </h2>
            <div className="w-20 h-1 bg-brand mt-3 mx-auto rounded-full" />
            <p className="max-w-3xl mx-auto pt-4 text-slate-600 text-sm sm:text-base lg:text-lg">
              Seamless real-time integration with Federal Board of Revenue (FBR), Punjab Revenue Authority (PRA), and Sindh Revenue Board (SRB) for automated digital tax invoices.
            </p>
          </div>

          {/* Visual Architecture Flow: Tax Authorities -> Dreamonx Engine -> Verified Digital Invoices */}
          <div className="w-full max-w-5xl px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              {/* Left Column: Regulatory Authorities */}
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-brand transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-sm">
                    FBR
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Federal Board of Revenue</h4>
                    <p className="text-xs text-slate-500">Tier-1 Retailers POS Fiscalization</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-brand transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-sm">
                    PRA
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Punjab Revenue Authority</h4>
                    <p className="text-xs text-slate-500">Sales Tax on Services Integration</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-brand transition-colors flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-sm">
                    SRB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Sindh Revenue Board</h4>
                    <p className="text-xs text-slate-500">Digital Automated Tax Return</p>
                  </div>
                </div>
              </div>

              {/* Center Column: Dreamonx Fiscal Hub with Glowing Pulse */}
              <div className="relative group flex justify-center">
                <div className="absolute -inset-2 bg-blue-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-white border-2 border-brand rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-4 w-full max-w-xs">
                  <div className="relative mx-auto w-16 h-16 rounded-2xl bg-brand text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <ShieldCheck className="w-8 h-8" />
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">Dreamonx Fiscal Engine</h4>
                    <p className="text-xs text-slate-500 mt-1">Direct API Encryption</p>
                  </div>
                  <div className="text-[11px] bg-blue-50 text-brand px-3 py-1.5 rounded-lg font-semibold">
                    Live Verified Seal #DIS-8849
                  </div>
                </div>
              </div>

              {/* Right Column: Encrypted Real-Time Tax Invoice Output */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <FileCheck2 className="w-4 h-4 text-brand" /> Verified Tax Invoice
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    VALIDATED
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg">
                    <QrCode className="w-12 h-12 text-slate-800" />
                  </div>
                  <div className="text-xs space-y-1">
                    <p className="font-bold text-slate-800">FBR Invoice No:</p>
                    <p className="font-mono text-[11px] text-brand">1040-9281-7721-00</p>
                    <p className="text-[10px] text-slate-400">Encrypted SHA-256 Signature</p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Automatically prints compliant QR codes on A4, thermal paper, and digital PDFs.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. MODULES OF DREAMONX (ACETERNITY UI HOVER CARDS WITH INDICATOR TABS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto space-y-2"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-brand">Complete Business Coverage</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Modules of <span className="text-brand">Dreamonx</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every module is designed to interact seamlessly, creating an all-in-one centralized ledger.
          </p>
        </motion.div>

        {/* Modules Grid with Aceternity-style hover glow & left indicator tab */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 gap-6">
          {ERP_MODULES.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.05 * idx }}
              className="group/feature relative p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top & bottom hover gradient overlays */}
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50/50 via-transparent to-transparent pointer-events-none" />
              <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/30 to-transparent pointer-events-none" />

              {/* Left active indicator tab */}
              <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-10 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-brand transition-all duration-200 origin-center" />

              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand flex items-center justify-center group-hover/feature:scale-110 group-hover/feature:bg-brand group-hover/feature:text-white transition-all duration-300">
                  {idx === 0 && <DollarSign className="w-6 h-6" />}
                  {idx === 1 && <ShoppingCart className="w-6 h-6" />}
                  {idx === 2 && <TrendingUp className="w-6 h-6" />}
                  {idx === 3 && <Boxes className="w-6 h-6" />}
                  {idx === 4 && <Briefcase className="w-6 h-6" />}
                  {idx === 5 && <Factory className="w-6 h-6" />}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover/feature:text-brand transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {mod.shortDesc}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {mod.features.slice(0, 4).map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-700 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100/60 relative z-10 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-bold text-brand hover:text-blue-700 flex items-center gap-1 group-hover/feature:translate-x-1 transition-transform cursor-pointer"
                >
                  <span>Explore features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('services')}
            className="px-6 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer hover:border-brand hover:text-brand"
          >
            <span>View All Detailed Specifications</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 7. ORDER BOOKING MOBILE APP SPOTLIGHT (FROM CHUNK 6308) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-50 border border-slate-200 shadow-xl rounded-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full inline-block">
                Field Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                <span className="text-brand">Dreamonx</span> Order Booking
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Equip your field sales force and delivery vans with a dedicated Android application. Take orders offline in remote markets, record recovery payments, and sync instantly when connected.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                {[
                  'Offline Data Storage',
                  'Customer Management',
                  'Product & Order Management',
                  'Payment Recovery',
                  'Live Location Tracking',
                  'Activity Summary',
                  'Easy & Clean UI'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-800">
                    <CheckCheck className="w-4 h-4 text-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900">10K+</p>
                  <p className="text-[11px] text-slate-500">Downloads</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900">5K+</p>
                  <p className="text-[11px] text-slate-500">Active Users</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900">25K+</p>
                  <p className="text-[11px] text-slate-500">Daily Orders</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center">
                    4.9 <Star className="w-3.5 h-3.5 text-amber-400 fill-current ml-1" />
                  </p>
                  <p className="text-[11px] text-slate-500">Play Store</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-brand hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 gap-2 shadow-md shadow-blue-500/20"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Download on Play Store</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: Mobile Booker Mockup */}
            <div className="flex justify-center">
              <div className="w-72 sm:w-80 bg-slate-900 rounded-[36px] p-3 border-4 border-slate-800 shadow-2xl text-white">
                <div className="w-full bg-slate-950 rounded-[28px] p-4 space-y-4 overflow-hidden border border-slate-800">
                  <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                    <span className="font-bold text-white">Order Booker v3.2</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">● Offline Ready</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl space-y-1">
                    <p className="text-[11px] text-slate-400">Current Sales Route</p>
                    <p className="text-xs font-bold text-white">Main Market - Zone B</p>
                    <span className="text-[10px] text-blue-400">18 Visits Completed • 4 Pending</span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] text-slate-400">Active Cart (Shop #12):</span>
                    <div className="p-2 bg-slate-900 rounded-lg text-xs flex justify-between">
                      <span>Cooking Oil 5L × 10</span>
                      <span className="font-mono text-emerald-400">Rs 24,500</span>
                    </div>
                    <div className="p-2 bg-slate-900 rounded-lg text-xs flex justify-between">
                      <span>Basmati Rice 25kg × 4</span>
                      <span className="font-mono text-emerald-400">Rs 18,000</span>
                    </div>
                  </div>
                  <button 
                    onClick={onOpenDemo}
                    className="w-full py-2.5 bg-brand text-white font-bold text-xs rounded-xl shadow cursor-pointer hover:bg-blue-700 transition-colors"
                  >
                    Confirm & Sync Order
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FREE OFFLINE POS SPOTLIGHT (FROM CHUNK 6407) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-slate-50 border border-slate-200 shadow-xl rounded-2xl p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Image/Mockup */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold text-sm text-slate-900">Free Offline Dreamonx POS</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                    Zero Internet Needed
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">Barcode Scanner Active</p>
                      <p className="text-[11px] text-slate-500">USB / Bluetooth / Camera</p>
                    </div>
                    <Zap className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-slate-900">Local SQLite Database</p>
                      <p className="text-[11px] text-slate-500">Zero cloud latency, instant billing</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
                <button
                  onClick={onOpenOfflinePos}
                  className="w-full py-3 bg-brand hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Desktop Installer (.exe)</span>
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand bg-blue-50 px-3 py-1 rounded-full inline-block">
                Retail & Supermarkets
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Free <span className="text-brand">Offline Dreamonx</span> POS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Run your retail counter without worrying about internet cuts or power glitches. Dreamonx Offline POS handles fast scanning, customer receipts, and inventory tracking without any monthly software fees.
              </p>

              {/* Feature Chips */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  'No Signup Required',
                  'Free Demo Access',
                  'Works Completely Offline',
                  'Instant Billing & Sales',
                  'Inventory Management',
                  'Cloud Synchronization',
                  'Sales History',
                  'Fast Setup'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-3 py-2.5 rounded-xl border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-800">
                    <CheckCheck className="w-4 h-4 text-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Stats Chips */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-200 text-center">
                <div className="p-2 bg-white rounded-lg border border-slate-200/70">
                  <p className="text-[11px] text-slate-500">Price</p>
                  <p className="text-sm sm:text-base font-bold text-emerald-600">Free</p>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70">
                  <p className="text-[11px] text-slate-500">Setup Time</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">5 Min</p>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70">
                  <p className="text-[11px] text-slate-500">Internet</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">No</p>
                </div>
                <div className="p-2 bg-white rounded-lg border border-slate-200/70">
                  <p className="text-[11px] text-slate-500">Support</p>
                  <p className="text-sm sm:text-base font-bold text-slate-900">24/7</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenOfflinePos}
                  className="inline-flex items-center justify-center rounded-xl bg-brand hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-6 py-3.5 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Get Free Offline POS</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. ABOUT DREAMONX & METRICS (FROM CHUNK 7771) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border border-slate-200/80 rounded-2xl bg-dot-pattern bg-white p-8 sm:p-12 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-brand">About Dreamonx</span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Pioneering Business Automation in Pakistan
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dreamonx is engineered by experienced enterprise software architects to solve the unique operational challenges of Pakistani businesses: multi-currency transactions, Urdu invoice headers, FBR fiscal requirements, and unstable internet infrastructure.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-2.5 rounded-xl bg-brand hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow cursor-pointer"
                >
                  Contact Our Engineers
                </button>
                <button
                  onClick={() => onNavigate('community')}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Join Community
                </button>
              </div>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand">500+</p>
                <p className="text-xs font-semibold text-slate-600 mt-1">Active Businesses</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand">100K+</p>
                <p className="text-xs font-semibold text-slate-600 mt-1">Invoices / Day</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand">99.9%</p>
                <p className="text-xs font-semibold text-slate-600 mt-1">Cloud Uptime</p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand">4.9★</p>
                <p className="text-xs font-semibold text-slate-600 mt-1">Client Satisfaction</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. TESTIMONIALS CAROUSEL (FROM CHUNK 9529) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative group">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              What Our Users Say
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              From intuitive design to powerful features, discover why businesses trust Dreamonx.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollTestimonials('left')}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-brand transition-all cursor-pointer"
              aria-label="Previous Testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTestimonials('right')}
              className="h-10 w-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 hover:bg-slate-50 hover:text-brand transition-all cursor-pointer"
              aria-label="Next Testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow w-[300px] sm:w-[340px] h-[240px] shrink-0 flex flex-col justify-between snap-start"
            >
              <div>
                <div className="flex items-center gap-1 mb-2.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 italic line-clamp-4 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand to-indigo-600 flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-xs">
                  {t.initial}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-none">{t.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CALL TO ACTION SECTION (FROM CHUNK 3801) */}
      <section className="bg-gradient-to-b from-transparent via-transparent to-brand/[0.08] py-20 sm:py-28 overflow-x-clip text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Start for Free Today!
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Join hundreds of high-growth distributors, retailers, and manufacturing mills running on Dreamonx.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onOpenDemo}
              className="px-8 py-4 rounded-xl bg-brand hover:bg-blue-700 text-white font-bold text-base sm:text-lg transition-all shadow-xl shadow-blue-500/25 flex items-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Get Demo Now 🔥</span>
            </button>
            <button
              onClick={onOpenOfflinePos}
              className="px-7 py-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base transition-all shadow-xs flex items-center gap-2 cursor-pointer hover:border-brand hover:text-brand"
            >
              <Download className="w-4 h-4 text-brand" />
              <span>Free Offline POS</span>
            </button>
          </motion.div>

          <p className="text-xs text-slate-400 pt-2">
            No credit card required • Instant 6-day evaluation • Dedicated WhatsApp onboarding
          </p>
        </div>
      </section>

    </div>
  );
};
