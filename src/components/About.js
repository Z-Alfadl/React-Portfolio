import React from "react";
import {avatar} from "../assets/index";
//Component page for About Me Section
export default function About() {
  
  return (
    <div className="rounded shadow outer-card py-4 w-75 my-4 mx-auto text-center about">
      <h2>About</h2>
      <img
        className="rounded-circle img-fluid my-4 avatar"
        // style={styles.img}
        alt="Ziad"
        src={avatar}
      ></img>
      <div className="p-4 w-75 mx-auto rounded inner-card">
        <p>
          Hi! My name is Ziad and I am a Full Stack Developer. With experience in multiple languages and various technologies in both front end environments (such as React and Bootstrap) and backend architecture (SQL, Express etc.), I have the tools necessary to build applications that meet your needs.
        </p>
      </div>
    </div>
  );
}
