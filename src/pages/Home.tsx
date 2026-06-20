import { SEO } from '../components/ui'
import Hero from '../components/home/Hero'
import { Stats, ServicesOverview, TechShowcase, PortfolioPreview, TestimonialsPreview, TeamPreview, CTASection } from '../components/home/HomeSections'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="NextGen Technologies — Software development, mobile apps, AI solutions, cloud computing and IT consulting based in Maharashtra, India."
      />
      <Hero />
      <Stats />
      <ServicesOverview />
      <TechShowcase />
      <PortfolioPreview />
      <TestimonialsPreview />
      <TeamPreview />
      <CTASection />
    </>
  )
}
