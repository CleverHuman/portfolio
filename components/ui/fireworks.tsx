'use client';

import { useEffect, useRef } from 'react';

interface FireworksProps {
  className?: string;
  particleCount?: number;
  interval?: number;
}

export function Fireworks({ className = '', particleCount = 50, interval = 2000 }: FireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    decay: number;
    color: string;
    size: number;
    trail: Array<{ x: number; y: number; life: number }>;
    trailLength: number;
  }>>([]);
  const lastFireworkRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 800;
      canvas.height = rect.height || 200;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Use ResizeObserver for better size tracking
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(canvas);

    const colors = [
      '#06b6d4', // cyan-500
      '#3b82f6', // blue-500
      '#8b5cf6', // purple-500
      '#ec4899', // pink-500
      '#f59e0b', // amber-500
    ];

    const createFirework = (x: number, y: number) => {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const particles: typeof particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = 2 + Math.random() * 3;
        const trailLength = Math.floor(Math.random() * 6) + 10; // Random between 10 and 15
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.015 + Math.random() * 0.01,
          color,
          size: 2 + Math.random() * 2,
          trail: [{ x, y, life: 1 }],
          trailLength,
        });
      }

      particlesRef.current.push(...particles);
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastFireworkRef.current > interval) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.5; // Upper half of canvas
        createFirework(x, y);
        lastFireworkRef.current = currentTime;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // Gravity
        particle.life -= particle.decay;

        if (particle.life > 0) {
          // Add current position to trail
          particle.trail.push({ x: particle.x, y: particle.y, life: particle.life });
          
          // Keep trail length manageable (use random trail length for each particle)
          if (particle.trail.length > particle.trailLength) {
            particle.trail.shift();
          }
          
          // Update trail life values
          particle.trail.forEach((point) => {
            point.life = Math.max(0, point.life - 0.02);
          });
          
          // Remove dead trail points
          particle.trail = particle.trail.filter((point) => point.life > 0);

          ctx.save();
          
          // Draw trail lines
          if (particle.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(particle.trail[0].x, particle.trail[0].y);
            
            for (let i = 1; i < particle.trail.length; i++) {
              const point = particle.trail[i];
              const prevPoint = particle.trail[i - 1];
              
              // Gradient opacity based on position in trail
              const trailAlpha = point.life * 0.8;
              ctx.globalAlpha = trailAlpha;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 3 * point.life;
              ctx.lineCap = 'round';
              ctx.lineJoin = 'round';
              
              ctx.beginPath();
              ctx.moveTo(prevPoint.x, prevPoint.y);
              ctx.lineTo(point.x, point.y);
              ctx.stroke();
            }
          }
          
          // Draw particle
          ctx.globalAlpha = particle.life;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
          return true;
        }
        return false;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, interval]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}

