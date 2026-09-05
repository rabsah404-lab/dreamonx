import React, { useState } from 'react';
import { X, Send, Clock } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const sendWhatsApp = (number: string, text: string) => {
    const encoded = encodeURIComponent(text || 'Hi Dreamonx team, I would like to inquire about your ERP and POS software.');
    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');
  };

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-6 right-4 md:right-10 z-[99999] flex flex-col items-end">
      {isOpen && (
        <div 
          id="whatsapp-chat-box"
          className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200 text-left"
        >
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/80 flex items-center justify-center text-white font-bold relative">
                <span>D</span>
                <span className="w-3 h-3 bg-green-400 border-2 border-emerald-600 rounded-full absolute -bottom-0.5 -right-0.5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">Dreamonx ERP Support</h4>
                <span className="text-[11px] text-emerald-100 flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3" /> Typically replies within minutes
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-100 hover:text-white hover:bg-emerald-700 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-emerald-50/50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-100 shadow-xs text-xs text-slate-700 leading-relaxed">
              👋 Hi there! Welcome to Dreamonx Pakistan. How can we help automate your business today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                Quick Regional Representatives:
              </span>
              <button
                onClick={() => sendWhatsApp('923291040470', userMsg || 'Hi Faisalabad Team, need info on Dreamonx!')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between cursor-pointer"
              >
                <div>
                  <p className="font-semibold text-slate-900">Head Office Support</p>
                  <p className="text-[11px] text-slate-500">+92 329 1040470</p>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  Chat Now →
                </span>
              </button>

              <button
                onClick={() => sendWhatsApp('923236683663', userMsg || 'Hi Lahore Team, need info on Dreamonx!')}
                className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs text-slate-800 font-medium transition-colors flex items-center justify-between cursor-pointer"
              >
                <div>
                  <p className="font-semibold text-slate-900">Lahore Regional Sales</p>
                  <p className="text-[11px] text-slate-500">+92 323 6683663</p>
                </div>
                <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  Chat Now →
                </span>
              </button>
            </div>
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMsg}
              onChange={(e) => setUserMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  sendWhatsApp('923291040470', userMsg);
                }
              }}
              className="flex-1 px-3 py-1.5 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => sendWhatsApp('923291040470', userMsg)}
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Send via WhatsApp"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Row with Bouncing Pill and Scale on Hover */}
      <div className="flex items-center space-x-3 group">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-600 text-white px-4 py-2 rounded-xl shadow-lg text-xs sm:text-sm font-semibold animate-bounce hidden sm:block cursor-pointer select-none border border-emerald-500 hover:bg-emerald-700 transition-colors"
        >
          👋 Need help? Say hello!
        </div>

        <button
          id="btn-whatsapp-bubble"
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 cursor-pointer border-2 border-white"
          aria-label="WhatsApp Support"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.974.532 1.83.814 2.802.814 3.182 0 5.768-2.586 5.768-5.766 0-3.18-2.586-5.766-5.774-5.766zm8.471 5.766c0 4.675-3.805 8.48-8.471 8.48-1.464 0-2.846-.376-4.062-1.042l-4.526 1.187 1.209-4.417c-.742-1.282-1.163-2.766-1.163-4.208 0-4.675 3.806-8.48 8.471-8.48 4.667 0 8.542 3.805 8.542 8.48z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
