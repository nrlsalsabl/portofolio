import React from "react"

import { PROJECTS } from "../utils/data";

const Projects =() => {
    return (
       <section className="max-w-screen-xl mt-8 px-6 mx-auto pb-20" id="project">
        
        <div className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 md:p-8">
            <h5 className="text-xl font-medium mb-5">Projects</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PROJECTS.map((project) => (
                <ProjectCard
                key={project.id}
                icon={project.icon}
                icon2={project.icon2}
                icon3={project.icon3}
                iconProps={project.iconProps}
                title={project.title}
                comment={project.comment} 
                url={project.url} 
                image={project.image} />
            ))}
            </div>
        </div>
       </section>
    );
};

const ProjectCard = ({ icon: Icon, icon2: Icon2, icon3: Icon3, iconProps, title, comment, url, image }) => {
    return (
    <div className="bg-slate-900 rounded border border-blue-900 p-4">
        
        <div className="flex items-center justify-center mb-4">
                <img className="project-img" src={image} alt={title} />
            </div>

        <div className="mb-5">
            <p className="text-base mb-3">{title}</p>

            <div className="flex space-x-2">
                    {Icon && <Icon className="text-primary text-2xl" {...iconProps} />}
                    {Icon2 && <Icon2 className="text-primary text-2xl" {...iconProps} />}
                    {Icon3 && <Icon3 className="text-primary text-2xl" {...iconProps} />}
            </div>
        </div>

        <p className="text-xs font-light leading-5 opacity-80">{comment}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="w-full text-sky-200 text-[11px] md:text-xs font-medium bg-blue-950 rounded border border-blue-700/50 border-dashed justify-center items-center px-20 mt-4 py-4">
            View Live Web
            </button></a>
    </div>
    );
};

export default Projects;