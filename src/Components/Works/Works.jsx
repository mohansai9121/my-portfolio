//import React from 'react'
import "./Works.css";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fullStackApps, basicApps, games, apps3d } from "../../assets/projects";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const containerRef = useRef(null);
  const rowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const row = rowRef.current;
      const scrollLength = row.scrollWidth - (3 * window.innerWidth) / 4;

      gsap.to(row, {
        x: -scrollLength,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: `+=${scrollLength}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div>
      <div className="heading" id="works">
        <h2>My works</h2>
        <p>
          I have worked on a variety of projects using React, focusing on
          building dynamic, responsive, and user-friendly web applications. My
          experience includes developing reusable components, managing
          application state with tools like Redux and Context API, integrating
          APIs, and optimizing performance for better user experience.
        </p>
      </div>
      <div className="single-apps-container">
        <div className="categories">
          {/*<h2>Games</h2>*/}
          <div className="games">
            {games.map((game, id) => (
              <div className="project" key={id}>
                <a href={game.url} target="_blank">
                  <img src={game.img} alt={game.name} className="image" />
                </a>
                <p>{game.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="categories">
          {/*<h2>3-d Apps</h2>*/}
          <div className="apps3d">
            {apps3d.map((app, id) => (
              <div key={id} className="project">
                <a href={app.url} target="_blank">
                  <img src={app.img} alt={app.name} className="image" />
                </a>
                <p>{app.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="categories">
          {/*<h2>Full Stack Applications</h2>*/}
          <div className="fullstackApps">
            {fullStackApps.map((fsapp, id) => (
              <div key={id} className="project">
                <a href={fsapp.url} target="_blank">
                  <img src={fsapp.img} alt={fsapp.name} className="image" />
                </a>
                <p>{fsapp.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="scroll-container">
        <h2>Some Basic Applications</h2>
        <div ref={containerRef}>
          <div ref={rowRef} className="basicApps">
            {basicApps.map((basicApp, id) => (
              <div key={id} className="project">
                <a href={basicApp.url} target="_blank">
                  <img
                    src={basicApp.img}
                    alt={basicApp.name}
                    className="image"
                  />
                </a>
                <p>{basicApp.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
