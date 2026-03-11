import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

export function OceanBackground() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.5 + 0.1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }

        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Wave effect
    class Wave {
      constructor(y, opacity) {
        this.y = y;
        this.length = canvas.width;
        this.amplitude = Math.random() * 30 + 20;
        this.frequency = Math.random() * 0.01 + 0.005;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.02 + 0.01;
        this.opacity = opacity;
      }

      update() {
        this.phase += this.speed;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.moveTo(0, this.y);

        for (let x = 0; x < canvas.width; x++) {
          const y =
            this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, this.y - 50, 0, this.y + 50);
        gradient.addColorStop(0, `rgba(0, 105, 148, ${this.opacity * 0.1})`);
        gradient.addColorStop(1, `rgba(0, 150, 199, ${this.opacity * 0.2})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create particles and waves
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    const waves = [];
    for (let i = 0; i < 5; i++) {
      waves.push(new Wave(canvas.height * 0.2 * (i + 1), 0.3 - i * 0.05));
    }

    // Animation loop
    let animationId;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background based on scroll
      const depth = Math.min(scrollY / 1000, 1);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      // Colori che vanno dal celeste chiaro al blu profondo
      gradient.addColorStop(0, `rgba(135, 206, 235, ${0.4 - depth * 0.2})`);
      gradient.addColorStop(0.5, `rgba(0, 105, 148, ${0.5 + depth * 0.3})`);
      gradient.addColorStop(1, `rgba(0, 51, 102, ${0.6 + depth * 0.4})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach((wave) => {
        wave.update();
        wave.draw();
      });

      // Draw particles (bubbles)
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${
        isShopPage ? 'opacity-100' : 'opacity-100'
      }`}
      style={{ pointerEvents: 'none' }}
    />
  );
}
