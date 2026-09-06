import { cn } from "cn";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PANELS = [
  {
    value: "inbox",
    label: "Async Inbox",
    dot: "bg-indigo-500",
    title: "Ship, review, and move backlog with one utterly calm view.",
    body: "Everything that needs your attention, organized by priority and context. A calm backlog that respects your focus. See what is shipped, what needs review, and what is waiting — all without the anxiety of an overflowing inbox.",
    bullets: [
      "All threads connected to relevant work",
      "Smart reminders that do not nag",
      "Batch responses when you are ready",
    ],
  },
  {
    value: "velocity",
    label: "My Daily Velocity",
    dot: "bg-indigo-500",
    title: "Track what you shipped, not what you started.",
    body: "Your personal dashboard of completed work. No vanity metrics, no busywork tracking — just a clear view of what actually shipped. Understand your real velocity, spot patterns, and celebrate meaningful progress.",
    stats: [
      { value: "42%", label: "Faster delivery" },
      { value: "Zero", label: "Context switching" },
      { value: "100%", label: "Visibility" },
    ],
  },
  {
    value: "sprints",
    label: "Sprint Planning",
    dot: "bg-emerald-500",
    title: "Plan sprints that actually ship.",
    body: "Capacity planning built on reality, not wishful thinking. See who has bandwidth, what is at risk, and where bottlenecks hide. Drag, drop, and adjust without ceremony. Sprint planning that takes minutes, not hours.",
    bullets: [
      "Real-time capacity visibility",
      "Dependency tracking that works",
      "Historical velocity data",
    ],
  },
  {
    value: "brain",
    label: "Core Brain",
    dot: "bg-purple-500",
    title: "Your second brain for everything that matters.",
    body: "Documentation that lives where the work happens. Every note, decision, and doc connected to the tasks they reference. Find anything in seconds with smart search. Knowledge that actually gets used, not buried in a wiki.",
    bullets: ["Bi-directional linking", "Instant full-text search", "Markdown support"],
  },
] as const;

const TabsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 w-full py-12 sm:py-16 md:py-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3 sm:mb-4">
            One system. Four calm perspectives.
          </h2>
        </div>

        <Tabs defaultValue="inbox" className="w-full flex-col! items-center">
          <TabsList
            className={cn(
              "h-auto! w-fit max-w-full flex-wrap justify-center gap-1.5",
              "bg-white border border-slate-200 p-2 rounded-lg shadow-sm mb-8 sm:mb-10 md:mb-12"
            )}
          >
            {PANELS.map((panel) => (
              <TabsTrigger
                key={panel.value}
                value={panel.value}
                className={cn(
                  "h-auto! flex-none rounded-md px-5 sm:px-6 md:px-8 py-3 sm:py-3.5",
                  "text-xs sm:text-sm font-medium text-slate-500 transition-all",
                  "hover:text-slate-900",
                  "data-active:bg-indigo-600 data-active:text-white data-active:shadow-none",
                  "dark:data-active:bg-indigo-600 dark:data-active:text-white"
                )}
              >
                {panel.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full">
            {PANELS.map((panel) => (
              <TabsContent key={panel.value} value={panel.value} className="mt-0">
                <div className="w-full h-112 bg-white border border-slate-200 rounded-lg overflow-hidden">
                  <div className="h-full overflow-y-auto custom-scrollbar p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
                        {panel.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
                        {panel.body}
                      </p>

                      {"bullets" in panel && (
                        <div className="bg-slate-100 rounded-lg p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
                          <div className="space-y-3 sm:space-y-4">
                            {panel.bullets.map((bullet) => (
                              <div key={bullet} className="flex items-center gap-2.5 sm:gap-3">
                                <div className={cn("w-2 h-2 rounded-full shrink-0", panel.dot)} />
                                <span className="text-sm sm:text-base text-slate-700">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {"stats" in panel && (
                        <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
                          {panel.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-600">
                                {stat.value}
                              </div>
                              <div className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TabsSection;