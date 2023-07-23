import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs: w-[150px] h-[150px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[25px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-rounded-[20px] py-5 px-4 min-h-[200px] flex justify-evenly items-center flex-col mt-[-2px]"
        >
          <img src={icon} alt={title} className=" h-16 object-contain" />
        </div>
        <h3 className="text-white text-[12px] text-center">{title}</h3>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 50);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const servicesPerRow = isSmallScreen ? 1: 2;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-e-3xl leading-[30px]n "
      >
        Hey there! <br />
        I am Akshita Sharma, currently persuing B.Tech. in the field of Computer
        Science.
        <br />I have good practice with Python projects, DBMS, Frontend as well.{" "}
        <br />
        With my experience as a fresher in working industry, <br />I have
        realized that with proper guidance and consistency I can be twice as
        productive as I am.
      </motion.p>
      <br />

      <div
        className={`mt-20 flex flex-wrap gap-10 ${
          isSmallScreen ? "justify-center" : "justify-evenly"
        }`}
        style={{ maxWidth: "1000px", margin: "0 auto" }}
      >
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`${
              isSmallScreen ? "w-full" : `w-${100 / servicesPerRow}%`
            } min-w-[200px]`}
          >
            <ServiceCard index={index} {...service} />
          </div>
        ))}
        {/* </div> */}
      </div>
      <br />
      <br />
      <br />
    
    </>
  );
};

export default SectionWrapper(About, "about");
