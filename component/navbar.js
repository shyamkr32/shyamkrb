"use client"
import React from 'react'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { GoHome } from "react-icons/go";
import { MdOutlineContactSupport } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const sidebarRef = useRef();

  const togglebar = () => {
    setSidebar(!sidebar)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false)
      }
    }

    if (sidebar) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sidebar])




  return (
    <>
      <div className='hidden  md:flex flex-row justify-between items-center font max-w-[80vw] mx-auto border-[1px] border-gray-700 m-4 px-6 py-3 rounded-4xl  sticky top-0 z-50 bg-black/80 backdrop-blur-md hover:shadow-md hover:shadow-blue-700/50 hover:border-gray-600 transition-all duration-300 '>
        <Link href={"/"}><span className='text-3xl  text-gray-400 '>Shyam</span></Link>
        <ul className='flex gap-8'>
          <Link href={"/"}><li>Home</li></Link>
          <Link href={"/contact"}><li>Contact</li></Link>
          <Link href={"/project"}><li>Project</li></Link>
          <Link href={"/education"}><li>Education</li></Link>
        </ul>
      </div>

      {/* This is for the 3 dot button */}
      <div className='mobile md:hidden'>

        {
          !sidebar && <div onClick={togglebar} >
            <HiBars3 className='m-4 text-3xl' />
          </div>
        }

        {
          sidebar && (
            <div className='fixed inset-0 z-40 '>
              {/* Backdrop */}
              <div className='absolute inset-0 bg-black/50'></div>

              <div ref={sidebarRef} className={`fixed top-0 left-0  w-2/3 h-screen  p-8 bg-black text-white transform transition-transform ease-in-out duration-1000  z-40 `}>
                <div className='flex items-center gap-2 pb-6'>
                  <img className='w-7 rounded-full border' src="myprofile1.jpg" alt="" />
                  <div className='text-2xl select-none'>Shyam</div>
                </div>
                <ul className='flex flex-col gap-3'>
                  <Link href={"/"} onClick={togglebar} className='w-fit flex items-center gap-3'><GoHome className='text-xl' /><li className='text-xl  '>Home</li></Link>
                  <Link href={"/contact"} onClick={togglebar} className='w-fit flex items-center gap-3'><MdOutlineContactSupport className='text-xl' /><li className='text-xl'>Contact</li></Link>
                  <Link href={"/project"} onClick={togglebar} className='w-fit flex items-center gap-3'><GoProject className='text-xl' /><li className='text-xl'>Project</li></Link>
                  <Link href={"/education"} onClick={togglebar} className='w-fit flex items-center gap-3'><MdCastForEducation className='text-xl' /><li className='text-xl'>Education</li></Link>
                </ul>
              </div>
            </div>)
        }
      </div>

    </>
  )
}

export default Navbar