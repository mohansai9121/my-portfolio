import { useState } from 'react';
import { motion } from 'framer-motion';
import './CardFlip.css'; // CSS required for 3D effect

const CardFlip = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setFlipped(!flipped)}>
      <motion.div
        className="card"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="card-face card-front">
          Front Side
        </div>
        <div className="card-face card-back">
          Back Side
        </div>
      </motion.div>
    </div>
  );
};

export default CardFlip;
