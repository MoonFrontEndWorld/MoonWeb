import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full  md:h-screen p-2 flex py-5">
      <div className="max-w-[1240px] mx-auto flex md:grid grid-cols-3 gap-8">
        <div className="col-span-2 flex flex-col justify-center ">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          {/* <p className="py-2 text-gray-600">I am not a normal developer</p> */}
          <p className="py-2 text-gray-600">
            I am a quick learner with an open mind to new things.I have a strong
            understanding of HTML, CSS, and JavaScript, and i can apply these
            skills to create responsive and visually appealing web designs.
            Additionally, i have a keen eye for design and can work
            collaboratively with designers to turn wireframes and mockups into
            functional websites or applications. I also stay up-to-date with the
            latest trends, technologies, and best practices to deliver
            high-quality work. What sets me apart from others is my ability to
            balance technical proficiency and creative thinking to create
            engaging and user-friendly web experiences.
          </p>
          <p className="py-2 text-gray-600">
            I excel at texting the front-end code and maintaining relevant files
            and records and available to start work immediately. Please do not
            hesitate to contact me if you need any additional information on my
            qualifications. Thanks for your time and consideration and I am
            looking forward to hearing from you soon.
          </p>
          {/* <p className="py-2 text-gray-600 underline cursor-pointer">
            check out some of my latest projects
          </p> */}
        </div>
        <div className="w-full m-auto h-auto shadow-xl shadow-gray-400 flex  rounded-xl justify-center p-4 hover:scale-105 ease-in duration-300">
          <img src="/profilePic.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
