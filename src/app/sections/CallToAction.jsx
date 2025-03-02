import React from "react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <div className="flex flex-col items-center text-center py-20 px-4 bg-[#FBFBFB]">
      <h2 className="text-3xl font-bold text-gray-900">
        Experience the Future of Work Today
      </h2>
      <p className="text-gray-600 max-w-xl mt-4">
        Take the first step towards transforming your business. Sign up for our
        free trial and experience the power of TechVantage for yourself.
      </p>
      <Button variant="default" className="mt-6">
        Start Your Free Trial Now
      </Button>
    </div>
  );
}
