/*import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const row = rowRef.current;
      const scrollLength = row.scrollWidth - window.innerWidth;

      gsap.to(row, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup
  }, []);

  const cardData = ["Project 1", "Project 2", "Project 3", "Project 4"];

  return (
    <section className="horizontal-scroll-container" ref={containerRef}>
      <div className="cards-row" ref={rowRef}>
        {cardData.map((title, index) => (
          <div className="card" key={index}>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;*/
