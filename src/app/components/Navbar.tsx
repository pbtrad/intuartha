"use client";

import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-cyan-50 via-white to-emerald-50 text-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo8.png"
              alt="Intuartha Logo"
              width={150}
              height={20}
              className="scale-150"
            />
          </div>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#services" className="hover:underline">
            Services
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-2xl hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gradient-to-b from-white via-cyan-50 to-cyan-100 shadow-lg px-6 py-4 space-y-4 absolute w-full z-50">
          <Link 
            href="/" 
            className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 text-lg"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 text-lg"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#services" 
            className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 text-lg"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="#contact" 
            className="block text-gray-700 hover:text-cyan-600 transition-colors py-2 text-lg"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
