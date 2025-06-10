import React from 'react'
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className=' w-[100vw] text-gray-400 mb-3'>
    <div className=' flex gap-2 items-center justify-center text-center '>
      <LuCopyright />
      <span className=''> 2025 | All right reserved</span>
    </div>
    </div>
  )
}

export default Footer