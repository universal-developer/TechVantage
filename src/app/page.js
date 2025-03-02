import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import FunctionalitiesSection from "./sections/Functionalities";
import IntegrationsSection from "./sections/Integrations";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";
import ResourcesSection from "./sections/Ressources";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FunctionalitiesSection />
      <IntegrationsSection />
      <Testimonials />
      <CallToAction />
      <ResourcesSection />
      <Footer />
    </>
  );
}
