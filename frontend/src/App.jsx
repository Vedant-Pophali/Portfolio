import React from 'react';
import { Canvas } from '@react-three/fiber';

import Background3D from './components/canvas/Background3D';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function App() {
    return (
        <div className="w-full h-screen bg-neutral-950 relative overflow-hidden font-sans">

            {/* 3D Canvas Background (Fixed position) */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                    <Background3D />
                </Canvas>
            </div>

            {/* 
        HTML UI Overlay (Scrollable Container) 
        The z-10 puts it above the canvas. 
        overflow-y-auto enables scrolling.
      */}
            <div className="absolute inset-0 z-10 overflow-y-auto scroll-smooth">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />

                {/* Footer */}
                <footer className="py-8 text-center bg-black/80 backdrop-blur-lg border-t border-white/10 mt-20">
                    <p className="text-neutral-500 text-sm">
                        &copy; {new Date().getFullYear()} Vedant Pophali. Handcrafted with React & Three.js.
                    </p>
                </footer>
            </div>

        </div>
    );
}

export default App;
