'use client';

import { ImageSlider } from '@/components/ui/image-slider';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg',
    alt: 'Mountain landscape',
    category: 'nature',
  },
  {
    src: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg',
    alt: 'Urban cityscape',
    category: 'urban',
  },
  {
    src: 'https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg',
    alt: 'Beach sunset',
    category: 'nature',
  },
  {
    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
    alt: 'City buildings',
    category: 'urban',
  },
  {
    src: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg',
    alt: 'Forest trail',
    category: 'nature',
  },
  {
    src: 'https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg',
    alt: 'Street art',
    category: 'urban',
  },
];

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Nature', value: 'nature' },
  { name: 'Urban', value: 'urban' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === 'all' || image.category === activeCategory
  );

  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">Image Gallery</h1>
            <p className="text-lg text-muted-foreground">
              A showcase of beautiful imagery with an interactive slider and filtering options.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">Featured Slider</h2>
            <ImageSlider
              images={galleryImages.map(({ src, alt }) => ({ src, alt }))}
              autoPlay={true}
              autoPlayInterval={5000}
              className="rounded-xl"
            />
          </div>

          <div className="mb-6">
            <h2 className="mb-4 text-2xl font-bold">Gallery</h2>
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.value)}
                  className="min-w-20"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={cn('overflow-hidden rounded-lg')}
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{image.alt}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}