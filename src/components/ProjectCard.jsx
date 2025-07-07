
import { AiFillGithub } from "react-icons/ai";      // GitHub Icon
import { FiExternalLink } from "react-icons/fi";  

const ProjectCard = ({
  title,
  details,
  skills,
  image,
  linkGithub,
  linkLive
}
) => {
  return (
    <div>
        <div className=" mt-16 flex flex-col p-10 border-[0.5px] rounded-xl border-gray-600">
<h1 className=" text-3xl">{title}</h1>
<div className=" mt-5 w-full h-[1px] bg-gray-600 "></div>
<div className=" mt-5 flex flex-col gap-2">
    {details.map((detail,index)=>{
              return <p key={index}>{detail}</p>

    })}
</div>
{/*  <div key={index}>
            {detail?.icon}
            <p>{detail.title}</p>
        </div> */}
<div className=" flex gap-1  mt-5">
    {skills.map((skill,index)=>{
        return <div className=" flex gap-1  items-center border-[0.5px] border-gray-600 rounded-2xl py-1 px-3" key={index}>
            
            {skill?.icon}
            <p className=" text-sm">{skill.title}</p>
        </div> 
    })}
</div>



{/* buttons */}
<div className=" flex items-center gap-4 my-5">
    <a href={linkGithub}>
        <button className="  hover:scale-110 flex items-center transition-all duration-300 hover:bg-gray-900 gap-2 cursor-pointer border rounded-2xl px-4 py-2 border-gray-600  "><h3>Github</h3>   <AiFillGithub/></button>
      
    
    </a>
    <a href={linkLive}>  
                <button className="hover:scale-110  flex  transition-all duration-300 hover:bg-cyan-700  cursor-pointer items-center gap-2 border rounded-2xl px-4 py-2 border-gray-600  "><h3>Live </h3>   <FiExternalLink/></button>

    </a>
  
</div>

<div>
    <img  className=" rounded-2xl" src={image} alt="" />
</div>
        </div>
      
    </div>
  )
}

export default ProjectCard
