'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface CardHighlightProps {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}

export function CardHighlight({
  children,
  className,
  cardClassName,
}: CardHighlightProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={cn('group relative', className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(var(--chart-1), 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <Card className={cn('border transition-all duration-300 hover:border-primary/50', cardClassName)}>
        {children}
      </Card>
    </div>
  );
}

export function CardHighlightHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />;
}

export function CardHighlightContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />;
}

export function CardHighlightFooter(props: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter {...props} />;
}