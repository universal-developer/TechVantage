"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function IntegrationsSection() {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Seamless Software Integrations
            </h2>
            <p className="text-gray-600 mb-6">
              Connect, collaborate, and automate with TechVantage's extensive
              library of integrations. Our platform seamlessly integrates with
              popular software, empowering you to streamline workflows and
              maximize productivity.
            </p>
            <Button asChild>
              <a href="#" className="text-white">
                Explore Our Integrations Today
              </a>
            </Button>
          </div>

          {/* Right Image - Responsive Fix */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="call-page.png"
              className="w-full max-w-[600px] h-auto rounded-lg shadow-sm"
              alt="Integration dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
