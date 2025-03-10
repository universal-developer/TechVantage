import React from "react";
import ResourceCard from "@/components/ResourceCard";

export default function ResourcesSection() {
  const resources = [
    {
      image: "/resources-section/resources-6.png",
      tags: ["E-book", "Business Growth"],
      title: "10 Essential Strategies for Business Growth",
      link: "#",
    },
    {
      image: "/resources-section/resources-1.png",
      tags: ["Case Study", "Success Story"],
      title: "Success Story: How Company XYZ Increased Sales by 50%",
      link: "#",
    },
    {
      image: "/resources-section/resources-3.png",
      tags: ["Data Analytics", "Tips and Techniques"],
      title: "Unlocking Data Analytics: Practical Tips and Techniques",
      link: "#",
    },
    {
      image: "/resources-section/resources-2.png",
      tags: ["Webinar", "Digital Transformation"],
      title: "Webinar: The Future of Digital Transformation in Business",
      link: "#",
    },
    {
      image: "/resources-section/resources-4.png",
      tags: ["Case Study", "Workflow Transformation"],
      title: "Case Study: How TechVantage Transformed Company ABC's Workflow",
      link: "#",
    },
    {
      image: "/resources-section/resources-5.png",
      tags: ["Guide", "Social Media Marketing"],
      title: "Mastering Social Media Marketing: A Comprehensive Guide",
      link: "#",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1170px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">
          Empower Your Business with Free Resources
        </h2>

        {/* Improved grid layout with better breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              image={resource.image}
              tags={resource.tags}
              title={resource.title}
              link={resource.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
