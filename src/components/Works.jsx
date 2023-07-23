import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard=({index, name, description, tags, image, source_code_link
})=>{ 

return(



<motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>

<div className="flex flex-wrap justify-center">
  <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[25px] shadow-card">
    <Tilt options={{max:45, scale:1,speed:450}} className=" p-5 rounded-2xl w-[265px] h-[280px]">
      <div className="relative w-full h-[20px]">
      
      </div>
      
      <div>
      <h2 className="text-white text-[15px] text-center">{name}</h2><br/><br/>
      <p style={{fontSize:"15px", color: "grey", textAlign: "center", }}>{description}</p></div>
      
    </Tilt>
  </motion.div>
  


</div>
</motion.div>

)

}

const Works = () => {
  return (
  <>
  <motion.div variants={textVariant()}>
  <p className={styles.sectionSubText}>My Work</p>
   <h2 className={styles.sectionHeadText}>Projects</h2>
   
   
   </motion.div>
   <div className="w-full flex">
   <motion.p varients={fadeIn("","",0.1,1)}
   className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
   Here are some of the projects I have created to showcase my skills and experience in various technologies.
   </motion.p>
   
   </div>
   
   <div className="mt-20 flex flex-wrap gap-7">
   {projects.map((project,index)=>(
   
   <ProjectCard key={`project-${index}`}
   index={index}
{...project}/>   
   
   
   ))}</div>
   
   
   </>
  );
};

export default SectionWrapper(Works,"");
