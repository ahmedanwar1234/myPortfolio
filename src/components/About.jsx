"use client"
import React, { useEffect, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from 'framer-motion';
import {
  AiFillHtml5,
  AiFillGithub,
} from "react-icons/ai";
import {
  DiCss3,
  DiGit,
} from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";
const colors = [
  "#00C9A7", // teal
  "#FFD166", // soft yellow
  "#EF476F", // pink red
  "#06D6A0", // mint green
  "#118AB2", // sky blue
  "#A259FF", // violet
  "#F72585", // magenta
  "#FF9F1C", // orange
];



const About = () => {

  const iconRef=useRef()
  colors[Math.floor(Math.random() * colors.length)];
    const icons = [
    { icon: <AiFillHtml5 color="#e34c26" />, name: "HTML" },
    { icon: <DiCss3 color="#264de4" />, name: "CSS" },
    { icon: <SiTailwindcss color="#38bdf8" />, name: "Tailwind CSS" },
    { icon: <SiJavascript color="#f7df1e" />, name: "JavaScript" },
    { icon: <SiTypescript color="#3178c6" />, name: "TypeScript" },
    { icon: <FaReact color="#61DBFB" />, name: "ReactJS" },
    { icon: <SiNextdotjs color="#fff" />, name: "NextJS" },
    { icon: <SiFramer color="#e94695" />, name: "Framer Motion" },
    { icon: <FaNodeJs color="#68a063" />, name: "NodeJS" },
    { icon: <SiExpress color="#fff" />, name: "ExpressJS" },
    { icon: <SiMongodb color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiRedux color="#764abc" />, name: "Redux Toolkit" },
    { icon: <DiGit color="#f1502f" />, name: "Git" },
    { icon: <AiFillGithub color="#fff" />, name: "GitHub" },
    { icon: <SiVercel color="#fff" />, name: "Vercel" },
    { icon: <SiPostman color="#ff6c37" />, name: "Postman" },
    { icon: <SiCplusplus color="#00599C" />, name: "C++" },
    { icon: <FaFigma color="#a259ff" />, name: "Figma" },
  ];
     

  return (
    <div id='about' className=' p-4'>
      <div className=' lg:w-[70%] lg:mx-auto  '>

        {/* header about */}
<div className='  flex flex-col  items-center  gap-4'>
    <h2 className=' max-md:text-[14px]'>
        GET TO KNOW ME
    </h2>
    <h1  className=' text-4xl md:text-5xl'>About Me</h1>
</div>


<div className=' mt-14 flex lg:flex-row items-center lg:items-start  flex-col gap-10'>
{/* image and about text */}
    <div className=' lg:w-1/3 flex flex-col items-center gap-4'>
<div className=' rounded-full md:w-[250px] w-[200px] h-[200px] md:h-[250px] overflow-hidden'>
          <img className='  ' src="/me.jpeg" alt="me" />
</div>
<p className=' hover-text  text-center'>I'm a passionate Full-Stack Developer who loves building dynamic, user-friendly applications. I thrive on solving problems, creating seamless experiences, and continuously expanding my skills. Always eager to learn and grow, I'm currently looking for new opportunities to contribute and innovate.</p>
    </div>

    {/* the line  div */}

<div className="hidden lg:block w-[2px] h-[400px] bg-gray-500 mx-auto"></div>
{/* right side */}

    <div className='  lg:w-2/3'>
{/* education */}
        <div>
<h1 className=' text-2xl'>Education</h1>
<div className=' flex justify-between items-center'>
    <div className=' mt-3'>
        <p className='text-[13px] ml-2'>Benha University</p>
        <p className='text-[13px] ml-2'>Computer Science</p>
    </div>
    <h1 className=' text-[13px]'>2021-2025</h1>
</div>
        </div>
{/* experice */}
        <div className=' flex flex-col gap-2 mt-4'>
            <h1 className=' text-2xl'>Experience</h1>
              <div className=' flex justify-between  items-center'>
                          <h1 className=' mt-2 text-xl'>Full-Stack Developer </h1>
    <h1 className=' text-[13px]'>Jul 2022- Jul 2024</h1>

              </div>
            <div className=' ml-3 flex flex-col gap-2'>
                <div className='  flex gap-2  items-center'>
                                        <div className=' w-[3px] h-13  md:h-6 bg-white'></div>
                    <p className=' text-[13px] lg:text-[15px]'>Built a full-stack applications using MERN stack (MongoDB, Express, React, Node.js)</p>
                </div>
                <div className=' flex items-center gap-2'>
                                        <div className=' w-[3px] h-13  md:h-6 bg-white'></div>

                    <p className=' text-[13px] lg:text-[15px]'>Gained experience in authentication, CRUD operations, deployment (Netlify / Render / Vercel), and Git version control</p>
                </div>
            </div>
              <div className=' flex items-center justify-between'> 
              <h1 className=' text-xl mt-3'>DevOps & Cloud Enthusiast </h1>
    <h1 className=' text-[13px]'>Jul 2024- Jul 2025</h1>

              </div>
            <div className=' ml-3 flex flex-col gap-2'>
                <div className=' flex gap-2  items-center'>
                                        <div className=' w-[3px] h-13  md:h-6 bg-white'></div>
                    <p className=' text-[13px] lg:text-[15px]'>learning and applying DevOps practices and cloud technologies (AWS, CI/CD, Docker, etc.)</p>
                </div>
                <div className=' flex items-center gap-2'>
                                        <div className=' w-[3px] h-13  md:h-6 bg-white'></div>

                    <p className=' text-[13px] lg:text-[15px]'>Learned to provision cloud infrastructure on AWS (EC2, S3, Lambda, CloudFront)</p>
                </div>
                      <div className=' flex items-center gap-2'>
                                        <div className=' w-[3px] h-13  md:h-6 bg-white'></div>

                    <p className=' text-[13px] lg:text-[15px]'>Created CI/CD pipelines for automated testing and deployment</p>
                </div>
            </div>

        </div>


        {/* Tech Stack */}
        <div >
    <h1 className=' text-2xl mt-6'>Tech Stack

</h1>
  <div ref={iconRef} className="flex  gap-5 justify-center items-start flex-wrap text-4xl text-white mt-5">
    
      {icons.map((item, index) => (
     <div
  
  key={index}
  className=" hover:-rotate-12 duration-300 border px-2 py-1 rounded-2xl border-gray-600 text-[17px] flex gap-1 hover:scale-110  cursor-pointer"
>
  {item.icon}
  <span className="text-[15px]">{item.name}</span>
</div>
      ))}
    </div>

        </div>

    </div>
</div>


      </div>
    </div>
  )
}

export default About
