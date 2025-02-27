"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-[1170px] mx-auto items-center gap-10 py-20 px-6">
      {/* Left Side: Center on Small Screens, Left-Aligned on Large */}
      <div className="text-center md:text-left">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          TechVantage
          <br />
          Solutions
        </h1>
        <p className="text-gray-600 mt-4 max-w-lg mx-auto md:mx-0">
          Empowering Businesses with Innovative Solutions for Success and
          Growth. Streamline workflows, foster collaboration, and unlock your
          true potential with TechVantage. Experience the future of work today.
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <Button variant="default">Start Your Free Trial Now</Button>
          <Button variant="outline">
            <span className="text-primary">Request a demo</span>
          </Button>
        </div>
      </div>

      {/* Right Side: Hide on Small Screens */}
      <div className="hidden md:flex justify-center items-center">
        <Image
          src="/hero-image.png"
          width={500}
          height={500}
          alt="TechVantage Solutions"
          className="object-contain"
        />
      </div>
    </section>
  );
}
