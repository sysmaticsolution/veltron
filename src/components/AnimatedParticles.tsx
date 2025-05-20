"use client";

import React, { useState, useEffect } from 'react';

type Particle = {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
  animationClass: string;
};

export default function AnimatedParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  
  // Generate particles only on the client side
  useEffect(() => {
    const generatedParticles = [];
    
    for (let i = 0; i < count; i++) {
      generatedParticles.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationClass: `animate-float-${i % 5 + 1}`
      });
    }
    
    setParticles(generatedParticles);
    setIsMounted(true);
  }, [count]);
  
  // Return empty container during server-side rendering and initial client render
  if (!isMounted) {
    return <div className="absolute inset-0 pointer-events-none z-20"></div>;
  }
  
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {particles.map(particle => (
        <div 
          key={`particle-${particle.id}`} 
          className={`absolute w-2 h-2 rounded-full bg-primary/20 ${particle.animationClass}`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay
          }}
        />
      ))}
    </div>
  );
}
