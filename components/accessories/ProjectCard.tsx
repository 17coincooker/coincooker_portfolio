
import { Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ title, description, image, link }: { title: string, description: string, image: string; link: string }) => {
  return (
    <div className="relative h-full w-full">
      <img
        src={image}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center">
        <div className="w-3/4 text-center md:w-2/4">

        <div className="flex justify-center gap-2">
            <motion.a
                href={link}
                target="_blank"
                className="text-[30px] text-[red] relative inline-block"
            >
                Live site
                <motion.span
                    className="absolute left-0 bottom-[-5px] h-[2px] bg-red-500 w-full"
                    initial={{ scaleX: 0 }} // Start with scale 0
                    animate={{ scaleX: [0, 1, 0] }} // Animate to full width and back
                    transition={{ 
                        duration: 1, // Duration for one cycle
                        repeat: Infinity, // Repeat indefinitely
                        ease: "easeInOut", // Easing function
                    }} 
                />
            </motion.a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;