import { Carousel } from "react-responsive-carousel";
import "./Rvrjc.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Rvrjc = () => {
  return (
    <div className="rvrjc-layout">
      <Carousel autoPlay infiniteLoop stopOnHover showThumbs={false}>
        <div className="details">
          <h2>Information Technology</h2>
          <p>CGPA: 8.05</p>
          <p>
            Graduated with a strong foundation in software development, data
            structures, algorithms, database systems, and web technologies.
            Developed practical skills through academic projects, internships,
            and hands-on experience in full-stack development and emerging
            technologies.
          </p>
        </div>
        <div className="details">
          <h2>Hospital Management System</h2>
          <p>2nd Year Academic Project</p>
          <p>
            Collaborated in a team of four to develop a web-based hospital
            management system that streamlined patient registration, appointment
            scheduling, and staff management. Implemented frontend design with
            HTML/CSS/JS and backend functionality using PHP and MySQL.
          </p>
        </div>
        <div className="details">
          <h2>Enhancement of Contrast Distorted Images</h2>
          <p>Final year Academic Project</p>
          <p>
            Worked collaboratively to develop an image processing system that
            enhanced contrast-distorted images using advanced algorithms in
            MATLAB. Focused on improving visual clarity and detail in
            low-quality images for better interpretation and analysis.
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Rvrjc;
