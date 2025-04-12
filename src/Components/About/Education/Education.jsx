import { motion } from "motion/react";
import { useState } from "react";
import "./Education.css"
import Rvrjc from "./Rvrjc";
import Inter from "./Inter";
import Narayana from "./Narayana";
const steps = ["Under Graduation", "Intermediate", "Schooling"];

const Education = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="education-layout">
      <div className="steppers-layout">
        {steps.map((val, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              backgroundColor: index <= currentStep ? "#1e90ff" : "#ccc",
              color: index <= currentStep ? "#fff" : "#333",
              scale: index === currentStep ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setCurrentStep(index)}
            className="stepper"
          >
            {val}
          </motion.div>
        ))}
      </div>
      <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:-50, opacity:0}} transition={{duration:0.8}}>
        {currentStep===0?<><Rvrjc/></>:currentStep===1?<><Inter/></>:<><Narayana/></>}
      </motion.div>
      <button onClick={()=>setCurrentStep((prev)=>Math.min(prev+1,2))} className="next" >Next</button>
    </div>
  );
};

export default Education;
