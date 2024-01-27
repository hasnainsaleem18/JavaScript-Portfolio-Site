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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Airport Management System",
    description:
      "I have successfully completed a project on Airport Management System, employing pure object-oriented programming (OOP) concepts and file handling techniques. This project showcased my ability to design and implement a comprehensive system that effectively handles various aspects of airport operations, including passenger management, flight scheduling, and baggage handling. Through this project, I demonstrated my proficiency in utilizing OOP principles to create modular, scalable, and maintainable software solutions.",
    url: "https://github.com/hasnainsaleem18/Airport_Management_oop_Project_c-",
  },
  {
    title: "TIC-TAC-TOE GAME",
    description:
      "I have developed a Tic Tac Toe game using Python, implementing AI concepts where the opponent is a computer programmed to play at a challenging difficulty level. The game is built using Jupyter Notebook, leveraging various libraries for enhanced functionality. In order to optimize the game logic, I incorporated linked list data structure to efficiently handle the game board state and move calculations. This project showcases my proficiency in Python programming, AI algorithms, and data structures, allowing for an engaging and challenging gaming experience.",
    url: "https://www.linkedin.com/in/hasnain-saleem-4b88101b8/",
  },
  {
    title: "C language codes",
    description:
      "Diverse C programs from basics to intermediate. Well-commented for clarity. Happy coding! 💻🚀",
    url: "https://github.com/hasnainsaleem18/C-language-Codes",
  },
  {
    title: "Blogs",
    description:
      "Problem Station isn’t just another tech blog; it’s a digital haven for curious minds, innovators, and anyone passionate about the transformative power of addressing challenges head-on. We delve into the heart of problems, dissecting them to reveal the innovative solutions that shape our future.",
    url: "https://problemstation.wordpress.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
