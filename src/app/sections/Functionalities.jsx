"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "1st",
    title: "Effortless Task Management",
    description:
      "Simplify project management with our intuitive task tracking system. Assign tasks, set deadlines, and track progress effortlessly.",
    buttonText: "Streamline Tasks Now",
    buttonLink: "#",
    imageUrl: "saas-feature.png",
    isImageRight: true,
  },
  {
    id: "2nd",
    title: "Seamless Communication",
    description:
      "Facilitate seamless communication and collaboration with integrated messaging and real-time updates. Stay connected and never miss.",
    buttonText: "Connect and Collaborate Today",
    buttonLink: "#",
    imageUrl: "saas-feature.png",
    isImageRight: false,
  },
  {
    id: "3rd",
    title: "Powerful Analytics",
    description:
      "Gain valuable insights into your business with our powerful analytics tools. Track key metrics, visualize data, and make informed decisions.",
    buttonText: "Gain Insights Instantly",
    buttonLink: "#",
    imageUrl: "saas-feature.png",
    isImageRight: true,
  },
];

export default function FeaturesSection() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 sm:px-6 py-12">
      <div className="flex flex-col items-center justify-center gap-2 mb-12 sm:mb-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Streamline Your Workflow with TechVantage
        </h1>
        <p className="text-gray-600 max-w-[600px] mx-auto text-center leading-relaxed">
          TechVantage is a cutting-edge SaaS solution designed to revolutionize
          the way businesses operate. Our powerful platform empowers you to
          streamline your workflow, optimize collaboration, and drive
          productivity. Experience the future of work with TechVantage.
        </p>
      </div>

      {features.map((feature, index) => (
        <div
          key={index}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-24"
        >
          {/* Text Content - Always Centered on Mobile */}
          <div
            className={`flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center ${
              feature.isImageRight ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <span className="text-blue-600 font-medium mb-2">
              {feature.id} functionality
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">{feature.description}</p>

            {/* Button - Only visible on desktop */}
            <div className="hidden lg:block">
              <Button asChild>
                <a href={feature.buttonLink}>{feature.buttonText}</a>
              </Button>
            </div>
          </div>

          {/* Image - Middle position on mobile */}
          <div
            className={`flex items-center justify-center mt-4 lg:mt-0 ${
              feature.isImageRight ? "lg:order-last" : "lg:order-first"
            }`}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="rounded-lg shadow-lg w-full max-w-[530px] h-auto"
            />
          </div>

          {/* Button - Only visible on mobile, at the bottom */}
          <div className="flex justify-center mt-6 lg:hidden col-span-1">
            <Button asChild>
              <a href={feature.buttonLink}>{feature.buttonText}</a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
