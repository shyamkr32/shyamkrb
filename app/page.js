import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
<div className="min-h-screen">
      <div className="introductin w-[80vw] my-20 flex flex-col items-center gap-10 mx-auto
      md:flex md:justify-between md:w-[65vw] md:my-52  ">
        <div>
          <div className="text-[20px]  md:text-[45px]">
            Hi,
          </div>
          <div className="text-[20px]  md:text-[45px]">
            I am
          </div>
          <div className="text-[36px] font-bold md:text-[70px] ">
            Shyam Kr. Baruah
          </div>
          <div className="text-[26px] md:text-[50px]">
            a WEB DEVELOPER
          </div>
        </div>
        <img className="w-[180px] rounded-full md:w-[280px]" src="/nodp.jpg" alt=" profile photo" />
      </div>


      {/* about me  */}

      <div className="about w-[80vw] mx-auto md:w-[65vw]  md:my-52">
        <div className="text-[26px] font-bold py-3  md:text-[60px] ">About me</div>
        <p className="indent-5  md:text-2xl">
          I am a Computer Science and Engineering Student at Tezpur University , passionate about building innovative digital solution with a strong foundation in programming and web technologies. I focus on web development using modern technologies like HTML, CSS,  Javascript, Tailwind CSS, React.Js, Next.Js. Along side web development, I also have a solid foundation in programming with C and Java.I am always eager to learn new technologies and take on challenging project that push my skills further.
        </p>
      </div>

      {/* skill section */}
      <div className="skill w-[80vw] mt-14 mx-auto md:w-[65vw] ">
        <div className="text-[26px] font-bold py-3  md:text-[60px]">
          Tech stacks
        </div>
        <div className="flex justify-around">
          <ul className="text-md  flex flex-col gap-3 md:text-3xl  md:gap-6">
            <li className="flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/html.png" alt="" />
              HTML
            </li>
            <li className="flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/css.jpg" alt="" />
              CSS
            </li>
            <li className="flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/js.png" alt="" />
              Javascript
            </li>
            <li className="flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/react.jpg" alt="" />
              ReactJs
            </li>

          </ul>

          <ul className="text-md  flex flex-col gap-3 md:text-3xl  md:gap-6">
            <li className="flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/next.svg" alt="" />
              Next Js
            </li>
            <li className=" flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/tailwind.png" alt="" />
              Tailwind CSS
            </li>
            <li className=" flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/java.png" alt="" />
              Java
            </li>
            <li className=" flex gap-6 md:gap-10">
              <img className="w-[25px] md:w-[30px]" src="/c.png" alt="" />
              C
            </li>

          </ul>

        </div>
      </div>

      <div className="contact flex justify-center gap-6 mt-20 mb-4   md:mt-28 md:db-12 cursor-pointer">
        <a href={"mailto:shyamkrbaruahgi@gmail.com"}><TfiEmail style={{ fontSize: '35px' }} className="w-[23px] md:w-[35px]" /></a>
        <MdOutlineCall style={{ fontSize: '35px' }} className="w-[23px] md:w-[35px]" />
        <a href={"https://www.linkedin.com/in/shyamkrbaruah"} target="_blank"><FaLinkedin style={{ fontSize: '35px' }} className="w-[23px] md:w-[35px]" /></a>
        <a href="https://github.com/shyamkr32" target="_blank"><FaGithub style={{ fontSize: '35px' }} className="w-[23px] md:w-[35px]" /></a>
      </div>
      </div>
    </>
  );
}
