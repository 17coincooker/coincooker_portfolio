
const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-4 pr-0 pl-0 pb-[10vh] pt-[10vh] bg-gray-900 text-center" id="contact">
      <h1 className="text-4xl md:pb-20 lg:pb-24 md:text-5xl font-bold text-white">Get in Touch</h1>
      <p className="w-full md:w-[700px] text-[18px] text-[#c2bad2] px-4">
        {`I'm eager to join a collaborative team where I can contribute my skills and learn from others.
        If you have an exciting project, let's discuss how I can be a valuable asset.
        I'm actively seeking a new opportunity to apply my skills and continue growing!`}
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/17coincooker" target="_blank">
          <img className="p-2 bg-white border rounded-full w-[50px] h-[50px]" src="/github.png" alt="" />
        </a>
        <a href="" className="">
          <img className="p-2 bg-white border rounded-full w-[50px] h-[50px]" src="/discord-svgrepo-com.svg" alt="" />
        </a>
      </div>

      <p className="text-center p-4 pt-[10vh] text-[#c2bad2]">Designed and Coded by Mark Barton. Built with React and  Nextjs, Tailwind.css and Framer Motion, Deployed with Vercel.</p>
    </section >
  );
};

export default Contact;