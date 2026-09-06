import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      rating: 5,
      quote:
        'This app embodies a fragmentation-free ethos. It does not merely consolidate tools, it harmonizes the entire flow of work. Finally, software that respects how humans actually think and collaborate.',
      author: 'Alex Rivera',
      role: 'VP Engineering, TechFlow',
      avatar: '👤',
    },
    {
      rating: 5,
      quote:
        'LOVE THIS! No more endless scrolling through Slack to find that one decision from two weeks ago. Everything is connected, searchable, and actually useful. My team context switching dropped to almost zero.',
      author: 'Jane Chen',
      role: 'Product Lead, Velocity Labs',
      avatar: '👤',
    },
    {
      rating: 5,
      quote:
        'My team ships 40% faster since we switched. The calm is real. No more notification chaos, no more wondering what everyone is working on. Just focused work and clear progress. Game changer.',
      author: 'Marcus Johnson',
      role: 'Engineering Manager, Apex',
      avatar: '👤',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white w-full py-20 ">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            4.9/5★ from teams who actually ship
          </h2>
          <p className="text-lg text-slate-600">
            Not just about fragmentation-free workflows. It is about doing good work without burnout, chaos, and endless standups.
             Engineering teams worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-indigo-200 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
