'use client'
import { skills } from "@/app/lib/skills";
import SkillProgress from "./accessories/SkillProgress";
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <div className='pr-0 pl-0 pt-[10vh] md:pt-[20vh] bg-gray-900' id="skills" >
            <div className="px-4 md:px-12 flex flex-col gap-9">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                >
                    Skills
                </motion.h1>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        skills.map((skill, index) => <SkillProgress key={index} name={skill.name} ability={skill.ability} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;