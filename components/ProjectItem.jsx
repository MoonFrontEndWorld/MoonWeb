import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const ProjectItem = ({ title, backgroundImg, projectUrl, technology }) => {
  return (
    <div>
      <div className="relative  flex items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
          className=" blur-sm rounded-xl group-hover:opacity-10 h-100 w-80 "
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-widest text-center ">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{technology}</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
