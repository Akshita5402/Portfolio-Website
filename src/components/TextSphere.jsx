import React, { useEffect } from "react";
import "../index.css";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const initTagCloud = async () => {
      const container = ".tagcloud";
      const texts = [
        "...Python",
        "FastAPI...",
        "...FlaskAPI",
        "MongoDB...",
        "GIT...",
        "...CSS",
        "JavaScript...",
        "...ReactJS",
        "...Docker",
        "SQL..."
      ];

      const options = {
        radius: 350,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: false,
      };

      await TagCloud(container, texts, options);
    };

    initTagCloud();

    return () => {
      // Clean up the tag cloud on unmount
      const container = document.querySelector(".tagcloud");
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText} style={{textAlign: 'center', fontFamily: 'Lucida Console'}}>👩🏻‍💻My Technology Sphere...</p>
        <h5
          style={{
            textAlign: "center",
            fontFamily: "times New Roman",
            fontSize: "15px",
            color: "grey",
            marginBottom: "0px",
          }}
        >
          The technologies listed here reflect my diverse experience in Web Development and Data Science projects.
        </h5>


        <div className="text-shpere">
          {/* span tag className must be "tagcloud"  */}
          <span className="tagcloud"></span>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(TextShpere, "tech");
