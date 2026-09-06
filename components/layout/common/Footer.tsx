import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    "Accelerating agile momentum and deep focus for high-velocity teams worldwide.",
  sections: [
    {
      title: "PRODUCT",
      items: [
        { label: "Overview", href: "/product" },
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      title: "COMPANY",
      items: [
        { label: "Manifesto", href: "/manifesto" },
        { label: "Careers", href: "/carrers" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "ACCESS",
      items: [
        { label: "Sign In", href: "/signin" },
        { label: "Sign Up", href: "/signup" },
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
    <footer className="w-full border-t border-border/40 bg-background px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 md:col-span-1 lg:col-span-2">
            <div className="flex flex-col space-y-4">
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
              <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
                {footerData.tagline}
              </p>
            </div>
          </div>

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

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 sm:flex-row">
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
