import React from "react";
import {motion } from "framer-motion"


const variants = {
    default: {width: 0 },
    active: {width:"calc(100% - 0.75rem)"},
};

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = active 
            ? 'text-black border-b border-purple-500' 
            : 'text-[#ADB7BE] ';
    return (
        <button onClick={selectTab}>
            <p class={`mr-3 font-semibold hover:text-black ${buttonClasses}`}>
                {children}
            </p>
            <motion.div 
                animate={active ? "active" : "default"}
                variants={variants}
                class="h-1 bg-slate-500 mt-2 mr-3 " 
                >
            </motion.div>
        </button>
    )
}

export default TabButton