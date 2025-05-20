import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Environment, ContactShadows, Html, RoundedBox, Box } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';

// 3D Phone Model Component
function PhoneModel({ scrollY, ...props }) {
  const group = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);
  const [screen, setScreen] = useState(0);
  
  // Screen content components with more visible and vibrant designs
  const screens = [
    <div key="screen1" className="w-full h-full bg-gradient-to-br from-[#3D90B5] to-[#1F50C9] p-3 text-white overflow-hidden">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center text-[8px] text-primary font-bold">V</div>
          <span className="text-sm font-bold ml-1">Veltron</span>
        </div>
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded-full bg-white/30"></div>
          <div className="h-3 w-3 rounded-full bg-white/30"></div>
        </div>
      </div>
      
      {/* Hero banner */}
      <div className="h-1/4 w-full rounded-lg bg-gradient-to-r from-[#4263EB] to-[#6B24C9] mb-3 flex items-center justify-center overflow-hidden relative">
        <span className="text-sm font-bold z-10">Mobile Solutions</span>
        <div className="absolute right-2 bottom-1 w-8 h-8 opacity-50">
          <div className="w-full h-full rounded-full bg-white/20"></div>
        </div>
      </div>
      
      {/* Cards */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="h-14 rounded-lg bg-white/20 p-2 flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-white/40 mb-1"></div>
          <span className="text-[10px] font-medium">iOS Apps</span>
        </div>
        <div className="h-14 rounded-lg bg-white/20 p-2 flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-white/40 mb-1"></div>
          <span className="text-[10px] font-medium">Android Apps</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="h-12 w-full rounded-lg bg-white/15 mb-2 p-1">
        <div className="h-2 w-3/4 bg-white/30 rounded-sm mb-1"></div>
        <div className="h-2 w-1/2 bg-white/30 rounded-sm mb-1"></div>
        <div className="h-2 w-2/3 bg-white/30 rounded-sm"></div>
      </div>
      
      {/* Button */}
      <div className="h-8 w-full rounded-full bg-white/25 flex items-center justify-center">
        <span className="text-[10px] font-bold">Get Started</span>
      </div>
    </div>,
    
    <div key="screen2" className="w-full h-full bg-gradient-to-br from-[#4263EB] to-[#2E1CA0] p-3 text-white">
      <div className="flex items-center mb-4">
        <div className="h-6 w-6 rounded-full bg-white/20 mr-2"></div>
        <div>
          <div className="h-2 w-20 bg-white/40 rounded-sm mb-1"></div>
          <div className="h-2 w-12 bg-white/20 rounded-sm"></div>
        </div>
      </div>
      
      <div className="space-y-3">
        {/* Chat bubbles */}
        <div className="flex justify-end">
          <div className="bg-primary/70 rounded-2xl rounded-tr-none p-2 max-w-[70%]">
            <div className="h-2 w-20 bg-white/40 rounded-sm mb-1"></div>
            <div className="h-2 w-24 bg-white/40 rounded-sm"></div>
          </div>
        </div>
        
        <div className="flex justify-start">
          <div className="bg-white/20 rounded-2xl rounded-tl-none p-2 max-w-[70%]">
            <div className="h-2 w-28 bg-white/40 rounded-sm mb-1"></div>
            <div className="h-2 w-16 bg-white/40 rounded-sm"></div>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-primary/70 rounded-2xl rounded-tr-none p-2 max-w-[70%]">
            <div className="h-2 w-12 bg-white/40 rounded-sm"></div>
          </div>
        </div>
      </div>
      
      {/* Input field */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="h-8 rounded-full bg-white/15 flex items-center px-3">
          <div className="h-2 w-20 bg-white/20 rounded-sm"></div>
          <div className="ml-auto h-4 w-4 rounded-full bg-primary/50"></div>
        </div>
      </div>
    </div>,
    
    <div key="screen3" className="w-full h-full bg-gradient-to-b from-[#5E3EB5] to-[#6B24C9] p-3 text-white">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold">My Apps</span>
        <div className="h-4 w-4 rounded-full bg-white/20"></div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-4">
        {/* App icons */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-square rounded-2xl p-1 flex flex-col items-center justify-center" 
               style={{ background: `rgba(255,255,255,${0.1 + (i * 0.03)})` }}>
            <div className="w-2/3 h-2/3 rounded-xl mb-1" 
                 style={{ background: `rgba(255,255,255,${0.2 + (i * 0.05)})` }}></div>
            <div className="h-1.5 w-3/4 rounded-sm bg-white/30"></div>
          </div>
        ))}
      </div>
      
      {/* Recently used section */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[8px] font-medium">Recently Used</span>
          <span className="text-[8px] opacity-70">See All</span>
        </div>
        
        <div className="h-16 w-full rounded-xl bg-white/10 p-2 flex items-center">
          <div className="h-12 w-12 rounded-xl bg-primary/40 mr-3 flex items-center justify-center">
            <div className="h-6 w-6 rounded-lg bg-white/20"></div>
          </div>
          <div>
            <div className="h-2 w-16 bg-white/40 rounded-sm mb-1"></div>
            <div className="h-2 w-10 bg-white/20 rounded-sm mb-1"></div>
            <div className="h-2 w-20 bg-white/10 rounded-sm"></div>
          </div>
          <div className="h-6 w-6 rounded-full bg-white/10 ml-auto"></div>
        </div>
      </div>
    </div>
  ];

  // Screen transition effect with longer display time
  useEffect(() => {
    const intervalId = setInterval(() => {
      setScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    
    return () => clearInterval(intervalId);
  }, [screens.length]);

  // Interactive animation based on scroll
  useFrame(() => {
    if (group.current) {
      // Animate rotation based on scroll
      gsap.to(group.current.rotation, {
        y: scrollY.current / 1000,
        duration: 0.8,
        ease: "power2.out"
      });
      
      // Subtle breathing animation
      const time = Date.now() * 0.001;
      group.current.position.y = Math.sin(time) * 0.05;
    }
    
    if (screenRef.current) {
      // Add subtle screen glow animation
      const time = Date.now() * 0.001;
      const intensity = 0.5 + Math.sin(time) * 0.1;
      
      if (screenRef.current.material) {
        (screenRef.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = intensity;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Phone body */}
      <RoundedBox args={[2.2, 4.5, 0.3]} radius={0.1} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
      </RoundedBox>
      
      {/* Phone screen */}
      <RoundedBox ref={screenRef} args={[2.0, 4.2, 0.02]} radius={0.08} position={[0, 0, 0.16]} smoothness={4}>
        <meshStandardMaterial 
          color="#000033"
          emissive="#4B88A2"
          emissiveIntensity={1.5}
          metalness={0.1}
          roughness={0.2}
        />
        
        {/* Screen content as HTML */}
        <Html
          transform
          position={[0, 0, 0.03]}
          rotation={[0, 0, 0]}
          scale={0.65}
          className="pointer-events-none"
          occlude={false}
          zIndexRange={[0, 100]}
          distanceFactor={1}
        >
          <div className="w-[230px] h-[460px] overflow-hidden rounded-lg">
            {screens[screen]}
          </div>
        </Html>
      </RoundedBox>
      
      {/* Camera bump */}
      <mesh position={[-0.8, 2, 0.05]} castShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.01, 32]} rotation={[Math.PI/2, 0, 0]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      
      {/* Home button / Action button */}
      <mesh position={[1, 0, -0.05]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.15, 0.5, 8, 16]} />
        <meshStandardMaterial color="#333" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Logo box instead of text to avoid font issues */}
      <Box position={[0, -2.3, 0.3]} args={[1.5, 0.4, 0.1]}>
        <meshStandardMaterial color="#4B88A2" />
      </Box>
    </group>
  );
}

// The main 3D Phone Mockup component
export default function PhoneMockup() {
  const scrollY = useRef<number>(0);
  
  // Track scroll position for animation
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="h-[500px] w-full">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5.5], fov: 40 }} gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={2} />
        <spotLight intensity={2} angle={0.3} penumbra={1} position={[5, 5, 10]} castShadow />
        <pointLight position={[-5, 0, 5]} intensity={1} color="#4B88A2" />
        <pointLight position={[0, 0, 10]} intensity={1.5} color="#ffffff" />
        
        <PresentationControls
          global
          zoom={0.5}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 6, Math.PI / 3]}
          azimuth={[-Math.PI / 6, Math.PI / 6]}
        >
          <PhoneModel scrollY={scrollY} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.75} />
        </PresentationControls>
        
        <ContactShadows position={[0, -1.4, 0]} opacity={0.75} scale={5} blur={2.5} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
