import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <div className="IntoDiv">
        <div className="Intro">
          <p>Hi..I am Suraj, A full stack Web Developer.</p>
        </div>
      </div>
      <div className="About">
        <div className="EachDiv">
          <h2 className="h2Head">About Me</h2>
          <div>
            <p>
              A Full Stack Web Developer able to write production ready code
              using ReactJs, HTML, CSS for front-end and NodeJS fro backend{" "}
            </p>
          </div>
        </div>
        <div className="EachDiv">
          <h2 className="h2Head">Address</h2>
          <div>
            <p>Dhamangaon, India</p>
          </div>
        </div>
        <div className="EachDiv">
          <h2 className="h2Head">Hobbies & Interests</h2>
          <div>
            <p>Sketching</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
