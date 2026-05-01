"use client";
import { useEffect, useRef } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const orbitNodesRef = useRef([]);

  useEffect(() => {
    const orbitData = [
      { ring: 1, angle: 0 },
      { ring: 1, angle: Math.PI },
      { ring: 2, angle: Math.PI / 4 },
      { ring: 2, angle: Math.PI + Math.PI / 4 },
      { ring: 2, angle: Math.PI / 2 },
      { ring: 2, angle: 3 * Math.PI / 2 }
    ];
    const RADII = { 1: 155, 2: 190 };
    
    let animationFrameId;

    const animOrbits = () => {
      const t = Date.now() / 1000;
      orbitData.forEach((o, i) => {
        const el = orbitNodesRef.current[i];
        if (!el) return;
        const speed = o.ring === 1 ? 0.6 : 0.4;
        const a = o.angle + t * speed * (o.ring === 2 ? -1 : 1);
        const r = RADII[o.ring];
        el.style.transform = `translate(${r * Math.cos(a) - 22}px,${r * Math.sin(a) - 28}px)`;
      });
      animationFrameId = requestAnimationFrame(animOrbits);
    };
    animOrbits();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const nodes = [
    { emoji: "⚛️", name: "React" },
    { emoji: "🟢", name: "Node.js" },
    { emoji: "🍃", name: "MongoDB" },
    { emoji: "🔥", name: "Firebase" },
    { emoji: "🎨", name: "Tailwind" },
    { emoji: "📦", name: "Express" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center px-[5%] relative overflow-hidden flex-col md:flex-row justify-center pt-[100px] md:pt-0 text-center md:text-left">
      <div className="hero-grid-bg absolute inset-0 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(0,212,255,0.12)_0%,transparent_70%)] pointer-events-none animate-pulse-glow"></div>
      
      <div className="flex-1 max-w-[580px] z-[2]">
        <div className="inline-flex items-center gap-2 bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] px-4 py-1.5 rounded-full text-[0.8rem] text-cyan mb-6">
          <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-blink"></span> Available for work
        </div>
        <h1 className="font-syne text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] mb-4 animate-[fadeUp_0.8s_0.2s_forwards] opacity-0">
          <span className="text-white">Hi, I&apos;m<br/></span>
          <span className="bg-gradient-to-br from-cyan via-cyan2 to-pink text-transparent bg-clip-text">Farabi Ahmed</span>
        </h1>
        <p className="text-pink text-[1.1rem] font-semibold mb-4 tracking-[0.5px] animate-[fadeUp_0.8s_0.35s_forwards] opacity-0">✦ MERN Stack Developer</p>
        <p className="text-muted leading-[1.75] max-w-[460px] mb-8 animate-[fadeUp_0.8s_0.5s_forwards] opacity-0 mx-auto md:mx-0">
          Passionate developer crafting modern, scalable web applications with React, Node.js, MongoDB, and Express. I love turning ideas into clean, performant digital experiences.
        </p>
        <div className="flex gap-4 flex-wrap mb-8 animate-[fadeUp_0.8s_0.65s_forwards] opacity-0 justify-center md:justify-start">
          <a href="#projects" className="bg-gradient-to-br from-cyan to-cyan2 text-black px-7 py-[0.7rem] rounded-full font-bold no-underline transition-all duration-300 cursor-none border-none text-[0.95rem] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.35)]">
            View My Work
          </a>
          <a href="Farabi_Ahmed%20CV.pdf" download className="bg-transparent text-text px-7 py-[0.7rem] rounded-full font-semibold no-underline border-[1.5px] border-[rgba(0,212,255,0.3)] transition-all duration-300 cursor-none text-[0.95rem] flex items-center gap-2 hover:border-cyan hover:text-cyan hover:-translate-y-0.5">
            <Download size={15} />
            View Resume
          </a>
        </div>
        <div className="flex gap-3 animate-[fadeUp_0.8s_0.8s_forwards] opacity-0 justify-center md:justify-start">
          {[
            { icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>, url: "https://github.com/farabi-x09" },
            { icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>, url: "https://www.linkedin.com/in/farabi-ahmed13/" },
            { icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>, url: "https://www.facebook.com/farabi76o" },
           
          ].map((social, i) => (
            <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-[42px] h-[42px] border border-border rounded-full flex items-center justify-center text-muted no-underline transition-all duration-300 cursor-none hover:border-cyan hover:text-cyan hover:-translate-y-[3px] hover:bg-[rgba(0,212,255,0.08)]">
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center z-[2] relative mt-16 md:mt-0 md:scale-100 scale-80">
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[310px]">
            <div className="w-full h-full rounded-full border border-dashed border-[rgba(0,212,255,0.15)] animate-spin-slow"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px]">
            <div className="w-full h-full rounded-full border border-dashed border-[rgba(0,212,255,0.15)] animate-spin-slower"></div>
          </div>

          {nodes.map((node, i) => (
            <div key={i} ref={el => orbitNodesRef.current[i] = el} className="absolute top-1/2 left-1/2 flex flex-col items-center gap-1 cursor-none group">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-card2 border border-border flex items-center justify-center text-[1.4rem] transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] group-hover:border-cyan group-hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] group-hover:scale-115">
                {node.emoji}
              </div>
              <span className="text-[0.6rem] text-muted whitespace-nowrap font-medium">{node.name}</span>
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] z-10 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-[rgba(0,212,255,0.3)] shadow-[0_0_60px_rgba(0,212,255,0.2),inset_0_0_60px_rgba(0,212,255,0.05)] animate-photo-float relative">
              <Image 
                src="/farabi.JPG" 
                alt="Farabi Ahmed" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute bg-[rgba(13,31,53,0.9)] border border-[rgba(0,212,255,0.2)] rounded-[10px] px-[0.8rem] py-[0.4rem] text-[0.75rem] font-semibold text-cyan whitespace-nowrap backdrop-blur-[8px] top-[10%] right-[5%] animate-tag-float1 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
            <span className="">⚛</span>
          </div>
          <div className="absolute bg-[rgba(13,31,53,0.9)] border border-[rgba(0,212,255,0.2)] rounded-[10px] px-[0.8rem] py-[0.4rem] text-[0.75rem] font-semibold text-pink whitespace-nowrap backdrop-blur-[8px] bottom-[15%] left-[5%] animate-tag-float2 shadow-[0_0_15px_rgba(255,45,120,0.15)]">
            <span className="mr-1.5">🚀</span> MERN Stack
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
