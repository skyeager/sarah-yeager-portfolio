/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk-notepad.jpg";

const imageAltText = "desk with notepad";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Matching Pairs",
    description:
      "The Matching Pairs game delivers an interactive card-matching game through the integration of foundational programming languages: HTML, CSS, and Javascript. Programming concepts illustrated include understanding of scope, function parameters, events listeners, proper syntax and well-organized code.",
    url: "https://matching-pairs.surge.sh/",
  },
  // {
  //   title: "Wander VT",
  //   description:
  //     "Wander VT is a full-stack application that serves the active outdoor community of Vermont. This web application includes information regarding elevation, difficulty, distance, and hiker reviews of the most popular hikes in Vermont. Visitors to the Wander VT site, have the ability to read reviews by previous hikers. Further, individuals can also create, update, and delete reviews. This is achieved without user profiles or user authentication. Wander VT is a full-stack project that provide hikers of Vermont with two offerings--more information on Vermont's trails and the ability to document and provide feedback on listed hikes.",
  //   url: "https://github.com/skyeager/Wander-VT",
  // },
  {
    title: "Waterpark-Bites",
    description:
      "Waterpark-Bites is a full-stack web application that provides waterpark visitors a virtual menu to the waterpark concession stand. Customers can peruse through each menu category to learn more about the different items. Each item will display a description of the item and their cost. This page also offers the ability to create new menu items or delete existing items.",
    url: "https://waterpark-bites.herokuapp.com/",
  },
  {
    title: "Help! An App for Foodies",
    description:
      "Help! is a full-stack application that provides users a select combination of local Boston restaurants. Help! utilizes user authentication to allow users to create and publish reviews on popular dishes from these restaurants.",
    url: "https://help-front-end.herokuapp.com/",
  },
  {
    title: "Gather",
    description:
      "Gather is a full-stack PERN (Postgres, Express, React, Node) application that serves to connect communities through local events. Upon creating an account through user authentication, Gather provides categories of events taking place in the local area. By clicking into specific categories, users are provided with a list of events in that category and a detailed event description and date. Users can also create an event and later update or delete an event they've created. Gather implements front-end and back-end programming technologies to provide community members with listings of local events, and the ability to create, update, or delete their listings.",
    url: "https://gather-vermont.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
