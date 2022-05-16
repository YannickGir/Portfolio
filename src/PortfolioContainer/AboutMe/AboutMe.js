import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import { render } from "@testing-library/react";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description: "Développeur full stack web et mobile etc",
    highlights: {
      bullets: [
        "Développeur full stack web et mobile",
        "Base de données no sql",
        "Tests",
        "Méthode Scrum / Agile",
      ],
      heading: "Ici quelques compétences :",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading
          title={" A propos de moi "}
          subHeading={"Pourquoi me choisir ?"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me*-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlights-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn">{""} Découvrez-moi !</button>
              <a href="CV à jour.jpg" download="CV de Yannick.jpg">
                <button className="btn highlighted-btn">
                  Téléchargez mon CV !
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
