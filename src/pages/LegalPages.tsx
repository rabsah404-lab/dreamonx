import React from 'react';
import { ShieldCheck, FileText, RefreshCw, ArrowLeft } from 'lucide-react';
import { PageType } from '../types';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund';
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const LegalPages: React.FC<LegalPageProps> = ({
  type,
  onNavigateHome,
  onNavigateContact,
}) => {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </button>

        {type === 'privacy' && (
          <div className="bg-white rounded-2xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Legal</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Privacy Policy</h1>
              <p className="text-xs text-slate-500">Last updated: Current</p>
            </div>

            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Information We Collect</h2>
                <p>DREAMONX collects various types of information to provide and improve our services:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Personal Information:</strong> We may collect personal data such as your name, email address, job title, company name, phone number, and payment details when you create an account, purchase a subscription, or communicate with us.</li>
                  <li><strong>Usage Data:</strong> We collect information about how you use our Service, including your IP address, browser type, pages viewed, and interactions on the platform. This data helps us analyze and improve our software and optimize user experience.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to track your activity on our website and platform, remember preferences, and personalize your experience. You may control cookie settings in your browser.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">How We Use Your Information</h2>
                <p>DREAMONX uses your information for the following purposes:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Service Delivery:</strong> To provide, operate, and maintain the DREAMONX SaaS ERP platform, including setting up accounts, processing transactions, and providing customer support.</li>
                  <li><strong>Communication:</strong> To send service-related communications, updates, and announcements, including responding to inquiries and notifying you of changes to our terms or policies.</li>
                  <li><strong>Marketing:</strong> With your consent, we may send you promotional emails about new products, special offers, and events. You can opt out at any time.</li>
                  <li><strong>Analytics and Improvement:</strong> To analyze trends, monitor usage, and enhance the performance and usability of our Service.</li>
                  <li><strong>Security:</strong> To protect our platform, detect fraudulent activity, and ensure compliance with our Terms of Service and applicable laws.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Dreamonx Order Booking App — Location & Background Tracking</h2>
                <p>DREAMONX ERP collects the precise location (GPS) of order bookers to enable the Live Tracking feature. ERP admins can monitor this location and activity data in real time through the admin dashboard.</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Location is collected only when an order booker enables Live Tracking from their app settings.</li>
                  <li>It works in both: Foreground (while the order booker is actively using the app) and Background (when the app is minimized or screen is off).</li>
                  <li>Location is recorded at limited intervals (approx. every 5 minutes) to optimize battery usage.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Purpose of Location Use</h2>
                <p>Location data is collected solely to give ERP admins visibility into order booker activity:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Field staff activity tracking — admins can view real-time positions of order bookers</li>
                  <li>Visit logs — a record of locations visited by each order booker during their shift</li>
                  <li>Route monitoring and reporting — admins can review and audit daily routes taken</li>
                </ul>
                <p className="text-xs text-slate-500 italic mt-1">
                  We do not sell, share, or use location data for advertising. Access is restricted to authorized ERP admins within your organization.
                </p>
              </section>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-center justify-between">
                <span>Need any Specific Information or Help?</span>
                <button onClick={onNavigateContact} className="font-bold underline">Contact Us</button>
              </div>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="bg-white rounded-2xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Legal</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Terms of Service</h1>
              <p className="text-xs text-slate-500">Last updated: Current</p>
            </div>

            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">1. Acceptance of Terms</h2>
                <p>
                  By using DREAMONX services, you represent that you have read, understood, and agree to comply with these Terms. If you are using our services on behalf of an organization, you are agreeing to these Terms for that organization and confirming you have authority to bind that organization to these Terms.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">2. Description of Services</h2>
                <p>
                  DREAMONX provides a cloud-based ERP software platform, which includes various modules and features designed to assist with business operations. These services are provided on a subscription basis and are accessed via the internet.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">3. User Responsibilities</h2>
                <p>
                  By using DREAMONX services, you agree to comply with all applicable laws, ensure data accuracy, and refrain from prohibited activities such as conducting illegal operations, uploading harmful content, or interfering with our systems.
                </p>
              </section>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-center justify-between">
                <span>Need any Specific Information or Help?</span>
                <button onClick={onNavigateContact} className="font-bold underline">Contact Us</button>
              </div>
            </div>
          </div>
        )}

        {type === 'refund' && (
          <div className="bg-white rounded-2xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-8">
            <div className="space-y-2 border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Policy</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Refund Policy</h1>
              <p className="text-xs text-slate-500">Last updated: Current</p>
            </div>

            <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">General Policy</h2>
                <p>
                  DREAMONX’s SaaS ERP software is a subscription-based service, and refunds are typically not provided after the subscription term has begun. We offer a free trial period to help you evaluate the software before committing to a paid subscription.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Dispute Resolution</h2>
                <p>
                  We encourage you to reach out to us directly with any billing or service issues before initiating a chargeback or payment dispute. Initiating a chargeback without contacting us to resolve the issue may result in the immediate suspension or termination of your account.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Refund Eligibility</h2>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Cancellation During Free Trial:</strong> If we offer a free trial, you may cancel anytime during the trial period without incurring any charges.</li>
                  <li><strong>Billing Errors:</strong> If you were charged in error or for a service you did not authorize, please contact us. Verified billing errors will be refunded in full.</li>
                  <li><strong>Service Unavailability:</strong> In rare cases of prolonged service downtime (outside scheduled maintenance) lasting more than 72 consecutive hours and affecting your access to our core ERP functions, you may be eligible for a partial refund or service credit.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-lg font-bold text-slate-900">Refund Process</h2>
                <p>
                  To request a refund, please email <strong>support@dreamonx.com</strong> with your account details, payment receipts, and explanation. DREAMONX will review requests within 7 business days.
                </p>
              </section>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800 flex items-center justify-between">
                <span>Need any Specific Information or Help?</span>
                <button onClick={onNavigateContact} className="font-bold underline">Contact Us</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
