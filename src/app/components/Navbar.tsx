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
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gradient-to-b from-cyan-600 via-cyan-500 to-cyan-400 px-4 pb-4 space-y-2 text-white">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="#about" className="block">
            About
          </Link>
          <Link href="#services" className="hover:underline">
            Services
          </Link>
          <Link href="#contact" className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
