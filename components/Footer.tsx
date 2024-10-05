'use client'
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className='pr-0 pl-0 md:pt-[20vh] bg-gray-900' id="projects">
            <div className="flex flex-col  px-12 gap-20">
                <div className="text-left flex flex-col relative gap-8 w-full">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Get in Touch 
                    </motion.h1>
                </div>
            </div>
        </div >
    )
}


export default Contact;