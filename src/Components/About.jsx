/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm currently enrolled in bachelor of science in software engineering in FAST university. An intermediate python, C, C++ programmer doing some projects :)";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "C++",
  "C Language",
  "Java Script",
  "Adobe Photoshop",
  "WordPress",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Throughout my academic journey, I've cultivated a diverse skill set in the field of technology. Starting from the age of 17, I delved into the world of programming and Arduino, setting the stage for my passion for technology. During O/A-LEVEL, I mastered Python, delving into libraries and completing beginner projects. In my first semester, I laid the foundation with C language, delving into the Linux Ubuntu kernel and Microsoft Office suite. Moving on to my second and third semesters, I expanded my coding skills in C++, Python, and Django, undertaking practical projects such as developing an airport management system in C++, as well as gaining insight into object-oriented programming, game development in Python, and utilizing tools like Jupyter and Anaconda. I also deepened my understanding of data structures, explored assistive technologies for the visually impaired, and acquired knowledge in software engineering methodologies such as SRS, Agile, Scrum, and Atlassian jira. Additionally, I executed design projects using HTML, CSS, Figma, Photoshop, and Illustrator. With a strong foundation in various technical areas, I am well-prepared to tackle a wide range of challenges in the tech industry.";
const About = () => {
  return (
    <section className="padding" id="about">
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
        <h2>About Myself</h2>
        <p className="large">{description}</p>
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
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
