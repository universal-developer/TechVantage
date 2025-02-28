import Image from "next/image";

export function TestimonialCard({ name, title, company, image, testimonial }) {
  return (
    <div className="relative min-w-[300px] max-w-[350px] p-6 bg-white rounded-lg shadow-sm border border-gray-100 flex flex-col items-center h-full pt-16 min-h-[320px]">
      {/* Profile Image - Positioned Half Inside & Half Outside */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 bg-white">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-sm text-gray-600 text-center flex-1 leading-relaxed">
        {testimonial}
      </p>

      {/* Name & Title */}
      <div className="mt-auto text-center">
        <p className="text-gray-400 font-medium mb-2">{company}</p>
        <p className="font-semibold">
          {name}, {title}
        </p>
      </div>
    </div>
  );
}
