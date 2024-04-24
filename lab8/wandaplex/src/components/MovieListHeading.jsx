import React from "react";
import Col from 'react-bootstrap/Col';
import { useTranslation } from "react-i18next";

const MovieListHeading =(props) =>{
    return (
        <Col>
            <h1>{props.heading}</h1>
        </Col>
    )

}
export default MovieListHeading