import React from 'react'
import ProjectCard from './ProjectCard'
import { FaReact } from 'react-icons/fa'
const Project = () => {
  return (
    <div id='projects' className='  mt-32'>
      <div className='  flex flex-col  items-center  gap-4'>
    <h2 className=' max-md:text-[14px]'>
        GET TO KNOW ME
    </h2>
    <h1  className=' text-4xl md:text-5xl'>Projects</h1>
</div>



<div>
    <ProjectCard linkGithub={'https://github.com/ahmedanwar1234/streamify-video-call'} linkLive={'https://streamify-video-call-production.up.railway.app/'} skills={[{title:"React js",icon:<FaReact className=' text-blue-700'/>}]} image={"/projects/strem.png"}  details={["AI-powered code analysis platform with debugging insights.","- Weather updates for 200,000+ cities."]} title={"CodeInsight AI"}/>
        <ProjectCard skills={[{title:"React js",icon:""}]} image={"/jpeg.jpeg"}  details={["AI-powered code analysis platform with debugging insights.","- Weather updates for 200,000+ cities."]} title={"CodeInsight AI"}/>

</div>
    </div>
  )
}

export default Project
