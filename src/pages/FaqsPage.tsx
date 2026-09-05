import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/dreamonxData';

interface FaqsPageProps {
  onNavigateContact: () => void;
  onOpenDemo: () => void;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigateContact, onOpenDemo }) => {
  const [search, setSearch] = useState('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // first two open by default

  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = FAQS.filter(
    item => item.q.toLowerCase().includes(search.toLowerCase()) || 
            item.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="faqs-page-container" className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" /> Got Questions? We Have Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Everything you need to know about Dreamonx ERP deployment, offline point of sale capabilities, FBR integration, and pricing.
          </p>

          {/* Search bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search questions (e.g. FBR, offline, pricing)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl shadow-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200/90 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-2 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm">
              No questions matching "{search}". Try searching another keyword or contact us directly.
            </div>
          )}
        </div>

        {/* Need Specific Information Callout */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">Need any Specific Information or Help?</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Our technical consultants in Lahore and Faisalabad are ready to review your workflows.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={onNavigateContact}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow flex items-center gap-1.5 cursor-pointer"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
            >
              Free Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
