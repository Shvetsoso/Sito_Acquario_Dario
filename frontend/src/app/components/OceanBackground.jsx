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

    // Particle system (Bubbles)
    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.2;
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.y < -10) {
          this.y = canvas.height + 10;
          this.x = Math.random() * canvas.width;
        }

        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(173, 216, 230, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(100, 149, 237, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Light Rays (Godrays/Caustics)
    class LightRay {
      constructor(x) {
        this.x = x;
        this.width = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.speed = Math.random() * 0.2 + 0.1;
        this.offset = Math.random() * Math.PI * 2;
      }

      update() {
        this.offset += this.speed * 0.01;
      }

      draw() {
        if (!ctx) return;
        const gradient = ctx.createLinearGradient(this.x, 0, this.x, canvas.height);
        gradient.addColorStop(0, `rgba(135, 206, 250, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 149, 237, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(25, 25, 112, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.globalAlpha = Math.sin(this.offset) * 0.3 + 0.5;
        ctx.fillRect(this.x - this.width / 2, 0, this.width, canvas.height);
        ctx.globalAlpha = 1;
      }
    }

    // Small particles (plankton/dust)
    class Plankton {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.3 + 0.1;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.twinkle = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.twinkle += 0.05;

        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        const twinkleOpacity = (Math.sin(this.twinkle) * 0.5 + 0.5) * this.opacity;
        ctx.fillStyle = `rgba(100, 200, 255, ${twinkleOpacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Fish silhouettes
    class Fish {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * (canvas.height * 0.7) + canvas.height * 0.15;
        this.size = Math.random() * 30 + 15;
        this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.15 + 0.05;
        this.direction = Math.random() > 0.5 ? 1 : -1;
        this.swimOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speed * this.direction;
        this.swimOffset += 0.05;
        this.y += Math.sin(this.swimOffset) * 0.5;

        if (this.direction > 0 && this.x > canvas.width + 50) {
          this.x = -50;
        } else if (this.direction < 0 && this.x < -50) {
          this.x = canvas.width + 50;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        if (this.direction < 0) {
          ctx.scale(-1, 1);
        }
        
        // Fish body
        ctx.fillStyle = 'rgba(0, 100, 150, 0.3)';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size, this.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Tail
        ctx.beginPath();
        ctx.moveTo(-this.size, 0);
        ctx.lineTo(-this.size * 1.5, -this.size * 0.3);
        ctx.lineTo(-this.size * 1.5, this.size * 0.3);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Seaweed/Coral
    class Seaweed {
      constructor(x) {
        this.x = x;
        this.baseY = canvas.height;
        this.height = Math.random() * 150 + 100;
        this.segments = 12;
        this.swaySpeed = Math.random() * 0.02 + 0.01;
        this.swayAmount = Math.random() * 30 + 20;
        this.offset = Math.random() * Math.PI * 2;
        this.opacity = Math.random() * 0.2 + 0.1;
        this.hue = Math.random() * 30 + 140; // Verde-blu
      }

      update() {
        this.offset += this.swaySpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.strokeStyle = `hsla(${this.hue}, 60%, 40%, ${this.opacity})`;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        ctx.moveTo(this.x, this.baseY);
        
        for (let i = 1; i <= this.segments; i++) {
          const y = this.baseY - (this.height / this.segments) * i;
          const sway = Math.sin(this.offset + i * 0.5) * this.swayAmount * (i / this.segments);
          ctx.lineTo(this.x + sway, y);
        }
        
        ctx.stroke();
        ctx.restore();
      }
    }

    // Wave effect
    class Wave {
      constructor(y, opacity) {
        this.y = y;
        this.length = canvas.width;
        this.amplitude = Math.random() * 40 + 30;
        this.frequency = Math.random() * 0.008 + 0.004;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.015 + 0.008;
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
        gradient.addColorStop(0, `rgba(0, 119, 182, ${this.opacity * 0.15})`);
        gradient.addColorStop(1, `rgba(3, 169, 244, ${this.opacity * 0.25})`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Surface Waves (onde sulla superficie)
    class SurfaceWave {
      constructor(index) {
        this.y = 60 + index * 15; // Posizione vicino alla superficie
        this.amplitude = Math.random() * 8 + 6;
        this.frequency = Math.random() * 0.01 + 0.006;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.025 + 0.015;
        this.opacity = 0.15 - index * 0.03;
      }

      update() {
        this.phase += this.speed;
      }

      draw() {
        if (!ctx) return;
        
        // Disegna la linea dell'onda
        ctx.beginPath();
        ctx.moveTo(0, this.y);

        const points = [];
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = this.y + Math.sin(x * this.frequency + this.phase) * this.amplitude;
          ctx.lineTo(x, y);
          points.push({ x, y });
        }

        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.4})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Aggiungi schiuma/creste bianche
        for (let i = 0; i < points.length - 1; i += 20) {
          const point = points[i];
          if (Math.sin(i * 0.1 + this.phase * 2) > 0.7) {
            const foamGradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, 8);
            foamGradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity * 0.6})`);
            foamGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
            ctx.fillStyle = foamGradient;
            ctx.beginPath();
            ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }

    // Create all elements
    const bubbles = [];
    for (let i = 0; i < 80; i++) {
      bubbles.push(new Bubble());
    }

    const lightRays = [];
    for (let i = 0; i < 8; i++) {
      lightRays.push(new LightRay((canvas.width / 8) * i));
    }

    const plankton = [];
    for (let i = 0; i < 150; i++) {
      plankton.push(new Plankton());
    }

    const fish = [];
    for (let i = 0; i < 12; i++) {
      fish.push(new Fish());
    }

    const seaweeds = [];
    for (let i = 0; i < 15; i++) {
      seaweeds.push(new Seaweed(Math.random() * canvas.width));
    }

    const waves = [];
    for (let i = 0; i < 6; i++) {
      waves.push(new Wave(canvas.height * 0.15 * (i + 1), 0.4 - i * 0.06));
    }

    const surfaceWaves = [];
    for (let i = 0; i < 4; i++) {
      surfaceWaves.push(new SurfaceWave(i));
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

      // Create gradient background based on scroll (deeper ocean effect)
      const depth = Math.min(scrollY / 1000, 1);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      // Colori oceano profondo più scuri: dal blu medio al nero degli abissi
      gradient.addColorStop(0, `rgba(25, 85, 130, ${0.7 - depth * 0.1})`); // Blu medio scuro
      gradient.addColorStop(0.3, `rgba(10, 60, 100, ${0.8 + depth * 0.1})`); // Blu scuro
      gradient.addColorStop(0.6, `rgba(5, 35, 70, ${0.85 + depth * 0.1})`); // Blu molto scuro
      gradient.addColorStop(1, `rgba(2, 15, 35, ${0.9 + depth * 0.1})`); // Quasi nero
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw light rays
      lightRays.forEach((ray) => {
        ray.update();
        ray.draw();
      });

      // Draw waves
      waves.forEach((wave) => {
        wave.update();
        wave.draw();
      });

      // Draw seaweed
      seaweeds.forEach((seaweed) => {
        seaweed.update();
        seaweed.draw();
      });

      // Draw fish
      fish.forEach((f) => {
        f.update();
        f.draw();
      });

      // Draw plankton
      plankton.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw bubbles
      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      // Draw surface waves
      surfaceWaves.forEach((wave) => {
        wave.update();
        wave.draw();
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