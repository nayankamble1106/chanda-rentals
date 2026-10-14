/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { StoreTrust } from './components/StoreTrust';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BespokeConsultationModal } from './components/BespokeConsultationModal';
import { STORE_INFO } from './data/jewelryData';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1411] text-[#F3F4F6] font-sans flex flex-col selection:bg-[#C0C0C0] selection:text-[#0B1411]">
      {/* Main Navbar */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Page Sections */}
      <main className="flex-grow">
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />
        <FeaturedCollections onOpenBooking={() => setBookingModalOpen(true)} />
        <StoreTrust />
        <LocationContact onOpenBooking={() => setBookingModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Interactive Consultation / Appointment Booking Modal */}
      <BespokeConsultationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
