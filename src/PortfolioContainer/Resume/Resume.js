import React, { useState } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./Resume.css";

import educationLogo from "../../assets/Resume/education.svg";
import workHistoryLogo from "../../assets/Resume/work-history.svg";
import programmingSkillsLogo from "../../assets/Resume/programming-skills.svg";
import projectsLogo from "../../assets/Resume/projects.svg";
import interestsLogo from "../../assets/Resume/interests.svg";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);



  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: educationLogo },
    { label: "Historique professionnel", logoSrc: workHistoryLogo },
    {
      label: "Compétences en programmation",
      logoSrc: programmingSkillsLogo,
    },
    { label: "Projets", logoSrc: projectsLogo },
    { label: "Intérêts", logoSrc: interestsLogo },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React Js", ratingPercentage: 75 },
    { skill: "React Native", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "Mongo Db", ratingPercentage: 60 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectDetails = [
    {
      title: "Site du Portefolio",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Découvrez mon portefolio personnel afin de mieux me connaître à travers notamment mes projets",
      subHeading: "Technologies utilisées: React JS, Bootstrap",
    },
    {
      title: "Application mobile RoadtripRiders",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Une application communautaire pour l'organisation de sorties ainsi que la rencontre entre motards dans toute la France",
      subHeading:
        "Technologies utilisées: React Native, node JS, MongoDB, Express",
    },
    {
      title: "Sites projets startups",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "Différents projets en cours de startups en collaboration personnelle ou non",
      subHeading: "Technologies utilisées: React JS, Bootstrap, node Js",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"La Capsule"}
        subHeading={
          "Certification professionnelle développeur full stack web et mobile niveau 6"
        }
        fromDate={"janvier 2022"}
        toDate={"avril 2022"}
      />
      <ResumeHeading
        heading={"Virtuarles"}
        subHeading={
          "Technicien concepteur d'applications 3D en temps réel (AR / VR)"
        }
        fromDate={"fevrier 2019"}
        toDate={"septembre 2019"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"WIDID"}
          subHeading={
            "Technicien concepteur d'applications 3D en temps réel (VR)"
          }
          fromDate={"Juin 2019"}
          toDate={"Août 2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            En ce moment développement d'application dans le cadre de divers
            projets personnels ou de groupes
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            Développé une application en réalité virtuelle pour une startUp.
          </span>
          <br />
          <span className="resume-description-text">
            Développé une application en réalité augmentée pour une entreprise
            commercialisant des produits agricoles.
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.fromDate}
          toDate={projectDetails.toDate}
        />
      ))}
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="interests"
    >
      <ResumeHeading
        heading="Sport/Nutrition"
        description="Musculation et intérêt pour la nutrition sportive"
      />
      <ResumeHeading
        heading="Musique"
        description="Guitare, chant et clavier tous type de styles"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => 
    (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={bullet.logoSrc}
          alt="Désolé, aucune connexion internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Ma formation"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
