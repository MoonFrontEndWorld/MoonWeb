import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav((prv) => !prv);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl bg-[#ecf0f3] z-[100]'
          : 'fixed w-full h-20 bg-[#ecf0f3] z-[100]'
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/assets/Navlogo.png" alt="/" width="50" height="20" />
        </Link>
        <div className="overflow-hidden">
          <ul className="hidden md:flex ">
            <li className="ml-10 text-sm uppercase hover:scale-165">
              {' '}
              <Link href="/">Home </Link>
            </li>

            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:scale-115 hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:scale-115 hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#project">
              <li className="ml-10 text-sm uppercase hover:scale-115 hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:scale-115 hover: border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden ">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/assets/Navlogo.png"
                  alt="/"
                  width="60"
                  height="35"
                />
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&aposs build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>{' '}
              <Link href="/#skills">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>{' '}
              <Link href="/#project">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>{' '}
              <Link href="/#contact">
                <li
                  onClick={() => {
                    setNav(false);
                  }}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-35">
              <p className="uppercase py-8 tracking-widest text-[#5651e5]">
                Let&aposs Connect
              </p>
              <div className="flex items-center justify-between my-10 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;