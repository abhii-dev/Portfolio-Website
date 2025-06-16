import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import RotatingLogo from "./RotatingLogo";
import htmllogo from "../assets/html.png";
import csslogo from "../assets/css.png";
import jslogo from "../assets/javascript.png";
import reactlogo from "../assets/react.png";
import expresslogo from "../assets/express.png";
import mongologo from "../assets/mongo.png";
import nodejslogo from "../assets/nodejs.png";
import {motion} from "framer-motion";
import { useInView } from 'react-intersection-observer'

const SkillSection = () => {

    const{ref, inView} =useInView({
        triggerOnce:true,
        threshold:0.2
    })

    const logos = [
        { texture: htmllogo, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { texture: csslogo, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { texture: jslogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { texture: reactlogo, link: "https://react.dev/" },
        { texture: expresslogo, link: "https://expressjs.com/" },
        { texture: mongologo, link: "https://www.mongodb.com/" },
        { texture: nodejslogo, link: "https://nodejs.org/en" },
    ];
    

    const [layout, setLayout] = useState("row");
    const [columns, setColumns] = useState(3);
    const [xOffset, setXOffset] = useState(0);
    const [spacing, setSpacing] = useState(13);

    useEffect(() => {
        const updateLayout = () => {
            if (window.innerWidth < 640) {
                setLayout("grid");
                setColumns(3);
                setSpacing(8);
                setXOffset(4); 
            } else if (window.innerWidth < 1024) {
                setLayout("row");
                setColumns(3);
                setXOffset(1.2);
                setSpacing(10); 
            } else {
                setLayout("row");
                setXOffset(-2);
                setSpacing(13); 
            }
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        return () => window.removeEventListener("resize", updateLayout);
    }, []);

    return (
        <div className="w-full flex flex-col items-center py-10">
            {/* Centered Heading */}
            <motion.h2 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={ inView ? {opacity:1, y:0}  : {}}
            transition={{delay:0.3, duration:0.5}}
            className="text-white text-4xl font-bold underline mb-6 text-center max-sm:text-2xl">
                My Skills
            </motion.h2>

            {/* Canvas for 3D Logos */}
            <div className="w-full flex justify-center">
                <Canvas camera={{ position: [0, 0, 10] }} className="h-[300px] sm:h-[400px]">
                    <ambientLight intensity={0.5} />
                    {logos.map((logo, index) => {
                        let position;
                        if (layout === "row") {
                            // Row layout for larger screens
                            position = [
                                index * spacing - ((logos.length - 1) * spacing) / 2 + xOffset,
                                -1.5, // Shift slightly up
                                0,
                            ];
                        } else {
                            // Grid layout for smaller screens
                            const row = Math.floor(index / columns);
                            const col = index % columns;
                            position = [
                                col * spacing - (columns * spacing) / 2 + xOffset,
                                -row * spacing + 3, // Shift up to reduce bottom space
                                0,
                            ];
                        }
                        return <RotatingLogo key={index} textureUrl={logo.texture} position={position} link={logo.link} />;

                    })}
                </Canvas>
            </div>
        </div>
    );
};

export default SkillSection;
