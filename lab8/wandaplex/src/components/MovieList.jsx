import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useTranslation } from "react-i18next";

const MoviesList = ({ movies }) => {
    const {t}=useTranslation();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [selectedTrailerUrl, setSelectedTrailerUrl] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = (e, trailerUrl) => {
        e.stopPropagation();  
        const embedUrl = trailerUrl.replace('watch?v=', 'embed/');
        setSelectedTrailerUrl(embedUrl);
        setShow(true);
      };

    return (
        <>
        <Row>
        {movies.map((movie, index) => (
            <Col key={index} className="mb-3" xs={12} md={4}>
            <div className="movie_home_info" onClick={() => navigate(`${movie.id}`)}>
                <img src={movie.imgUrl} alt={movie.name} style={{ width: "100%", height:"527px",cursor: "pointer"  }} />
                <div className="movie-name">{movie.name}</div>
                <button className="trailer-link custom-submit-btn text-white" onClick={(e) => handleShow(e,movie.trailerUrl)}>{t("Watch")}</button>
            </div>
            </Col>
        ))}
        </Row>
        <Modal show={show} onHide={handleClose} size="lg" data-bs-theme="dark">
        <Modal.Body>
        <iframe 
        width="100%" 
        height="400px" 
        src={selectedTrailerUrl} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen> 
        </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("close")}
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
};

export default MoviesList;