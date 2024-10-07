import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header'))
const Hero = dynamic(() => import('@/components/Hero'))
const About = dynamic(() => import('@/components/About'))
const Skills = dynamic(() => import('@/components/Skills'))
const Projects = dynamic(() => import('@/components/Projects'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}