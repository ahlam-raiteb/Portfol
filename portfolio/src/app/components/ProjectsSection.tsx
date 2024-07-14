import React from "react";
import ProjectCard from "./ProjectCard";


const ProjectsData = [
    {
        id:1,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"images/profil.png",
        tag:["All", "Web"],
    },
    {
        id:2,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"/image/projects/1.png",
        tag:["All", "Web"],
    },
    {
        id:3,
        title:"React Portfolio Website",
        description:"project 1 description",
        image:"/image/projects/1.png",
        tag:["All", "Web"],
    },
]
const ProjectsSection = () =>{
    return(
        <>
            <h2>
                My Projects
                <div>
                    {ProjectsData.map((project) => (<ProjectCard key={project.id} 
                                    title={project.title} description={project.description} 
                                    imgUrl={project.image} />
                    ))}
                </div>
            </h2>
        </>
    )
}

export default ProjectsSection