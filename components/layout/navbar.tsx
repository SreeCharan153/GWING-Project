'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Menu, X, Home, Mail, Image } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Contact', path: '/contact', icon: Mail },
  { name: 'Gallery', path: '/gallery', icon: Image },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">ModernUI</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href={item.path}
                className={cn(
                  'group flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary',
                  pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {item.name}
                <div
                  className={cn(
                    'h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full',
                    pathname === item.path ? 'w-full' : ''
                  )}
                />
              </Link>
            </motion.div>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b bg-background md:hidden"
        >
          <nav className="container flex flex-col space-y-4 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent',
                    pathname === item.path
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
}