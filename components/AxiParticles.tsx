"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function AxiParticles() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="axi-particles"
      init={particlesInit}
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