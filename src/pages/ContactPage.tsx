import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Clock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { OFFICE_LOCATIONS } from '../data/dreamonxData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('ERP Demonstration');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page-container" className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Clock className="w-3.5 h-3.5 text-emerald-600" /> Response within 1 Business Day
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact With Us
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            If you have any questions regarding our Services or need help, please fill out the form here. We are ready to assist with deployment, training, and custom integrations.
          </p>
        </div>

        {/* Main Grid: Form + Office Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form Left Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Thank you, <span className="font-semibold">{name}</span>. A Dreamonx solutions specialist will respond to <span className="font-semibold">{email}</span> within 1 business day.
                </p>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 max-w-xs mx-auto">
                  Need urgent support? Reach us directly on WhatsApp at <strong>+92 329 1040470</strong>.
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900">Send an Inquiry</h3>
                  <p className="text-xs text-slate-500">Fill out your details and our team will get back to you promptly.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Asif Raza"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. asif@company.pk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Topic *</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option>ERP Demonstration & Free Trial</option>
                    <option>Free Offline Dreamonx POS Download & Support</option>
                    <option>FBR / PRA Digital Invoicing Compliance</option>
                    <option>Dreamonx Order Booking Mobile App</option>
                    <option>Custom Module & Feature Development</option>
                    <option>Technical Support & Training</option>
                    <option>Partnership & Reseller Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your business, number of branches, or specific ERP requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md shadow-emerald-700/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Locations Right Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Email Card */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium block">Official Email</span>
                <a href="mailto:support@dreamonx.com" className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                  support@dreamonx.com
                </a>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900">Our Physical Offices</h3>

              {OFFICE_LOCATIONS.map((loc, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      {loc.city}
                    </h4>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Regional Branch
                    </span>
                  </div>
                  
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {loc.address}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs pl-6">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-emerald-600" />
                      <strong className="text-slate-800">{loc.phone}</strong>
                    </span>
                    <a
                      href={loc.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 font-bold hover:underline flex items-center gap-1"
                    >
                      WhatsApp Chat →
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
