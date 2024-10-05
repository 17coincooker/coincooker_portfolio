'use client'
// components/AnimatedLink.tsx
import { motion } from 'framer-motion';

const AnimatedLink = ({ targetId, children }: { targetId: string; children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.a
      href={`#${targetId}`}
      onClick={handleClick}
      className="text-blue-600 outline-none"
    >
      {children}
    </motion.a>
  );
};

export default AnimatedLink;