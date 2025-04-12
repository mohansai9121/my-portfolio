import { motion, useScroll } from "motion/react";
import "./Motion.css";

const MotionAnimations = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress.get());

  return (
    <div className="motion-container">
      <motion.div
        className="box"
        animate={{
          x: [0, 500, 500, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotateZ: [0, 360, 0, -360, 0],
          rotateY: [0, 360, 0, -360, 0],
        }}
        transition={{ delay: 2, duration: 6, repeat: Infinity }}
        initial={{ x: 0, y: 0 }}
      ></motion.div>
      <motion.div
        className="box1"
        drag
        dragConstraints={{ left: 0, right: 700, bottom: 100, top: 0 }}
        dragSnapToOrigin
      ></motion.div>
    </div>
  );
};

export default MotionAnimations;
