"use client";

import React from "react";
import { TestimonialCard } from "@/components/TestimonialCard";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const testimonials = [
  {
    name: "John Smith",
    title: "CEO",
    company: "ABC Company",
    image: "/avatars/avatar-0.png",
    testimonial:
      "TechVantage has transformed the way we work. It has streamlined our processes and improved collaboration across teams. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    title: "Marketing Manager",
    company: "DEF Corporation",
    image: "/avatars/avatar-1.png",
    testimonial:
      "We've been using TechVantage for months now, and it has become an indispensable tool for our business. The seamless communication and task management features have boosted our productivity significantly.",
  },
  {
    name: "Michael Chen",
    title: "CFO",
    company: "GHI Industries",
    image: "/avatars/avatar-2.png",
    testimonial:
      "TechVantage's powerful analytics have given us invaluable insights into our business performance. The data visualization and reporting capabilities are exceptional, helping us make data-driven decisions with confidence.",
  },
];

const stats = [
  { value: "10+", label: "Years in the Market" },
  { value: "200,000+", label: "Happy Customers" },
  { value: "99%", label: "Uptime" },
  { value: "98%", label: "Customer Retention Rate" },
  { value: "24/7", label: "Support" },
];

// Stat Card component for the mobile infinite slider
const StatCard = ({ value, label }) => (
  <div className="min-w-[180px] flex flex-col items-center text-center p-4">
    <h3 className="text-3xl font-bold text-blue-600 mb-1">{value}</h3>
    <p className="text-gray-600 text-sm">{label}</p>
  </div>
);

export default function Testimonials() {
  return (
    <div className="relative mx-auto py-20 overflow-visible max-w-6xl px-4">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center gap-2 mb-20">
        <h1 className="text-3xl font-bold text-gray-900">
          Join Thousands of Satisfied Customers
        </h1>
        <p className="text-gray-600 max-w-[600px] leading-relaxed">
          Don't just take our word for it. Hear what our customers have to say
          about their experience with TechVantage.
        </p>
      </div>

      {/* Testimonial Grid - Added justify-items-center for mobile centering */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            company={testimonial.company}
            image={testimonial.image}
            testimonial={testimonial.testimonial}
          />
        ))}
      </div>

      {/* Stats Section with responsive behavior */}
      <div className="mt-20">
        {/* Desktop Stats - Hidden on mobile */}
        <div className="hidden md:flex flex-wrap justify-around gap-8 lg:gap-20">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile Stats with InfiniteSlider - Hidden on desktop */}
        <div className="md:hidden">
          <InfiniteSlider speedOnHover={10} gap={16} speed={30}>
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </div>
  );
}
