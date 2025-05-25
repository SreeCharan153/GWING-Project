'use client';

import { motion } from 'framer-motion';
import { CardHighlight, CardHighlightHeader, CardHighlightContent } from '@/components/ui/card-highlight';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl text-center"
    >
      <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Modern Frontend Template
        <span className="text-primary"> for Next.js</span>
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        A clean, scalable starter template with responsive design, theming, and essential components.
      </p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        {/* Button content will be passed as children */}
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {/* Feature cards */}
      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Responsive Design</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              Mobile-first design approach that looks great on all devices and screen sizes.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>

      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Theme Switching</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              Light and dark theme support with persistent preferences stored in local storage.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>

      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Form Validation</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              Robust form validation using React Hook Form and Zod for type-safe schemas.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>

      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Image Slider</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              Performant image carousel with navigation controls, autoplay, and smooth animations.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>

      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Animations</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              Smooth, performant animations with Framer Motion for enhanced user experience.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>

      <motion.div variants={item}>
        <CardHighlight>
          <CardHighlightHeader>
            <h3 className="text-xl font-bold">Accessible Components</h3>
          </CardHighlightHeader>
          <CardHighlightContent>
            <p className="text-muted-foreground">
              ARIA-compliant, keyboard navigable components for all users.
            </p>
          </CardHighlightContent>
        </CardHighlight>
      </motion.div>
    </motion.div>
  );
}