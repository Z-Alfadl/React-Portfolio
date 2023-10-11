import React from "react";
import avatar from "../assets/jate.png";
//Component page for About Me Section
export default function About() {
  const styles = {
    img: { maxWidth: "150px" },
  };
  return (
    <div className="rounded shadow outer-card py-4 w-75 my-4 mx-auto text-center about">
      <h2>About</h2>
      <img
        className="rounded-circle img-fluid my-4"
        style={styles.img}
        alt="Ziad"
        src={avatar}
      ></img>
      <div className="p-4 w-75 mx-auto rounded inner-card">
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}
