"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Branding */}
        <Link href="/" className="text-xl font-bold text-white">
          MicroFinance
        </Link>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/loans" className="text-gray-300 hover:text-gray-400 font-light">
            Loans Options
          </Link>

          <Link href="/calculator" className="text-gray-300 hover:text-gray-400 font-light">
            Calculator
          </Link>

          <Link href="/auth/login" className="text-gray-300 hover:text-gray-400 font-light">
            Login
          </Link>

          <Link href="/dashboard" className="text-gray-300 hover:text-gray-400 font-light">
            Dashboard
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden shadow-lg bg-gray-800">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link
              href="/loans"
              className="w-full text-gray-300 hover:text-gray-400 font-light"
              onClick={toggleMenu}
            >
              Loans Options
            </Link>

            <Link
              href="/calculator"
              className="w-full text-gray-300 hover:text-gray-400 font-light"
              onClick={toggleMenu}
            >
              Calculator
            </Link>

            <Link
              href="/auth/login"
              className="w-full text-gray-300 hover:text-gray-400 font-light"
              onClick={toggleMenu}
            >
              Login
            </Link>

            <Link
              href="/dashboard"
              className="w-full text-gray-300 hover:text-gray-400 font-light"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 