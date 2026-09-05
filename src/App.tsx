/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';
import { FaqsPage } from './pages/FaqsPage';
import { VideosPage } from './pages/VideosPage';
import { LegalPages } from './pages/LegalPages';
import { DemoModal } from './components/DemoModal';
import { OfflinePosModal } from './components/OfflinePosModal';
import { VideoModal } from './components/VideoModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isOfflinePosModalOpen, setIsOfflinePosModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Sync with browser hash if user uses direct link or back button
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      const validPages: PageType[] = [
        'home', 'services', 'pricing', 'community', 
        'contact', 'faqs', 'videos', 'privacy', 'refund', 'terms'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sticky Navigation Bar with Top Announcement Banner */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
            onWatchVideo={() => setIsVideoModalOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onNavigatePricing={() => handleNavigate('pricing')}
            onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
          />
        )}

        {currentPage === 'pricing' && (
          <PricingPage
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
          />
        )}

        {currentPage === 'community' && (
          <CommunityPage
            onOpenDemo={() => setIsDemoModalOpen(true)}
            onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
          />
        )}

        {currentPage === 'videos' && (
          <VideosPage
            onOpenDemo={() => setIsDemoModalOpen(true)}
          />
        )}

        {currentPage === 'faqs' && (
          <FaqsPage
            onNavigateContact={() => handleNavigate('contact')}
            onOpenDemo={() => setIsDemoModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {(currentPage === 'privacy' || currentPage === 'terms' || currentPage === 'refund') && (
          <LegalPages
            type={currentPage}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact')}
          />
        )}
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenOfflinePos={() => setIsOfflinePosModalOpen(true)}
      />

      {/* Persistent WhatsApp Support Widget */}
      <WhatsAppWidget />

      {/* Interactive Modals */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <OfflinePosModal
        isOpen={isOfflinePosModalOpen}
        onClose={() => setIsOfflinePosModalOpen(false)}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
