"use client"
import React from 'react'
import { useRef, useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';


const Page = () => {
    const form = useRef()
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }


    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true);

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                alert("Message sent!")
                setLoading(false)
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });

            }, (error) => {
                alert("Failed to send")
                setLoading(false)
            })
    }

    return (
        <>
            <div className=' max-w-[80vw] mx-auto md:flex md:justify-around  md:mt-28'>
                <div className=''>
                    
                    <div className='text-[30px] mt-10 font-bold  md:text-[60px] select-none  ' >
                        Contact
                    </div>
                    {/* <div className='text-2xl'>
                Email
            </div> */}
                    <div className='flex gap-5 items-center my-4'>
                        <a href={"mailto:shyamkrbaruahgi@gmail.com"}><TfiEmail style={{ fontSize: '35px' }} className='w-[25px] md:w-[35px]' /></a>
                        <div>shyamkrbaruahgi@gmail.com</div>
                    </div>
                    <div className='flex gap-5 items-center my-4'>
                        <a href={"https://www.linkedin.com/in/shyamkrbaruah"} target="_blank"><FaLinkedin style={{ fontSize: '35px' }} className='w-[25px] md:w-[35px]'  /></a>
                        <a href={"https://www.linkedin.com/in/shyamkrbaruah"}>LinkedIn</a>
                    </div>
                </div>

                <div className="directmsg border-2 border-gray-900 p-8 bg-gray-900  rounded-xl md:rounded-2xl transition-all duration-1000  hover:shadow-xl hover:shadow-blue-400/100 hover:border-gray-600">
                    <div className='text-[25px] md:text-[30px] font-bold mb-3'>Send message</div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4  mx-auto w-[250px] md:w-[500px]'>
                        <div className='flex flex-col gap-2 w-[250px] md:w-[500px] mx-auto'>
                            <label htmlFor="name">Enter your name</label>
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className='p-2 border rounded' required />
                        </div>
                        <div className='flex flex-col gap-2 w-[250px] md:w-[500px] mx-auto'>
                            <label htmlFor="email">Enter your email</label>
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className='p-2 border rounded' required />
                        </div>
                        <div className='flex flex-col gap-2 w-[250px] md:w-[500px] mx-auto'>
                            <label htmlFor="message">Write the message</label>
                            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className='p-2 border rounded' required></textarea>
                        </div>
                        <button type="submit" disabled={loading} className=' text-white py-2 rounded bg-gradient-to-br from-blue-800 to-blue-900 cursor-pointer hover:from-blue-950 hover:to-blue-950 w-[250px] md:w-[500px]'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Page