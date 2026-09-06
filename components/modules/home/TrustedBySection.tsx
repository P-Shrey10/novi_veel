import React from 'react';

const TrustedBySection: React.FC = () => {
  const companies = [
    { name: 'VELOCE', id: 1 },
    { name: 'HYPERION', id: 2 },
    { name: 'PULSEKIT', id: 3 },
    { name: 'KROMA', id: 4 },
    { name: 'FORMANT', id: 5 },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 w-full py-8 sm:py-10 md:py-12">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <p className="text-xs sm:text-sm font-medium tracking-wider text-slate-400 uppercase">
            Trusted by fast-moving engineering & design squads worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 items-center justify-items-center">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center w-full group transition-all duration-300"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-500 group-hover:text-slate-300 transition-colors duration-300 whitespace-nowrap">
                {company.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default TrustedBySection;
