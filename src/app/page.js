import Navbar from "@/components/Navbar";
import React from "react";
import HeroSection from "./sections/Hero";
import FeaturesSection from "./sections/FeaturesSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
