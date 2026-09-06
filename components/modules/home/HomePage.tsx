import React from 'react'
import HeroSection from "@/components/modules/home/HeroSection"
import TrustedBySection from "@/components/modules/home/TrustedBySection"
import FeaturesSection from "@/components/modules/home/FeaturesSection"
import ProcessSection from "@/components/modules/home/ProcessSection"
import TabsSection from "@/components/modules/home/TabsSection"
import StatsSection from "@/components/modules/home/StatsSection"
import TestimonialsSection from "@/components/modules/home/TestimonialsSection"
import CtaSection from "@/components/modules/home/CtaSection"

const HomePage:React.FC = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <ProcessSection />
      <TabsSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

export default HomePage