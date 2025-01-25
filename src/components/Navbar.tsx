"use client"

// components/Navbar.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Branding */}
        <Link href="/" className="text-xl font-bold text-teal-600">
          MicroFinance
        </Link>

        {/* Desktop Navigation */}
        {/* <div className="hidden md:flex space-x-8">
      

          <Link href="/dashboard" className="hover:text-teal-600">
            Dashboard
          </Link>
          <Link href="/contact" className="hover:text-teal-600">
            Contact Us
          </Link>
        </div> */}

        {/* Authentication Actions */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline" className="text-teal-600">
            Login as admin
          </Button>
          
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden text-teal-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start p-4 space-y-4">

            <Link href="/loans" className="w-full text-teal-600" onClick={toggleMenu}>
              Loans
            </Link>
            <Link
              href="/dashboard"
              className="w-full text-teal-600"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>

            <div className="w-full space-y-2">
              <Button
                variant="outline"
                className="w-full text-teal-600"
                onClick={toggleMenu}
              >
                Login as Admin
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
