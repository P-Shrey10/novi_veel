import React from 'react';
import { LayoutGrid, MessageSquare, Calendar, RefreshCw } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: LayoutGrid,
      title: 'Boards that move at your speed',
      description: 'Plan sprints and track tasks without hunting through spreadsheets. Drag, drop, and ship. Simple boards that adapt to your team\'s velocity, not the other way around.',
      color: 'indigo',
    },
    {
      icon: MessageSquare,
      title: 'Threads, not another inbox',
      description: 'Keep project conversations attached to the work itself. No more context switching between Slack, email, and your task manager. Everything stays connected where it matters.',
      color: 'emerald',
    },
    {
      icon: Calendar,
      title: 'One timeline for the whole team',
      description: 'Every deadline and milestone in one shared view. No more piecing together progress from status updates. See what\'s shipping, what\'s blocked, and what\'s next — at a glance.',
      color: 'blue',
    },
    {
      icon: RefreshCw,
      title: 'Works the way you already do',
      description: 'Import from Trello, Asana, or a spreadsheet in minutes. Bring your existing workflow into Novi without breaking stride. Integration that respects your process.',
      color: 'purple',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full py-12 sm:py-16 md:py-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6">
            Everything your team needs.
            <br />
            <span className="italic text-slate-600">Nothing you don&lsquo;t.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed px-4">
            Built for small, fast-moving teams who need to ship without the overhead. 
            All the essentials in one calm workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-start group p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className='flex items-center justify-center  gap-2'>
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl mb-5 ${
                    feature.color === 'indigo'
                      ? 'bg-indigo-100'
                      : feature.color === 'emerald'
                      ? 'bg-emerald-100'
                      : feature.color === 'blue'
                      ? 'bg-blue-100'
                      : 'bg-purple-100'
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      feature.color === 'indigo'
                        ? 'text-indigo-600'
                        : feature.color === 'emerald'
                        ? 'text-emerald-600'
                        : feature.color === 'blue'
                        ? 'text-blue-600'
                        : 'text-purple-600'
                    }`}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
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
