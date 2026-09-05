import React, { useState } from 'react';
import { 
  Download, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles,
  PhoneCall,
  Laptop
} from 'lucide-react';
import { PageType } from '../types';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenDemo: () => void;
  onOpenOfflinePos: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenDemo,
  onOpenOfflinePos,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services & Modules', page: 'services' },
    { label: 'Pricing', page: 'pricing' },
    { label: 'Community', page: 'community' },
    { label: 'Videos', page: 'videos' },
    { label: 'FAQs', page: 'faqs' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top Banner with exact colors and twinkling star animations */}
      <div 
        id="top-notification-banner"
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-xs sm:text-sm py-2 px-4 shadow-md border-b border-white/10"
      >
        {/* Twinkling star particle animations from original site */}
        <div className="absolute top-2 left-10 w-1 h-1 bg-white/40 rounded-full animate-ping pointer-events-none" />
        <div className="absolute top-4 right-20 w-1 h-1 bg-yellow-300/60 rounded-full animate-ping pointer-events-none" />
        <div className="absolute bottom-3 left-32 w-1 h-1 bg-cyan-300/50 rounded-full animate-ping pointer-events-none" />
        <div className="absolute top-1 right-1/3 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center p-1 rounded bg-white/20 shadow-xs">
              <Laptop className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium text-xs sm:text-sm">
              No internet? No problem. Download <span className="underline decoration-pink-300 font-semibold">Free Offline Dreamonx POS!</span>
            </span>
          </div>
          <button
            id="btn-top-download-pos"
            onClick={onOpenOfflinePos}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-purple-900 rounded-full font-bold hover:bg-white/90 transition-transform duration-200 hover:scale-105 shadow-sm text-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download Free
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            id="brand-logo-container"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center"
          >
            <Logo size="md" variant="dark" />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.page}
                id={`nav-link-${link.page}`}
                onClick={() => handleNavClick(link.page)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === link.page
                    ? 'text-brand bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="nav-btn-offline-pos"
              onClick={onOpenOfflinePos}
              className="px-3.5 py-2 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:border-brand hover:text-brand hover:bg-blue-50/50 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Offline POS
            </button>
            <button
              id="nav-btn-try-free"
              onClick={onOpenDemo}
              className="px-4 py-2 rounded-lg bg-brand hover:bg-blue-700 text-white text-xs font-semibold shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Try for Free
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-demo"
              onClick={onOpenDemo}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-brand text-white text-xs font-semibold"
            >
              Try Free
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-panel" 
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavClick(link.page)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                currentPage === link.page
                  ? 'bg-blue-50 text-brand font-semibold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOfflinePos();
              }}
              className="w-full py-2.5 px-3 rounded-lg border border-slate-200 text-slate-800 text-sm font-semibold flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4 text-brand" />
              Offline POS
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-brand hover:bg-blue-700 text-white text-sm font-semibold flex items-center justify-center gap-1.5 shadow"
            >
              <Sparkles className="w-4 h-4" />
              Try Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
