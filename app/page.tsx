import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, Image, Github } from 'lucide-react';
import { HeroSection, FeaturesSection } from '@/components/ClientHome';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 py-24 md:py-32">
        <div
          className="absolute inset-0 bg-grid-small-black/[0.2] bg-[length:16px_16px] dark:bg-grid-small-white/[0.2]"
          style={{ maskImage: 'radial-gradient(circle, white, transparent 80%)' }}
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <HeroSection />
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="https://github.com/SreeCharan153/GWING-Project" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Key Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build beautiful, responsive web applications.
            </p>
          </div>

          <FeaturesSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Explore our demo pages to see the components in action.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Form
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/gallery">
                  <Image className="mr-2 h-4 w-4" /> Image Gallery
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}