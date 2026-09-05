import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Laptop
} from 'lucide-react';
import { PageType } from '../types';
import { OFFICE_LOCATIONS } from '../data/dreamonxData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
  onOpenOfflinePos: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDemo,
  onOpenOfflinePos,
}) => {
  const handleLinkClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-gradient-to-r from-emerald-950/70 via-slate-900 to-teal-950/70 border border-emerald-500/20 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> FBR & PRA Certified E-Invoicing
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready to Streamline Your Business Operations?
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Join hundreds of Pakistani businesses automating inventory, accounts, POS, and digital tax invoices with Dreamonx.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                id="footer-btn-get-demo"
                onClick={onOpenDemo}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-900/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                Get 6-Day Free Demo 🔥
              </button>
              <button
                id="footer-btn-offline-pos"
                onClick={onOpenOfflinePos}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-xl border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Laptop className="w-4 h-4 text-emerald-400" />
                Free Offline POS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => handleLinkClick('home')}>
              <Logo variant="light" size="md" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We provide Pakistan's best enterprise resource planning solution, featuring easy and affordable cloud and offline options with seamless FBR and PRA digital invoicing compliance.
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> 500+ Active Users
                </span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  ★ 4.9 on Google
                </span>
                <span className="text-slate-600">•</span>
                <span>FBR Ready</span>
              </div>
            </div>
          </div>

          {/* ERP Solutions */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Account Management
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Inventory & Stock Control
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Purchase & GRN
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Sales & CRM Billing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Point of Sale (POS)
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  FBR / PRA E-Invoicing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-emerald-400 transition-colors text-left">
                  Dreamonx Order Booking App
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Company & Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleLinkClick('pricing')} className="hover:text-emerald-400 transition-colors text-left">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('community')} className="hover:text-emerald-400 transition-colors text-left">
                  Community & Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('videos')} className="hover:text-emerald-400 transition-colors text-left">
                  Video Tutorials
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('faqs')} className="hover:text-emerald-400 transition-colors text-left">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-emerald-400 transition-colors text-left">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('privacy')} className="hover:text-emerald-400 transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('terms')} className="hover:text-emerald-400 transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('refund')} className="hover:text-emerald-400 transition-colors text-left">
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Office Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact & Support</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <p className="font-semibold text-slate-200">Lahore Office:</p>
                <p>Office 16, 2nd Floor, Lahore Center, Main Boulevard, Gulberg 3</p>
                <p className="text-emerald-400 mt-1 font-medium">+92 323 6683663</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <p className="font-semibold text-slate-200">Faisalabad Office:</p>
                <p>Office # 17 2nd Floor, Kohinoor 1, Faisalabad</p>
                <p className="text-emerald-400 mt-1 font-medium">+92 329 1040470</p>
              </div>

              <div className="pt-1 flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <a href="mailto:support@dreamonx.com" className="text-emerald-400 hover:underline">
                  support@dreamonx.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Dreamonx Pakistan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('terms')} className="hover:text-slate-300">
              Terms and Conditions
            </button>
            <span>•</span>
            <button onClick={() => handleLinkClick('refund')} className="hover:text-slate-300">
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
