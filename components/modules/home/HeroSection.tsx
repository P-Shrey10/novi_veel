import React from 'react';
import {
  CheckCircle2,
  Play,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import heroSectionImage from '@/components/assets/image/hero_section_image.png';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 w-full">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 max-w-full">
        <div className="flex justify-center mb-4 sm:mb-6 px-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-indigo-700 hover:bg-indigo-100 transition-colors text-center"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
            <span className="line-clamp-1 sm:line-clamp-none">
              Novi 2.0 is live • Unified sprint velocity and calm async threads
            </span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 leading-tight">
            Run your team without the{' '}
            <span className="italic text-indigo-600">tab switching.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Novi brings tasks, docs, and conversations into one thoughtfully quiet workspace — 
            a single place where small, fast-moving teams can focus on shipping rather than switching. 
            Built for teams who value clarity over chaos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-8">
          <Link href="/register" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-5 sm:px-6 py-4 sm:py-5 text-sm shadow-lg shadow-indigo-600/20 transition-all duration-300"
            >
              Start free 14-day trial <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="#features" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-slate-300 hover:border-indigo-300 hover:bg-indigo-50/50 px-5 sm:px-6 py-4 sm:py-5 text-sm transition-all duration-300"
            >
              <span className="flex items-center justify-center w-5 h-5 mr-2">
                <Play className="w-2.5 h-2.5 fill-current" />
              </span>
              Watch 2-min interactive tour
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mt-4 sm:mt-6 text-xs sm:text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
            Instant 2-minute migration
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500" />
            macOS, Web &amp; iPad
          </span>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-slate-300/40 border border-slate-200 bg-white">
            <div className="relative w-full">
              <Image
                src={heroSectionImage}
                alt="Novi workspace dashboard preview"
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;