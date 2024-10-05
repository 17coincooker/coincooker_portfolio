'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const isVisible = true
  return (
    <div className='pr-0 pl-0 bg-gray-900 px-4 md:px-12' id="home">
      <div className="flex flex-col xl:flex-row gap-9 xl:justify-between xl:items-center pt-[10vh] 2xl:h-[72vh]">
        <div className="text-left flex flex-col relative gap-8 w-full">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Full-stack Developer + <br />
            <span className="text-green-400">BlockChain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 mt-4 text-[20px]"
          >
            As a freelance, web developer, I love offering my clients a concierge-level service. I’m hyper-responsive, deliver quality products and offer rapid turnarounds.
            I offer design and idea that looks good, is user-friendly, and is very convenient.
            Primarily working with technologies like JavaScript, React.js, Next.js, TypeScript and Blockchain.<br /><br />
            As a remote worker, I understand how important timely deliverables and clear communication are to working together remotely.
            I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.<br /><br />
            Beyond learning, I enjoy writing technical articles and creating projects that both inspire and benefit fellow developers.<br /><br />
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border-2 w-[180px] border-green-500 text-green-500 px-4 py-3 rounded-md transition-all hover:border-[#e2e8f0] hover:bg-[#e2e8f0] hover:text-black"
          >
            Open Resume
          </motion.button>
        </div>
      </div>

    </div>
  );
};

export default Hero;