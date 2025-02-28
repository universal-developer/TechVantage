"use client";
import { Clock, Briefcase, TrendingUp, Shield, Headphones } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Increased Efficiency",
    desc: "Streamline your workflow and save time.",
    icon: <Clock size={28} className="text-[#ECB22E]" />,
    color: "bg-[#FDF7EA]",
  },
  {
    title: "Improved Cooperation",
    desc: "Foster teamwork and communication.",
    icon: <Briefcase size={28} className="text-[#ECB22E]" />,
    color: "bg-[#FDF7EA]",
  },
  {
    title: "Scalability",
    desc: "Adapt to growing business needs seamlessly.",
    icon: <TrendingUp size={28} className="text-[#ECB22E]" />,
    color: "bg-[#FDF7EA]",
  },
  {
    title: "Data Security",
    desc: "Ensure the safety and privacy of your valuable data.",
    icon: <Shield size={28} className="text-[#ECB22E]" />,
    color: "bg-[#FDF7EA]",
  },
  {
    title: "24/7 Support",
    desc: "Provide round-the-clock assistance to your customers.",
    icon: <Headphones size={28} className="text-[#ECB22E]" />,
    color: "bg-[#FDF7EA]",
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-12">
      <InfiniteSlider speedOnHover={20} gap={24}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            desc={feature.desc}
            icon={feature.icon}
            color={feature.color}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
