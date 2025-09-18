import { cn } from '@/lib/utils';
import {
  AnimationT,
  ANIMATION_VARIANTS ,
} from '@/components/systaliko-ui/utils/animation-variants';
import { motion } from 'motion/react';

interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
  animation?: AnimationT;
}

export function WordStagger({
  children,
  animation='default',
  className,
  ...props
}: WordProps) {
  const characters = String(children).split('');
  return (
    <span className={cn('inline-block text-nowrap', className)} {...props}>
      {characters.map((char, index) => (
        <motion.span
          className="inline-block"
          variants={ANIMATION_VARIANTS[animation]}
          key={`${char}-${index}`}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
