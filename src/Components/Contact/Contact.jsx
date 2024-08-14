//import React from 'react'
import "./Contact.css";
import phone from "../../assets/phone.jpg";
import mail from "../../assets/mail.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import location from "../../assets/location.jpg";
import refresh from "../../assets/refresh.png";
import { useState } from "react";

const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const refreshHandler = () => {
    setName("");
    setEmail("");
    setMessage("");
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ca14e9b8-fdee-4b3b-be7d-c51ee616debc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div id="contact">
      <div className="heading">
        <h1>Connect with me</h1>
        <p>Feel free to send me a message. You can contact me at any time</p>
      </div>
      <div className="contactDetails">
        <div className="connecting">
          <div className="contact">
            <img src={phone} alt="call" height={30} width={20} />{" "}
            <p>+91 9121921094</p>
          </div>
          <div className="contact">
            <img src={mail} alt="mail" height={20} width={30} />{" "}
            <p> mohansaichinthala9121@gmail.com</p>
          </div>
          <div className="contact">
            <img src={linkedin} alt="linkedin" height={25} width={25} />{" "}
            <p>
              <a
                href="https://www.linkedin.com/in/mohan-sai-chintala-0b309223a/"
                target="_blank"
                className="location"
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
            />{" "}
            <p>
              <a
                href="https://github.com/mohansai9121"
                target="_blank"
                className="location"
              >
                GitHub profile
              </a>
            </p>
          </div>
          <div className="contact">
            <img src={location} alt="location" height={30} width={20} />{" "}
            <a
              href="https://maps.app.goo.gl/7nuSKZ67vTquBwi66"
              target="_blank"
              className="location"
            >
              {" "}
              Guntur, AP, India
            </a>
          </div>
        </div>
        <div>
          <form className="form" onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder="enter your name..."
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email..."
            />
            <label htmlFor="message">Message:</label>
            <textarea
              rows={5}
              id="message"
              name="Message"
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your mesaage..."
            />
            <center>
              <button type="submit" className="submit">
                Send Message
              </button>
              <img
                src={refresh}
                alt="refresh"
                height={20}
                width={20}
                onClick={refreshHandler}
                className="refresh"
                title="Refresh"
              />
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
