'use client'
// components/MouseGradient.tsx
import { useEffect, useState } from 'react';

const MouseGradient = () => {
  const [bgStyle, setBgStyle] = useState<string>(
    'radial-gradient(circle, rgba(10, 0, 147, 0.3) 0%, rgba(22, 16, 131, 0) 50%)'
  );

  const handleMouseMove = (e: MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setBgStyle(`radial-gradient(circle at ${x}% ${y}%, rgba(10, 0, 147, 0.3) 0%, rgba(22, 16, 131, 0) 50%)`);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ background: bgStyle, transition: 'background 0.2s ease' }}
    />
  );
};

export default MouseGradient;