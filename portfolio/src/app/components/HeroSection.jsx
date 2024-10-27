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
        <section class="lg:py-16">
            <div class="flex flex-col grid grid-cols-1 sm:grid-cols-12">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    class="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 class="text-black mb-4 text-6xl sm:text-4xl lg:text-4xl lg:leading-normal font-extrabold">  
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
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

                <div class="rounded-full border w-[230px] h-[230px] lg:w-[350px] lg:self-end lg:h-[350px] relative">
                    <Image 
                        src={profile}
                        alt="hero image"
                        class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={240}
                        height={240}
                    />
                </div>
            </div>
            <button 
                onClick={handleDownload}
                class="px-6 py-3 w-full sm:w-fit rounded-full bg-white hover:bg-[#CACAEC] text-black border mt-3"
            >
                Download CV
            </button>
               
        </section>
    );
};

export default HeroSection;
