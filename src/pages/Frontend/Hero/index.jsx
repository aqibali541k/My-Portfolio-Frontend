import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen  flex items-center justify-center bg-[#1f1f1f] overflow-hidden px-4"
    >
      {/* PARTICLES */}
      {init && (
        <div className="absolute inset-0 w-full h-full">
          <Particles
            id="tsparticles-hero"
            className="w-full h-full"
            options={{
              fullScreen: { enable: false },
              background: { color: "#1f1f1f" },
              fpsLimit: 60,
              particles: {
                number: {
                  value: window.innerWidth < 640 ? 140 : 320,
                  density: { enable: true, area: 800 },
                },
                color: { value: "#ffffff" },
                links: {
                  enable: true,
                  color: "#ffffff",
                  distance: 120,
                  opacity: 1,
                  width: 0.7,
                },
                move: { enable: true, speed: 1 },
                opacity: { value: 1 },
                size: { value: { min: 1, max: 3 } },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-3">
          Hi, I’m <span className="text-green-400">Aqib</span>
        </h1>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className="text-2xl sm:text-4xl text-white">{`{`}</span>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1500,
              "React Engineer",
              1500,
              "MERN Stack Developer",
              1500,
              "JavaScript Expert",
              1500,
              "Problem Solver",
              1500,
              "Creative Designer",
              1500,
            ]}
            speed={40}
            wrapper="span"
            repeat={Infinity}
            className="text-lg sm:text-2xl md:text-3xl font-semibold text-white"
          />

          <span className="text-2xl sm:text-4xl text-white">{`}`}</span>
        </div>
        <div className="mt-10 text-white">
          <p className="text-base sm:text-lg">
            I build bespoke software solutions built upon modern technologies.
            My mission is to enable businesses worldwide both large and small to
            build their products with a cost-efficient, resilient and modern
            technology stack.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
