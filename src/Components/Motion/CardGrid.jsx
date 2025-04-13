import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./CardGrid.css";

const cards = [1, 2, 3, 4, 5, 6];

const CardGrid = () => {
  const [isGrid, setIsGrid] = useState(false);

  return (
    <div className="wrapper">
      <button className="toggle-btn" onClick={() => setIsGrid(!isGrid)}>
        {isGrid ? "Stack View" : "Grid View"}
      </button>

      <motion.div
        className={`card-container ${isGrid ? "grid-view" : "stack-view"}`}
        layout
      >
        {cards.map((card, index) => (
          <motion.div
            layout
            key={card}
            className="card"
            style={{
              zIndex: isGrid ? 0 : cards.length - index,
            }}
          >
            {card}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardGrid;
