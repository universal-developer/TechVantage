import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./sections/Hero";
import FeaturesSection from "./sections/Features";
import FunctionalitiesSection from "./sections/Functionalities";
import IntegrationsSection from "./sections/Integrations";
import Testimonials from "./sections/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FunctionalitiesSection />
      <IntegrationsSection />
      <Testimonials />
    </>
  );
}
