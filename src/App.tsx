/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import HeartbeatBar from "./components/HeartbeatBar";
import Hero from "./components/Hero";
import TreatmentsSection from "./components/TreatmentsSection";
import Experts from "./components/Experts";
import ChiefCardiologist from "./components/ChiefCardiologist";
import About from "./components/About";
import Services from "./components/Services";
import DownloadDietExercise from "./components/DownloadDietExercise";
import SocialSection from "./components/SocialSection";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Emergency from "./components/Emergency";
import MapSection from "./components/Map";
import AppointmentForm from "./components/AppointmentForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeartbeatBar />
      <Hero />
      <TreatmentsSection />
      <ChiefCardiologist />
      <Experts />
      <About />
      <Gallery />
      <Services />
      <DownloadDietExercise />
      <SocialSection />
      <Features />
      <Reviews />
      <Emergency />
      <MapSection />
      <AppointmentForm />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

