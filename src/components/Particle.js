import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 150,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.5,
          },
          move: {
            enable: true,
            direction: "bottom",
            speed: 0.7, // Adjusted speed
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 2, // More particles on click
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
