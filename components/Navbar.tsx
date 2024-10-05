import React from 'react';
import { PortfolioMenu } from '@/components/PortfolioMenu';

const Navbar = () => {
  return (
    <nav className="sticky px-5 top-0 mx-auto w-[100%] flex justify-between items-center h-[8vh] z-10 bg-[#1b2335]">
      <div>
        <PortfolioMenu />
        <a href="#" className="text-green-500 text-lg font-bold">dev.coincooker</a>
      </div>

      <a href='/MarkBartonResume.pdf' target='_blank' className="bg-blue-600 text-white px-4 py-2 rounded-md">Resume</a>
    </nav>
  );
};

export default Navbar;