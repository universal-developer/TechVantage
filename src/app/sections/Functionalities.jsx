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
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center gap-2 mb-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24"
        >
          <div
            className={`flex flex-col justify-center ${
              feature.isImageRight ? "lg:order-first" : "lg:order-last"
            }`}
          >
            <span className="text-blue-600 font-medium mb-2">
              {feature.id} functionality
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {feature.title}
            </h2>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <div>
              <Button asChild>
                <a href={feature.buttonLink}>{feature.buttonText}</a>
              </Button>
            </div>
          </div>
          <div
            className={`flex items-center justify-center ${
              feature.isImageRight ? "lg:order-last" : "lg:order-first"
            }`}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="rounded-lg shadow-lg w-[530px] h-[290px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
