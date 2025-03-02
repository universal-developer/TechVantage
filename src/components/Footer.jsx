import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1170px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">TechVantage</h2>
          <p className="text-gray-600 max-w-xs">
            Transforming Industries through Innovative Technology
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-blue-500 hover:text-blue-600" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-blue-500 hover:text-blue-600" />
            </Link>
            <Link href="#" aria-label="Google Plus">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-blue-500 hover:text-blue-600"
              >
                <path d="M12 2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
                <path d="M18 6h.01" />
                <path d="M18 10h.01" />
                <path d="M18 14h.01" />
                <path d="M18 18h.01" />
                <path d="M8 4v16" />
                <path d="M4 8h8" />
                <path d="M4 16h8" />
              </svg>
            </Link>
          </div>
        </div>

        {/* About Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Team
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Career
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                Help Desk
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-blue-600">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Blog Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Blog</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-3">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src="/resources-section/resources-1.png"
                  alt="Digital Transformation"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Webinar: The Future of Digital Transformation in Business
                </h4>
                <Link
                  href="#"
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm flex gap-3">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src="/resources-section/resources-6.png"
                  alt="Social Media Marketing"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium">
                  Mastering Social Media Marketing: A Comprehensive Guide
                </h4>
                <Link
                  href="#"
                  className="text-blue-600 text-sm hover:underline mt-1 inline-block"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
