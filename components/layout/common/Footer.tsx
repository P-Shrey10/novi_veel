"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logoImage from "@/components/assets/image/logo.png";

interface FooterItem {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

interface FooterData {
  companyName: string;
  year: number;
  tagline: string;
  sections: FooterSection[];
  legal: FooterItem[];
}

const footerData: FooterData = {
  companyName: "Novi Technologies, Inc.",
  year: new Date().getFullYear(),
  tagline:
    "One calm workspace for small, fast-moving teams.",
  sections: [
    {
      title: "PRODUCT",
      items: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "RESOURCES",
      items: [
        { label: "Documentation", href: "/docs" },
        { label: "Help Center", href: "/help" },
        { label: "API", href: "/api" },
        { label: "Community", href: "/community" },
      ],
    },
    {
      title: "LEGAL",
      items: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" },
      ],
    },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const Footer: React.FC = () => {
  const renderFooterItems = (items: FooterItem[]) => {
    return items.map((item) => (
      <li key={item.label}>
        <Link
          href={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {item.label}
        </Link>
      </li>
    ));
  };

  return (
    <footer className="w-full border-t border-border/40 bg-slate-50">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-3">
                <Image
                  src={logoImage}
                  alt="Novi Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                  priority
                />
                <span className="text-xl font-bold tracking-tight">Novi</span>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
                {footerData.tagline}
              </p>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  Stay updated
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get product updates, tips, and insights delivered to your inbox.
                </p>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 bg-white border-slate-300"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="https://twitter.com/novi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                  aria-label="Twitter"
                  title="Twitter"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/company/novi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="https://github.com/novi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </Link>
                <Link
                  href="https://youtube.com/@novi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-indigo-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {footerData.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {renderFooterItems(section.items)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {footerData.year} {footerData.companyName} All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {footerData.legal.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {index < footerData.legal.length - 1 && (
                  <span className="text-border/60" aria-hidden="true">
                    |
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
