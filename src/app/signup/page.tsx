"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Tv from "../../../public/tv.png";
import { FaHome } from "react-icons/fa";
import Logo from "../../../public/logo.svg";
import Menu from "../../../public/menu.svg";

export default function Home() {
  const [isToggle, setToggle] = useState<boolean>(false);
  const switchToggle = () => setToggle(!isToggle);

  return (
    <>
      <header className="flex justify-between items-center h-20 w-full">
        <div className="flex text-white justify-center items-center ml-8 lg:m-16">
          <Image
            src={Tv}
            alt="Logo"
            width={60}
            height={60}
            className=""
          />
          <span className="ml-3 text-2xl">Logo</span>
        </div>
        <ul className="flex justify-between items-center">
          <button type="button" className="w-16 h-16" onClick={switchToggle}><Image src={Menu} alt="button svg" className="text-white w-8 h-8" /></button>
        </ul>
      </header>  
      <div className={`bg-cyan-400 fixed h-full w-2/3 transition-all duration-700 ease-in-out overflow-auto ${isToggle ? "-left-2/3": "left-0"}`}>
        <ul className="mt-10">
          <li className="relative h-12 flex items-center hover:bg-slate-500">
            <Link href='/home' className='text-lg flex justify-center items-center w-full'>
              <i className="text-white block text-2xl pr-2"><FaHome /></i>
              <span className='text-2xl text-white'>Home</span>
            </Link>
          </li>
          <li className="relative h-12 flex items-center">
            <Link href='/home' className='text-lg flex justify-center items-center w-full'>
              <i className="text-white block text-2xl pr-2"><FaHome /></i>
              <span className='text-2xl text-white'>About</span>
            </Link>
          </li>
          <li className="relative h-12 flex items-center">
            <Link href='/home' className='text-lg flex justify-center items-center w-full'>
              <i className="text-white block text-2xl pr-2"><FaHome /></i>
              <span className='text-2xl text-white'>Contact</span>
            </Link>
          </li>
          <li className="relative h-12 flex items-center">
            <Link href='/home' className='text-lg flex justify-center items-center w-full'>
              <i className="text-white block text-2xl pr-2"><FaHome /></i>
              <span className='text-2xl text-white'>View</span>
            </Link>
          </li>
          <li className="relative h-12 mt-10 flex justify-center items-center">
            <Link href="/signup" className='text-lg flex justify-center items-center w-2/3'>
              <li className="text-white text-lg tracking-wide bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-center  me-2 px-16 py-6">
                Signup
              </li>
          </Link>
          </li>
        </ul>
      </div>
      <main className="bg-cyan-900 h-full w-full">
      </main>
    </>
  );
}
