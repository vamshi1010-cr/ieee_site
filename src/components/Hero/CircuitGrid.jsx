import React, { useEffect, useRef } from "react";
import "./CircuitGrid.css";

/* ============================================================
   CircuitGrid — connected dot network background
   Scoped to the Hero section only (not site-wide)
   Dots drift slowly, connect when close, and glow/connect to cursor
   ============================================================ */
export default function CircuitGrid() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let dots = [];

    const LINE_COLOR  = "0, 51, 101";   // IEEE blue
    const GLOW_COLOR  = "0, 119, 190";   // brighter blue for cursor glow
    const CONNECT_DIST = 110;            // dot-to-dot connection distance
    const MOUSE_DIST   = 160;            // cursor glow radius

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildDots();
    }

    function buildDots() {
      const area = canvas.width * canvas.height;
      const count = Math.max(30, Math.min(70, Math.floor(area / 16000)));
      dots = Array.from({ length: count }, () => ({
        x:  Math.random() * canvas.width,
        y:  Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      /* Move dots, bounce off edges */
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      /* Dot-to-dot connections */
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONNECT_DIST) {
            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${0.18 * (1 - dist / CONNECT_DIST)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }

        /* Dot-to-cursor connection */
        const dm = Math.hypot(dots[i].x - mx, dots[i].y - my);
        if (dm < MOUSE_DIST) {
          const strength = 1 - dm / MOUSE_DIST;
          ctx.strokeStyle = `rgba(${GLOW_COLOR}, ${0.55 * strength})`;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      /* Dots themselves */
      dots.forEach((d) => {
        const dm = Math.hypot(d.x - mx, d.y - my);
        const glow = Math.max(0, 1 - dm / MOUSE_DIST);
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2 + glow * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GLOW_COLOR}, ${0.7 + glow * 0.3})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    render();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="circuitgrid" aria-hidden="true" />;
}
