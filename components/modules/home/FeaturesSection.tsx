import React from 'react';
import { Calendar, MessageSquare, FileText } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Scrub the human chaos you saved',
      description: 'No more trawling through endless Slack threads. Every decision, every message, every piece of context lives in one searchable place. Find what you need in seconds, not hours.',
      color: 'indigo',
    },
    {
      icon: MessageSquare,
      title: 'Threads, not notifications',
      description: 'Conversations that stay connected to the work they reference. No more hunting for context across five different tools. Reply when you are ready, not when you are interrupted.',
      color: 'emerald',
    },
    {
      icon: FileText,
      title: 'Same tasks',
      description: 'Kanban boards that actually work. Drag, drop, and organize work the way your team thinks. Build in public or keep it private. Your workflow, your rules.',
      color: 'blue',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full py-12 ">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6">
            Everything your squad needs.
            <br />
            <span className="italic text-slate-600">Zero usual admin.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed px-4">
            Everything your sprint requires, stripped of administrative friction. 
            Just the tools you need to ship, communicate, and move forward without the overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start group"
              >
                <div className='flex items-center justify-center  gap-2'>
                <div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl mb-4 sm:mb-5 ${
                    feature.color === 'indigo'
                      ? 'bg-indigo-100'
                      : feature.color === 'emerald'
                      ? 'bg-emerald-100'
                      : 'bg-blue-100'
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      feature.color === 'indigo'
                        ? 'text-indigo-600'
                        : feature.color === 'emerald'
                        ? 'text-emerald-600'
                        : 'text-blue-600'
                    }`}
                  />
                </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
