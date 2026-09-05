import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  Laptop, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight,
  Calculator,
  Plus,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { PRICING_PLANS } from '../data/dreamonxData';

interface PricingPageProps {
  onOpenDemo: () => void;
  onOpenOfflinePos: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenDemo, onOpenOfflinePos }) => {
  const [billingCycle, setBillingCycle] = useState<'yearly' | '5years'>('yearly');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('standard');
  const [usersCount, setUsersCount] = useState<number>(1);
  const [includeOrderBooking, setIncludeOrderBooking] = useState<boolean>(false);
  const [includeFbrIntegration, setIncludeFbrIntegration] = useState<boolean>(false);

  const selectedPlan = PRICING_PLANS.find(p => p.id === selectedPlanId) || PRICING_PLANS[1];

  const pricePerUser = billingCycle === 'yearly' 
    ? selectedPlan.discountedPriceYearly 
    : Math.round(selectedPlan.discountedPrice5Year / 5);

  const originalPricePerUser = billingCycle === 'yearly'
    ? selectedPlan.originalPriceYearly
    : Math.round(selectedPlan.originalPrice5Year / 5);

  const basePlanTotal = pricePerUser * usersCount * (billingCycle === '5years' ? 5 : 1);
  const originalPlanTotal = originalPricePerUser * usersCount * (billingCycle === '5years' ? 5 : 1);

  // Addons
  const orderBookingMonthlyPerUser = 999;
  const orderBookingTotal = includeOrderBooking 
    ? orderBookingMonthlyPerUser * usersCount * 12 * (billingCycle === '5years' ? 5 : 1)
    : 0;

  const fbrTotal = includeFbrIntegration ? 9999 : 0;

  const finalTotal = basePlanTotal + orderBookingTotal + fbrTotal;
  const totalSavings = Math.max(0, originalPlanTotal - basePlanTotal);
  const savingsPerUser = Math.round(totalSavings / (usersCount || 1));

  const discountPercent = billingCycle === 'yearly' 
    ? (selectedPlan.id === 'basic' ? 35 : selectedPlan.id === 'standard' ? 31 : 27)
    : (selectedPlan.id === 'basic' ? 42 : selectedPlan.id === 'standard' ? 39 : 36);

  return (
    <div id="pricing-page-container" className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Transparent & Predictable ROI
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Flexible Pricing Plans
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Choose the number of users and billing cycle that works best for your business. No hidden fees, instant activation.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button
                id="pricing-billing-yearly"
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  billingCycle === 'yearly'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Yearly (Up to 35% OFF)
              </button>
              <button
                id="pricing-billing-5years"
                onClick={() => setBillingCycle('5years')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === '5years'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                5 Years License <span className="text-[10px] uppercase px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-extrabold">Max Value</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Pricing Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Left Column */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Step 1: Select Plan */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Step 1</span>
                <span className="text-xs text-slate-500">Pick your core software level</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Select Plan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRICING_PLANS.map((plan) => (
                  <button
                    key={plan.id}
                    id={`plan-select-btn-${plan.id}`}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all relative cursor-pointer ${
                      selectedPlanId === plan.id
                        ? 'border-emerald-600 bg-emerald-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 bg-emerald-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                        Most Popular
                      </span>
                    )}
                    <span className="inline-block text-[11px] font-bold text-emerald-700 mb-1">
                      {plan.badge}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{plan.name}</h4>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                      {plan.description}
                    </p>
                    <p className="text-xs font-semibold text-slate-800 mt-2">
                      Rs {billingCycle === 'yearly' ? plan.discountedPriceYearly.toLocaleString() : Math.round(plan.discountedPrice5Year / 5).toLocaleString()} <span className="text-[10px] font-normal text-slate-500">/user/yr</span>
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Number of Users */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Step 2</span>
                <span className="text-xs text-slate-500">Scale as your team grows</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-slate-900">Number of Users</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500">Custom Count:</span>
                  <input
                    id="input-custom-users"
                    type="number"
                    min="1"
                    max="500"
                    value={usersCount}
                    onChange={(e) => setUsersCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-3 py-1.5 text-center text-sm font-bold border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Solo (1 User)', count: 1 },
                  { label: 'Small Team (5)', count: 5 },
                  { label: 'Growing (10)', count: 10 },
                  { label: 'Enterprise (20)', count: 20 },
                ].map((preset) => (
                  <button
                    key={preset.count}
                    onClick={() => setUsersCount(preset.count)}
                    className={`py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                      usersCount === preset.count
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Step 3</span>
                <span className="text-xs text-slate-500">Optional specialized extensions</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Optional Add-ons</h3>

              <div className="space-y-2.5">
                {/* Addon 1 */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeOrderBooking}
                      onChange={(e) => setIncludeOrderBooking(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">Dreamonx Order Booking Android App</p>
                      <p className="text-xs text-slate-500">Field sales app with live salesman GPS tracking & offline booking</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-700">Rs 999</span>
                    <span className="text-[10px] text-slate-500 block">/mo /user</span>
                  </div>
                </label>

                {/* Addon 2 */}
                <label className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeFbrIntegration}
                      onChange={(e) => setIncludeFbrIntegration(e.target.checked)}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">Digital Invoice (FBR/PRA/POS) Integration</p>
                      <p className="text-xs text-slate-500">Official API handshake, digital signature & encrypted QR generation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-emerald-700">Rs 9,999</span>
                    <span className="text-[10px] text-slate-500 block">one-time</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Pricing Summary Card Right Column */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Pricing Summary</span>
                  <h4 className="text-xl font-bold text-white mt-0.5">
                    {selectedPlan.name} • {usersCount} {usersCount === 1 ? 'User' : 'Users'}
                  </h4>
                  <span className="text-xs text-slate-400 capitalize">
                    {billingCycle === 'yearly' ? 'Yearly Billing' : '5-Year License Agreement'}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {discountPercent}% OFF
                </span>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex justify-between items-center">
                  <span>Original price per user:</span>
                  <span className="line-through text-slate-500">
                    Rs {originalPricePerUser.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center text-white font-medium">
                  <span>Your price per user:</span>
                  <span className="text-emerald-400 font-bold">
                    Rs {pricePerUser.toLocaleString()} /year
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Original total ({usersCount} user{usersCount > 1 ? 's' : ''}):</span>
                  <span className="line-through text-slate-500">
                    Rs {originalPlanTotal.toLocaleString()}
                  </span>
                </div>

                {includeOrderBooking && (
                  <div className="flex justify-between items-center text-xs text-slate-300 pt-1 border-t border-slate-800/60">
                    <span>Order Booking App ({usersCount} user{usersCount > 1 ? 's' : ''}):</span>
                    <span>Rs {orderBookingTotal.toLocaleString()}</span>
                  </div>
                )}

                {includeFbrIntegration && (
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>FBR/PRA E-Invoicing Setup:</span>
                    <span>Rs {fbrTotal.toLocaleString()} (one-time)</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-800 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-slate-400">Total Investment:</span>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">
                      Rs {finalTotal.toLocaleString()}
                    </p>
                  </div>
                  {totalSavings > 0 && (
                    <div className="text-right">
                      <span className="text-[11px] text-emerald-400 font-bold block">
                        🎉 Total Savings:
                      </span>
                      <span className="text-sm font-extrabold text-emerald-300">
                        Rs {totalSavings.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {totalSavings > 0 && (
                  <p className="text-xs text-emerald-400 bg-emerald-950/40 p-2 rounded-lg border border-emerald-500/20 text-center">
                    You save Rs {savingsPerUser.toLocaleString()} per user!
                  </p>
                )}
              </div>

              {/* Action */}
              <div className="space-y-2 pt-2">
                <button
                  id="btn-get-started-pricing"
                  onClick={onOpenDemo}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Started Now 🚀
                </button>
                <p className="text-center text-[11px] text-slate-400">
                  Instant activation • 6-Day full feature evaluation included
                </p>
              </div>
            </div>

            {/* Offline Lifetime Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-emerald-500/30 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700">Offline Alternative</span>
                  <h4 className="text-base font-bold text-slate-900">Lifetime Offline License</h4>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Unlimited users, works completely offline without monthly fees. One-time payment with complete local database ownership.
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xl font-extrabold text-slate-900">PKR 65,000</span>
                <button
                  onClick={onOpenOfflinePos}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Download POS
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Comparison Table of Included Modules */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              What's Included in {selectedPlan.name} Plan
            </h3>
            <p className="text-slate-500 text-sm">
              Comprehensive ERP suite engineered specifically for Pakistani business operations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {selectedPlan.features.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 text-xs font-medium"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Data Migration
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Support
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Daily Automated Backups
              </span>
            </div>
            <button
              onClick={onOpenDemo}
              className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              Need a customized multi-branch quote? Speak with our engineers →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
