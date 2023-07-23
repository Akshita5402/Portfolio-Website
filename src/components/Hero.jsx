import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import React from "react";
import { styles } from "../styles";
import TextTransition, { presets } from 'react-text-transition';
import CV_2023 from "../assets/CV_2023.pdf";

// import { ComputersCanvas } from "./canvas";
// import Typical from "react-typical";
import "../index.css";

const Hero = () => {
  const TEXTS = ['Web developer','Python Developer', 'Data Analyst','UI/UX Designer'];


    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        2000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 `}
      >
     
        <div className="flex flex-col justify-center items-center mt-32">
          <div className="w-6 h-6 rounded-full bg-[#ff8800] " />
          <div className="w-1 sm:h-80 h-40 orange-gradient" />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {" "}
            Hi, I'm <span className="text-3d-blue">Akshita</span>
          </h1>
          <h1 className={`${styles.heroSubText} text-white`}>
      <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
          <motion.div
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            keyframes={{
              y: [0, -10, 0],
            }}
          >
            
          </motion.div>
          <div className="profile-options">
            <a href={CV_2023} download="Akshita_Resume">
              <button
                className="btn highlighted-btn"
                style={{ boxShadow: "1px 2px 5px rgba(0, 1, 1, 1)" }}
              >
                Download CV
              </button>
              
            </a>
            
            <button
                className="btn highlighted-btn"
                style={{ boxShadow: "1px 2px 5px rgba(0, 1, 1, 1)" }}
              >
                Contact Me
              </button>
          </div>
        </div>

        <div className="ml-auto">
          <motion.img
            src={profile}
            alt="Profile Picture"
            className="w-25 sm:w-96 h-auto object-cover shadow-lg mt-28"
            style={{ boxShadow: "2px 2px 50px rgba(1, 1, 1, 1)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>

      {/* <ComputersCanvas/> */}
    </section>
  );
};

export default Hero;
