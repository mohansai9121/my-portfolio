import React, { useState } from 'react';
import { motion } from 'framer-motion';

const steps = ['Account Info', 'Profile Details', 'Confirmation'];

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
        {steps.map((label, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{
              backgroundColor: index <= currentStep ? '#1e90ff' : '#ccc',
              color: index <= currentStep ? '#fff' : '#333',
              scale: index === currentStep ? 1.2 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{
              padding: '10px 16px',
              borderRadius: 20,
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => setCurrentStep(index)}
          >
            {label}
          </motion.div>
        ))}
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: '2rem',
          border: '1px solid #ddd',
          borderRadius: 8,
          background: '#f9f9f9'
        }}
      >
        <h2 style={{color:'black'}}>{steps[currentStep]}</h2>
        <p style={{color:'black'}} >This is step {currentStep + 1} of the process.</p>
        <button
          onClick={() =>
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
          }
        >
          Next
        </button>
      </motion.div>
    </div>
  );
};

export default Stepper;
