import React from "react";

export function FeatureCard({ title, desc, icon, color }) {
  return (
    <div className="min-w-[220px] p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
      <div className="mt-4">
        <div
          className={`w-10 h-10 rounded-full ${color} flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
