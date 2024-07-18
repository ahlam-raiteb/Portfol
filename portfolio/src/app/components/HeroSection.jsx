"use client";
import React from "react";
import Image from "next/image";
import profile from "../../../public/images/profile.png";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"



const HeroSection = () =>{
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                    <motion.div 
                        initial = {{opacity: 0, scale:0.5}} 
                        animate={{ opacity: 1, scale: 1}} 
                        transition={{duration: 0.5}} 
                        className="col-span-8 place-self-centre text-center sm:text-left justify-self-start" 
                    >
                        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl  lg:leading-normal font-extrabold">  
                        <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
                            Hello, i am {" "}
                        </span>
                        <TypeAnimation
                                sequence={[
                                `Welcome to my website!\nI'm a Developer\nand a Designer.`,
                                1000,
                                "",
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire Me</button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border mt-3">Download CV</button>
                    </div>
                </motion.div>
               
                <motion.div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full border w-[230px] h-[230px] lg:w-[350px] lg:h-[350px] relative">
                    <Image 
                        src={profile}
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={240}
                        height={240} 
                    />
                    </div>
                </motion.div>
                </div>
        </section>
    );
};

export default HeroSection;