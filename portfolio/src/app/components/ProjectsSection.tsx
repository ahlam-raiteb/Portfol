"use client"
import React,  {useState, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag"
import {animate, motion, useInView} from "framer-motion";


const ProjectsData = [
    {
        id:1,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"images/1.jpeg",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"/image/projects/1.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"/image/projects/1.png",
        tag:["All", "Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
]
const ProjectsSection = () =>{

    const [tag, setTag]= useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const handleTagChange = (newTag:any) => {
        setTag(newTag);
    };

    const filteredProjects = ProjectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial :{y:50 ,opacity: 0},
        animate: {y:0, opacity: 1},

    };
    return(
        <section >
            <h2 className="text-white text-center text-4xl font-bold mt-4 ">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
                />
                <ProjectTag 
                onClick={handleTagChange}
                name="Web"
                isSelected={tag === "Web"}
                />
                <ProjectTag 
                onClick={handleTagChange}
                name="C++"
                isSelected={tag === "C++"}
                />
               
            </div>
            <ul ref ={ref} className="grip md:grip-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li 
                        key ={index}
                        variants={cardVariants} 
                        initial="initial" 
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration:0.3, delay: index * 0.4}}
                        >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image} 
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}

                            />
                        </motion.li>
                ))}
            </ul>
           
        </section>
    )
}

export default ProjectsSection