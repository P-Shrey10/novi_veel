import React from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Zap } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '42%',
      label: 'faster delivery',
      description:
        'Teams ship features 42% faster within their first month. Real data from 200+ engineering teams who switched from fragmented tools to Novi.',
    },
    {
      icon: Users,
      value: 'Zero',
      label: 'information silos',
      description:
        'When everything lives in one place, knowledge flows naturally. No more hunting through 12 Slack channels to find a decision.',
    },
    {
      icon: Zap,
      value: '100%',
      label: 'team visibility',
      description:
        'Complete transparency without surveillance. Everyone sees what is shipping, what is blocked, and what needs attention — without daily standups or status meetings.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full py-20 ">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Built around the four rhythms
            <br />
            <span className="italic text-slate-600">of work.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Not just another all-in-one tool. A thoughtfully designed workspace that mirrors 
            how great teams actually operate — async updates, personal focus time, collaborative planning, 
            and a shared knowledge base. Everything in its right place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="p-8 border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className='flex items-center justify-start gap-3'>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                </div>
                <div className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">
                  {stat.label}
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {stat.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
