"use client"
import React from "react";

const About = () => {
  return (
    <div>
    <div className="container">
      <h1>This is the about page</h1>
      <p>I am good at this</p>
      {/* style jsx is used to write css in the same file */}
      {/* will not apply to the second div */}
      {/* to apply to the second div, we can use the global css */}
      <style jsx global>
        {`
          .container {
            background-color: red;
            color: white;
          }
        `}
      </style>
    </div>
    <div className="container">
        Hey I am good at this!
    </div>
    </div>
  );
};

export default About;
