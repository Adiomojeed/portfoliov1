import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const Particles = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; radius: number }>({
    x: 0,
    y: 0,
    radius: 150,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.08), 100);

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: getRandomColor(),
        });
      }
      particlesRef.current = particles;
    };

    const getRandomColor = (): string => {
      const colors = [
        "rgba(97, 218, 251, 0.7)", // React blue
        "rgba(128, 90, 213, 0.7)", // Purple
        "rgba(226, 232, 240, 0.4)", // Light gray
        "rgba(99, 179, 237, 0.6)", // Light blue
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Bounce off walls
        if (p.x > canvas.width || p.x < 0) {
          p.speedX *= -1;
        }
        if (p.y > canvas.height || p.y < 0) {
          p.speedY *= -1;
        }

        // Mouse interaction
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx);
          const force =
            (mouseRef.current.radius - distance) / mouseRef.current.radius;

          p.x += Math.cos(angle) * force * 2;
          p.y += Math.sin(angle) * force * 2;
        }

        // Connect particles that are close
        connectParticles(p, particles);
      }
    };

    const connectParticles = (p1: Particle, particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i];
        const distance = Math.sqrt(
          (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)
        );

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(120, 120, 240, ${
            0.1 * (1 - distance / 150)
          })`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default Particles;