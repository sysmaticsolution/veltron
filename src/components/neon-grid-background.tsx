"use client";

import { useEffect, useRef } from 'react';

export function NeonGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Call once to initialize
    resizeCanvas();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Grid properties
    const gridSize = 100; // Larger grid size for more visibility
    const lineWidth = 2; // Thicker lines
    const glowIntensity = 10; // Stronger glow
    const neonColor = '#00e1ff'; // Cyan neon color
    const neonColorAlt = '#4d00ff'; // Purple neon color for variety
    
    // Animation properties
    let time = 0;
    const speed = 0.0008; // Slightly faster animation

    // Draw the grid with neon effect
    function drawGrid() {
      if (!canvas || !ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate grid dimensions
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;
      
      // Draw the 3D cube effect (similar to the image)
      // First draw the background cubes
      drawCubeGrid(ctx, canvas, gridSize, time, '#00e1ff22', 0.2);
      
      // Set line style for main grid
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = neonColor;
      ctx.shadowBlur = glowIntensity;
      ctx.shadowColor = neonColor;
      
      // Draw the grid with perspective effect
      const perspectiveOffset = Math.sin(time) * 15;
      
      // Draw vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize + perspectiveOffset;
        const brightness = Math.abs(Math.sin(time + i * 0.1));
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + perspectiveOffset * 2, canvas.height);
        
        // Vary opacity for animation effect
        ctx.globalAlpha = 0.2 + brightness * 0.6; // Higher base opacity
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize;
        const brightness = Math.abs(Math.sin(time + i * 0.1));
        
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + perspectiveOffset);
        
        // Vary opacity for animation effect
        ctx.globalAlpha = 0.2 + brightness * 0.6; // Higher base opacity
        ctx.stroke();
      }
      
      // Add glowing particles
      const numParticles = 30; // More particles
      ctx.fillStyle = neonColor;
      
      for (let i = 0; i < numParticles; i++) {
        const x = (Math.sin(time * 2 + i) * 0.5 + 0.5) * canvas.width;
        const y = (Math.cos(time * 3 + i) * 0.5 + 0.5) * canvas.height;
        const size = Math.abs(Math.sin(time + i)) * 4 + 2; // Larger particles
        
        ctx.globalAlpha = Math.abs(Math.sin(time + i * 0.5)) * 0.7 + 0.3; // Brighter particles
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Add diagonal lines with stronger glow
      ctx.globalAlpha = 0.4; // More visible
      ctx.shadowBlur = 15; // Stronger glow
      ctx.strokeStyle = neonColorAlt; // Different color for contrast
      ctx.shadowColor = neonColorAlt;
      
      for (let i = 0; i < 8; i++) { // More lines
        const offset = (time * 200 + i * 300) % (canvas.width + canvas.height) - canvas.height;
        
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(offset + canvas.height, canvas.height);
        ctx.stroke();
      }
      
      // Update time for animation
      time += speed;
      
      // Request next frame
      requestAnimationFrame(drawGrid);
    }
    
    // Function to draw 3D cube grid effect
    function drawCubeGrid(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, size: number, time: number, color: string, opacity: number) {
      const cols = Math.ceil(canvas.width / size) + 1;
      const rows = Math.ceil(canvas.height / size) + 1;
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 5;
      ctx.shadowColor = neonColor;
      ctx.globalAlpha = opacity;
      
      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = x * size;
          const posY = y * size;
          const offset = Math.sin(time + x * 0.1 + y * 0.1) * 5;
          
          // Draw cube edges
          ctx.beginPath();
          // Bottom face
          ctx.moveTo(posX, posY);
          ctx.lineTo(posX + size, posY);
          ctx.lineTo(posX + size + offset, posY + offset);
          ctx.lineTo(posX + offset, posY + offset);
          ctx.lineTo(posX, posY);
          
          // Side face
          ctx.moveTo(posX, posY);
          ctx.lineTo(posX + offset, posY + offset);
          ctx.lineTo(posX + offset, posY + size + offset);
          ctx.lineTo(posX, posY + size);
          ctx.lineTo(posX, posY);
          
          // Top face
          ctx.moveTo(posX, posY + size);
          ctx.lineTo(posX + size, posY + size);
          ctx.lineTo(posX + size + offset, posY + size + offset);
          ctx.lineTo(posX + offset, posY + size + offset);
          ctx.lineTo(posX, posY + size);
          
          ctx.stroke();
        }
      }
    }
    
    // Start animation
    drawGrid();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ 
        zIndex: 0,
        opacity: 1, // Full opacity
        background: 'linear-gradient(to bottom, #000814, #000a1f)',
        pointerEvents: 'none', // Allow interaction with elements behind the canvas
      }}
    />
  );
}
