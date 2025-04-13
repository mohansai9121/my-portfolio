import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { no: 1, name: "React", level: "Advanced" },
  { no: 2, name: "JavaScript", level: "Advanced" },
  { no: 3, name: "Python", level: "Advanced" },
  { no: 4, name: "HTML/CSS", level: "Advanced" },
  { no: 5, name: "NodeJS", level: "Intermediate" },
  { no: 6, name: "C language", level: "Intermediate" },
  { no: 7, name: "JAVA", level: "Beginner" },
];

import "./Skills.css";

const Skills = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0,1], [1,0]);
  const yCard = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="skills-layout" ref={containerRef}>
        <motion.div className="scroll-progress-bar" style={{scaleY}} ref={containerRef} />
      <center>
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="accent">Skills</span>⚡
        </motion.h2>
      </center>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            style={{ y: yCard, zIndex: skills.length - index, marginLeft:index%2===0?"10vw":"60vw" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
