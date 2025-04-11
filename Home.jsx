import React, { useState, useEffect } from "react";
import "./App.css";

export default function Component() {
  useEffect(() => {
    
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

 
  const handleMouseMove = (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;
    setMousePosition({ x: mouseX, y: mouseY });
  };

 
  const calculateBackgroundPosition = () => {
    const { x, y } = mousePosition;
    const xPercent = (x / window.innerWidth) * 20; 
    const yPercent = (y / window.innerHeight) * 20; 
    return `${xPercent}% ${yPercent}%`;
  };

 
  return (
    <div
    className=" min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden "
    onMouseMove={handleMouseMove} 
  >
     
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('./earth.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: calculateBackgroundPosition(), 
          transition: 'background-position 1s ease-out'
        }}
      />

      <div className="relative z-10 w-full max-w-screen-lg px-4 mx-auto">
        {/* Header */}
        <h1 className="text-center sm:text-base tracking-[0.3em] mb-20 sm:mb-32">
          BPY-CREATION
        </h1>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          <p className="text-center text-sm sm:text-base tracking-[0.2em] opacity-90">
            WEBSITES ARE{" "}
            <span className="text-red-500">UNDER RECONSTRUCTION</span>
          </p>

          <h2 className="text-4xl sm:text-6xl md:text-7xl text-center font-bold tracking-[0.2em] leading-normal">
            COMING SOON
          </h2>

          <div className="w-full max-w-md mx-auto px-4">
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-pink-500 to-purple-500 transition-all duration-1000 ease-out"
                style={{
                  width: `75%`, 
                  animation: "shimmer 2s linear infinite",
                }}
              />
            </div>
            <div className="mt-2 text-center text-sm opacity-90">75%</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -150% center;
          }
          100% {
            background-position: 150% center;
          }
        }
      `}</style>
    </div>
  );
}
