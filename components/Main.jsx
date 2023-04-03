import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1239.9975px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            Codes change the world
          </p>
          <h1 className="py-4 text-gray-700">
            Hi there, I am <span className="text-blue-500">Liang Yue</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            A <span className="text-yellow-500 uppercase">passionate</span>{' '}
            Software Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            As a front-end developer, I have a deep understanding of web
            technologies. I can analyze and solve problems quickly and
            efficiently. I work well with a team and commit to the common goal.
            I am a quick learner with an open mind to new things. I love coding.
            Codes change the world.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/liang-yue-3a4826268/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>

            <a href="https://github.com/MoonFrontEndWorld">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <a href="mailto:liangyuemoon666@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
