"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";

export default function AxiParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="axi-particles"
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: ["#00ffff", "#00aaff", "#88ffff"],
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
      style={{
        position: "fixed",
        zIndex: -1,
        top: 0,
      }}
    />
  );
}
