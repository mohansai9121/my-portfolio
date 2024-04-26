//import React from 'react'
import "./Contact.css";
import phone from "../../assets/phone.jpg";
import mail from "../../assets/mail.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import location from "../../assets/location.jpg";

const Contact = () => {
  return (
    <div id="contact">
      <div className="heading">
        <h1>Connect with me</h1>
        <p>Feel free to send me a message. You can contact me at any time</p>
      </div>
      <div>
        <div className="connecting">
          <div className="contact">
            <img src={phone} alt="call" height={30} width={20} />
            <p>+91 9121921094</p>
          </div>
          <div className="contact">
            <img src={mail} alt="mail" height={20} width={30} />
            <p> mohansaichinthala9121@gmail.com</p>
          </div>
          <div className="contact">
            <img src={linkedin} alt="linkedin" height={25} width={25} />
            <p>
              <a
                href="https://www.linkedin.com/in/mohan-sai-chintala-0b309223a/"
                target="_blank"
                style={{ color: "white" }}
              >
                My LinkedIn Profile
              </a>
            </p>
          </div>
          <div className="contact">
            <img
              src={github}
              alt="github"
              height={25}
              width={25}
              style={{ backgroundColor: "white" }}
            />
            <p>
              <a
                href="https://github.com/mohansai9121"
                target="_blank"
                style={{ color: "white" }}
              >
                GitHub profile
              </a>
            </p>
          </div>
          <div className="contact">
            <img src={location} alt="location" height={30} width={20} />
            <p>Guntur, AP, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
