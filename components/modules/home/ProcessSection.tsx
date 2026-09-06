import React from 'react';
import { Check } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const processes = [
    {
      title: 'Plan once on the launch pad',
      description:
        'Set up your sprint in one calm view. Drag cards, assign work, and see realistic capacity at a glance. No spreadsheet gymnastics, no ceremony — just clear planning that respects your time.',
      image: '📋',
    },
    {
      title: 'Work the way you already do',
      description:
        'Integrate with GitHub, Figma, and your existing stack, or work natively in Novi. We adapt to your workflow, not the other way around. Because the best tool is the one that gets out of your way.',
      image: '⚡',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 w-full py-12 ">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-6 sm:mb-8">
                <div className='flex items-center'>
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{process.image}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                    {process.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
                  {process.description}
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-4 sm:p-6 mt-auto">
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 pb-2.5 sm:pb-3 border-b border-slate-100">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">Integrated workspace</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 pb-2.5 sm:pb-3 border-b border-slate-100">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">Real-time updates</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">Seamless collaboration</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
