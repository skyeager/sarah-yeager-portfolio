import React from "react";

import image from "../images/library.jpg";

const imageAltText = "library";


const educationList = [
  "General Assembly","Software Engineering Immersive","Graduated December 2022",
  "Regis College","Bachelor of Science in Nursing","December 2018",
];

const Education =()=>{
  return(
    <section className="light" id= "portfolio">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {educationList.map((education) => (
            <li key={education}>{education}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  )
}

export default Education