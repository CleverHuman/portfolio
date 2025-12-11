'use client';

import { useEffect, useRef } from 'react';

interface VortexProps {
  className?: string;
  particleCount?: number;
  baseHue?: number;
}

export function Vortex({ className = '', particleCount = 80, baseHue = 200 }: VortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    angle: number;
    radius: number;
    speed: number;
    size: number;
    hue: number;
  }>>([]);
  const centerXRef = useRef<number>(0);
  const centerYRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      // Use viewport dimensions for true full screen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerXRef.current = canvas.width / 2;
      centerYRef.current = canvas.height / 2;
      
      // Reinitialize particles on resize - full screen coverage
      particlesRef.current = [];
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.8; // Increased range
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const radius = Math.random() * maxRadius;
        particlesRef.current.push({
          x: centerXRef.current + Math.cos(angle) * radius,
          y: centerYRef.current + Math.sin(angle) * radius,
          angle: angle,
          radius: radius,
          speed: 0.004 + Math.random() * 0.005,
          size: 2 + Math.random() * 3,
          hue: baseHue + Math.random() * 60,
        });
      }
    };

    // Initial resize
    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
    };
    
    // Initial resize
    resizeCanvas();
    
    window.addEventListener('resize', handleResize);
    
    // Also use ResizeObserver as backup
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createRadialGradient(
        centerXRef.current,
        centerYRef.current,
        0,
        centerXRef.current,
        centerYRef.current,
        Math.max(canvas.width, canvas.height) * 0.8
      );
      gradient.addColorStop(0, `hsla(${baseHue}, 70%, 20%, 0.08)`);
      gradient.addColorStop(0.5, `hsla(${baseHue + 30}, 60%, 15%, 0.04)`);
      gradient.addColorStop(1, `hsla(${baseHue + 60}, 50%, 10%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update angle for spiral motion
        particle.angle += particle.speed;
        
        // Update radius for inward spiral
        particle.radius = Math.max(0, particle.radius - 1);
        if (particle.radius <= 0) {
          const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;
          particle.radius = Math.random() * maxRadius;
        }
        
        // Update position
        particle.x = centerXRef.current + Math.cos(particle.angle) * particle.radius;
        particle.y = centerYRef.current + Math.sin(particle.angle) * particle.radius;
        
        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = 0.7;
        
        // Outer glow
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, `hsl(${particle.hue}, 80%, 70%)`);
        gradient.addColorStop(0.5, `hsl(${particle.hue}, 70%, 60%)`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 50%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = `hsl(${particle.hue}, 80%, 70%)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw connecting lines to nearby particles
        particlesRef.current.forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && distance > 0) {
            ctx.globalAlpha = (1 - distance / 150) * 0.2;
            ctx.strokeStyle = `hsl(${particle.hue}, 70%, 60%)`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
        
        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, baseHue]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 pointer-events-none ${className}`}
      style={{ 
        zIndex: 0,
        width: '100vw',
        height: '100vh'
      }}
    />
  );
}

