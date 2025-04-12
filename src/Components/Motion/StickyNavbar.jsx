import { motion, useScroll, useTransform } from "framer-motion";

const StickyNavbar = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 200], [80, 40]);
  const background = useTransform(
    scrollY,
    [0, 400],
    ["rgba(255,255,255,1)", "rgba(30,144,255,0.95)"]
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height,
        background,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 2rem",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div>Logo</div>
      <nav>
        <a href="#home">Home</a> <a href="#about">About</a>{" "}
        <a href="#contact">Contact</a>
      </nav>
    </motion.div>
  );
};

export default StickyNavbar;
