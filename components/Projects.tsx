'use client'
import { Carousel } from "@material-tailwind/react";
import ProjectCard from "@/components/accessories/ProjectCard";
import {projects} from "@/app/lib/projects"



export default function Projects() {
    
    return (
        <div className='pr-0 pl-0 pt-[10vh] md:pt-[20vh] bg-gray-900' id="projects" >
            <div className="px-4 md:px-12 flex flex-col gap-9">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{"Projects I've Built"}</h1>
                <Carousel transition={{ duration: 1 }} className="rounded-xl w-full 30px md:h-[40vh] lg:h-[60vh] " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {
                        projects.map((project, index) => <ProjectCard key={index} title={project.title} description={project.description} image={project.image} link={project.link} /> )
                    }
                </Carousel>
            </div>
        </div>
    );
}