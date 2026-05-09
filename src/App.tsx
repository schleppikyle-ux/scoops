/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuHighlights from './components/MenuHighlights';
import CommunityGallery from './components/CommunityGallery';
import ReviewSection from './components/ReviewSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-strawberry-100 selection:text-strawberry-600">
      <Navbar />
      <main>
        <Hero />
        <MenuHighlights />
        <CommunityGallery />
        <ReviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

