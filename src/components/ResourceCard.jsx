import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ResourceCard({ image, tags, title, link }) {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col p-5 flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="mt-auto">
          <Link
            href={link}
            className="text-blue-600 font-medium hover:underline"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
