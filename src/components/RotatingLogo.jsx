import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader, DoubleSide, MathUtils } from "three";

const RotatingLogo = ({ textureUrl, position, link }) => {
    const groupRef = useRef();
    const texture = useLoader(TextureLoader, textureUrl);
    const [hovered, setHovered] = useState(false);
    const targetRotation = useRef({ x: 0, y: 0 });

    // State for responsive size
    const [size, setSize] = useState(5);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 640) {
                setSize(1.5); 
            } else if (window.innerWidth < 1024) {
                setSize(1.5); 
            } else {
                setSize(2); 
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, 0.1);
            groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, 0.1);
        }
    });

    return (
        <group
            ref={groupRef}
            position={position}
            scale={hovered ? [size * 1.05, size * 1.05, size * 1.05] : [size, size, size]}
            onClick={() => {
                if (link) {
                    window.open(link, "_blank"); 
                }
            }}
            onPointerOver={(e) => {
                setHovered(true);
                e.stopPropagation();
            }}
            onPointerOut={() => {
                setHovered(false);
                targetRotation.current = { x: 0, y: 0 }; 
            }}
            onPointerMove={(e) => {
                if (hovered) {
                    
                    targetRotation.current.x = MathUtils.clamp(targetRotation.current.x - e.movementY * 0.02, -0.2, 0.2);
                    targetRotation.current.y = MathUtils.clamp(targetRotation.current.y + e.movementX * 0.02, -0.2, 0.2);
                }
            }}
        >
            
            <mesh position={[0, 0, -0.1]}>
                <circleGeometry args={[size * 1, 60]} />
                <meshStandardMaterial color="#a855f7" side={DoubleSide} />
            </mesh>

    
            <mesh>
                <planeGeometry args={[size, size]} />
                <meshStandardMaterial
                    map={texture}
                    transparent
                    emissiveIntensity={hovered ? 0.5 : 0}
                    side={DoubleSide}
                />
            </mesh>
        </group>
    );
};

export default RotatingLogo;
