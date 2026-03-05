import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// Particle System representing stars / data points
function Particles({ count = 2000 }) {
    const mesh = useRef();

    // Generate random positions and colors for particles
    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            // Spread particles out in a sphere
            const r = 40 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            // Pick a random neon color (purple, pink, blue)
            const colorChoice = Math.random();
            if (colorChoice > 0.66) color.set('#a855f7'); // purple
            else if (colorChoice > 0.33) color.set('#ec4899'); // pink
            else color.set('#3b82f6'); // blue

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, [count]);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.y += delta * 0.05;
            mesh.current.rotation.z += delta * 0.02;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.1} vertexColors transparent opacity={0.8} />
        </points>
    );
}

// The Parallax controller that moves the entire group based on mouse position
function ParallaxGroup({ children }) {
    const groupRef = useRef();
    const { viewport } = useThree();

    useFrame(({ mouse }) => {
        if (groupRef.current) {
            // Target positions based on mouse coordinates (-1 to 1)
            const targetX = (mouse.x * viewport.width) / 10;
            const targetY = (mouse.y * viewport.height) / 10;

            // Smoothly interpolate the group's rotation towards the target
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.2, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.2, 0.05);
        }
    });

    return <group ref={groupRef}>{children}</group>;
}

export default function Background3D() {
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />

            {/* Deep Background Stars */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={1} />

            <ParallaxGroup>

                {/* Dynamic Particles Only -> Elegant and Uncluttered */}
                <Particles count={3000} />

            </ParallaxGroup>
        </>
    );
}
