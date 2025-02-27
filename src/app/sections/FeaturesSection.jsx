"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Briefcase, TrendingUp, Shield, Headphones } from "lucide-react";

const features = [
  {
    title: "Increased Efficiency",
    desc: "Streamline your workflow and save time.",
    icon: <Clock size={28} />,
    color: "bg-yellow-200",
  },
  {
    title: "Improved Cooperation",
    desc: "Foster teamwork and communication.",
    icon: <Briefcase size={28} />,
    color: "bg-yellow-200",
  },
  {
    title: "Scalability",
    desc: "Adapt to growing business needs seamlessly.",
    icon: <TrendingUp size={28} />,
    color: "bg-yellow-200",
  },
  {
    title: "Data Security",
    desc: "Ensure the safety and privacy of your valuable data.",
    icon: <Shield size={28} />,
    color: "bg-yellow-200",
  },
  {
    title: "24/7 Support",
    desc: "Provide round-the-clock assistance to your customers.",
    icon: <Headphones size={28} />,
    color: "bg-yellow-200",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-[1170px] mx-auto py-16">
      <div className="overflow-x-auto scrollbar-hide flex gap-6 snap-x snap-mandatory">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="min-w-[250px] md:min-w-[280px] lg:min-w-[300px] bg-white p-6 rounded-xl shadow-md snap-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.desc}</p>
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FDF7EA] mt-2">
                <span className="text-[#ECB22E]">{feature.icon}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
