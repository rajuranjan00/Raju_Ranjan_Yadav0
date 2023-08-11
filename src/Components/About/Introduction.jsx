import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Raju_Ranjan_Pic.jpeg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Raju Ranjan Yadav, </span>  I am an energetic person, an effective communicator and a quick learner, I am pursuing a B.Tech degree in Computer Science & Engineering from{" "}
                <span className="different">
                  {" "}
                  MIT ADT UNIVERSITY, PUNE, MAHARASHTRA
                </span>
                I have worked on various projects related to the software domain and Web developement domain which provided me a great deal of technical exposure along with the importance of working in a team.
                Currently I am Working in{" "}
                <span className="different">
                  Cyberium Inc.
                </span>
                 as a Web Developer Position.{" "}
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Foodie{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveler{" "}
              </h4>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
