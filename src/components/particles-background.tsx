"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 w-full h-full"
      init={particlesInit}
      style={{ opacity: 0.6 }} // Reduce opacity to let neon grid show through
      options={{
        autoPlay: true,
        background: {
          color: {
            value: "#000000ff"
          },
          opacity: 1
        },
        backgroundMask: {
          composite: "destination-out",
          cover: {
            opacity: 1,
            color: {
              value: ""
            }
          },
          enable: false
        },
        clear: true,
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          detectsOn: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            resize: {
              delay: 0.5,
              enable: true
            }
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1
              }
            },
            push: {
              default: true,
              quantity: 4
            }
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          move: {
            angle: {
              offset: 0,
              value: 90
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "out"
            },
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              width: 1920,
              height: 1080
            },
            value: 100
          },
          opacity: {
            value: {
              min: 0.1,
              max: 0.5
            },
            animation: {
              enable: true,
              speed: 3,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          size: {
            value: {
              min: 1,
              max: 10
            },
            animation: {
              enable: true,
              speed: 20,
              sync: false
            }
          },
          links: {
            color: {
              value: "#ffffff"
            },
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          }
        }
      }}
    />
  );
}
