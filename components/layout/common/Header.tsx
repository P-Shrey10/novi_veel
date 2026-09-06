"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/components/assets/image/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = ["Product", "Features", "Manifesto", "Pricing"];

  const renderNavLinks = (mobile = false) =>
    navItems.map((item) => (
      <Link
        key={item}
        href="#"
        className={
          mobile
            ? "px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            : "text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
        }
        onClick={mobile ? closeMenu : undefined}
      >
        {item}
      </Link>
    ));

  return (
    <>
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src={logoImage}
              alt="Logo"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {renderNavLinks()}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link href="/register">
              <Button className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-5 py-2 text-base font-medium transition-colors">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={closeMenu} />

        <div
          className={`absolute right-0 top-0 h-full w-full sm:w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <Image
                src={logoImage}
                alt="Logo"
                width={40}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-2">
            {renderNavLinks(true)}

            <div className="border-t border-gray-200 my-2 pt-4">
              <Link
                href="/login"
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              <Link href="/register" onClick={closeMenu} className="block mt-2">
                <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 rounded-full px-5 py-2 text-base font-medium transition-colors">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
