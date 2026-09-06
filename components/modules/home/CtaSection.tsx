import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900 w-full py-20 ">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 px-4 py-1.5 text-sm text-indigo-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            NO CREDIT CARD NEEDED
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Ready to run your team with{' '}
            <span className="italic text-indigo-300">calm</span> velocity?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join 2,000+ engineering & design teams who ditched the chaos for a workspace that actually respects focus. 
            No credit card required. 14 days free. Migrate in minutes.
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-400/20 h-12"
            />
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-12 shadow-lg shadow-indigo-600/30"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Free 14-day trial
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
