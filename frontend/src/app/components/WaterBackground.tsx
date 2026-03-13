import React, { useEffect, useRef } from 'react';

interface WaterBackgroundProps {
  noDarken?: boolean;
}

export const WaterBackground = ({ noDarken = false }: WaterBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let rayOffset = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update(clampedDepth: number) {
        // Particles move faster as you dive
        this.y -= (this.speedY * (1 + clampedDepth * 2));
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
      }

      draw(clampedDepth: number) {
        if (!ctx) return;
        const pOpacity = (this.opacity * (1 - clampedDepth * 0.5));
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${pOpacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.floor((width * height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const lerpColor = (a: string, b: string, amount: number) => {
      const ah = parseInt(a.replace(/#/g, ''), 16),
            ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
            bh = parseInt(b.replace(/#/g, ''), 16),
            br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
            rr = ar + amount * (br - ar),
            rg = ag + amount * (bg - ag),
            rb = ab + amount * (bb - ab);
      return '#' + ((1 << 24) + (Math.round(rr) << 16) + (Math.round(rg) << 8) + Math.round(rb)).toString(16).slice(1);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const scrollY = window.scrollY;
      const depthFactor = noDarken ? 0 : scrollY / 2000; 
      const clampedDepth = Math.min(depthFactor, 1);

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      
      if (clampedDepth < 0.5) {
        const ratio = clampedDepth * 2;
        gradient.addColorStop(0, lerpColor('#083344', '#020617', ratio)); 
        gradient.addColorStop(1, lerpColor('#164e63', '#082f49', ratio)); 
      } else {
        const ratio = (clampedDepth - 0.5) * 2;
        gradient.addColorStop(0, '#020617'); 
        gradient.addColorStop(1, lerpColor('#082f49', '#000000', ratio));
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Rays
      rayOffset += 0.003;
      const rayOpacity = Math.max(0, 0.12 * (1 - clampedDepth * 1.8));
      
      if (rayOpacity > 0) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        for (let i = 0; i < 4; i++) {
          const xPos = (width * (0.1 + i * 0.25) + Math.sin(rayOffset + i) * 150);
          ctx.beginPath();
          ctx.moveTo(xPos, -100);
          ctx.lineTo(xPos + 300, height + 100);
          ctx.lineTo(xPos + 600, height + 100);
          ctx.lineTo(xPos + 300, -100);
          const rayGrad = ctx.createLinearGradient(xPos, 0, xPos + 400, height);
          rayGrad.addColorStop(0, `rgba(165, 243, 252, ${rayOpacity})`);
          rayGrad.addColorStop(1, 'rgba(165, 243, 252, 0)');
          ctx.fillStyle = rayGrad;
          ctx.fill();
        }
        ctx.restore();
      }

      // Vignette
      const vignetteOpacity = 0.2 + (clampedDepth * 0.6);
      const vigGrad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width * 0.9);
      vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
      vigGrad.addColorStop(1, `rgba(0,0,0,${vignetteOpacity})`);
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        p.update(clampedDepth);
        p.draw(clampedDepth);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [noDarken]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none transition-colors duration-1000"
      style={{ zIndex: -1 }}
    />
  );
};
