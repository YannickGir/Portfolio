import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Yannick</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Dev passionné ☺️",
                    1000,
                    "Dev Full Stack",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "React / React Native Dev",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagLine">
                Créateur d'applications front et back end.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">{""} Découvrez-moi !</button>
            <a href="CV à jour.jpg" download="CV de Yannick.jpg">
              <button className="btn highlighted-btn">
                Téléchargez mon CV !
              </button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
