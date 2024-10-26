"use client";
import React from "react";
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroSection = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/RaitebAhlam.pdf'; 
        link.download = '/RaitebAhlam.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="lg:py-16">
            <div className="flex flex-col grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-black mb-4 text-6xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">  
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Welcome, to {" "}
                        </span>
                        <TypeAnimation
                            sequence={[
                                `my website!\nI'm a Developer\nand a Designer.`,
                                1000,
                                "",
                            ]}
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </motion.div>

                <div className="rounded-full border w-[230px] h-[230px] lg:w-[350px] lg:self-end lg:h-[350px] relative">
                    <Image 
                        src={profile}
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={240}
                        height={240}
                    />
                </div>
            </div>
            <button 
                onClick={handleDownload}
                className="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-[#CACAEC] text-black border mt-3"
            >
                Download CV
            </button>
               
        </section>
    );
};

export default HeroSection;
