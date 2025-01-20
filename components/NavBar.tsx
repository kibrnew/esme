"use client";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              ESME
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link
                href="/projects-publications"
                className="hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Projects & Publications
              </Link>
              <Link
                href="/contact"
                className="hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-green-500 hover:bg-green-600 px-3 py-2 rounded-md"
              >
                Register
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/projects-publications"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md"
            >
              Projects & Publications
            </Link>
            <Link
              href="/contact"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="hover:bg-blue-700 block px-3 py-2 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-green-500 hover:bg-green-600 block px-3 py-2 rounded-md"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
