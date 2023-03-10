import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import propertyImg from '../public/assets/projects/property.jpg';
import CryptoImg from '../public/assets/projects/crypto.jpg';
import ProjectItem from './ProjectItem';
const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="APP"
            backgroundImg={propertyImg}
            projectUrl="https://github.com/MoonFrontEndWorld/FoodOrderApplication/tree/gh-pages"
          />
          {/* <ProjectItem
            title="Crypto App"
            backgroundImg={propertyImg}
            projectUrl="/property"
            technology="React JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
