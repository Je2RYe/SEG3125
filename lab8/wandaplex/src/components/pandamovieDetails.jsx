import React from 'react';
import { Button } from 'react-bootstrap';
import PaginationControl from './score';
import '../css/pandamovieDetails.css';
import { useTranslation } from "react-i18next";

const scrollToElement = () =>{
  const element = document.getElementById("comment-form");
  if(element){
    element.scrollIntoView({behavior:"smooth"});
  }
}

const PandaMovieDetails = () => {
  const {t}=useTranslation();
  return (
    <div className="panda-movie-details-container">
      <div className="details-header">
        <h1>{t("KFpanda4")}</h1>
      </div>
      <div className="details-content">
        <div>
          <p>{t("KFDate")}</p>
          <div className="movie-details">
            <img 
              src="https://www.cineplex.com/_next/image?url=https%3A%2F%2Fmediafiles.cineplex.com%2FCentral%2FFilm%2FPosters%2F34402_320_470.jpg&w=3840&q=75" 
              alt="KungFu Panda" 
              className="movie-image" 
            />
            <div>
              <div className="movie-details">
                <div>
                  <h3>{t("Length")}</h3>
                  <p>{t("KFLength")}</p>
                </div>
                <div>
                  <h3>{t("rating")}</h3>
                  <p>G</p>
                </div>
                <div>
                  <h3>{t("genre")}</h3>
                  <p>{t("Anime")}</p>
                </div>
                <div>
                  <h3>{t("score")}</h3>
                  <p>4.3/5</p>   
                  <Button 
                  variant="primary" className="leave-comment-button" onClick={scrollToElement}>{t("LeaveAComment")}
                </Button> 
                </div>
              </div>
              <div className="movie-synopsis">
                <h3>{t("Synopsis")}</h3>
                <p>{t("KFSynopsis")}</p>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PandaMovieDetails;
