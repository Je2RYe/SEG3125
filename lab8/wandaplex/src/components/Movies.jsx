import React, { useState ,useEffect} from "react";
import AllMovies from "../AllMovieLists"; 
import MoviesList from "./MovieList";
import Container from "react-bootstrap/Container";
import MovieListHeading from './MovieListHeading';
import SearchBox from "./SearchBox";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useParams } from "react-router-dom";
import Localmovies from "../Localmovies";
import LanguageSelector from "./languageSelect";
import Filter from './Filter';
import { useTranslation } from "react-i18next";
const Movies = ({ searchValue }) => {
    const { t, i18n } = useTranslation();
    const [localMovies, setLocalMovies] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedRating, setSelectedRating] = useState([]);
    const [selectedScore, setSelectedScore] = useState([]);
    const [selectedScore2, setSelectedScore2] = useState([]);
    const handleGenreChange = (genre) => {
      if (selectedGenres.includes(genre)) {
        setSelectedGenres(selectedGenres.filter(g => g !== genre));
      } else {
        setSelectedGenres([...selectedGenres, genre]);
      }
    };
    const handleRatingChange = (age) => {
        if (selectedRating.includes(age)) {
          setSelectedRating(selectedRating.filter(g => g !== age));
        } else {
          setSelectedRating([...selectedRating, age]);
        }
      };
      const handleScoreChange = (score) => {
        if (selectedScore.includes(score)) {
          setSelectedScore(selectedScore.filter(g => g !== score));
        } else {
          setSelectedScore([...selectedScore, score]);
        }
      };
      const handleScoreChange2 = (score) => {
        if (selectedScore2.includes(score)) {
          setSelectedScore2(selectedScore2.filter(g => g !== score));
        } else {
          setSelectedScore2([...selectedScore2, score]);
        }
      };

    useEffect(() => {
        const movieKeys = ["kfpanda", "dp2", "GxKTNE", "GbFE", "FG", "Heyvkt"];
        const updatedMovies = movieKeys.map(key => ({
            id: key,
            name: t(`movies.${key}.name`),
            age: t(`movies.${key}.age` ),
            score:t(`movies.${key}.score`),
            genre: t(`movies.${key}.genre`, { returnObjects: true }),
            trailerUrl: t(`movies.${key}.trailerUrl`),
            imgUrl: t(`movies.${key}.imgUrl`),
        }));
        setLocalMovies(updatedMovies);
    }, [i18n.language]); 

    const filteredMovies = localMovies.filter(movie =>
        movie.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        (selectedGenres.length === 0 || movie.genre.some(g => selectedGenres.includes(g)))&&
        (selectedRating.length === 0 || selectedRating.includes(movie.age))&&
        (selectedScore.length === 0 || movie.score > selectedScore)&&
        (selectedScore2.length === 0 || movie.score < selectedScore2)
      );
    

  return (
    <Container className="movie_container">
        <Row className="d-flex align-items-center mt-4 mb-4">
            <Col><MovieListHeading heading={t("moviesheading")}/></Col>
            <Col><Filter 
                onGenreChange={handleGenreChange}
                onScoreChange={handleScoreChange}
                onScoreChange2={handleScoreChange2}
                onRatingChange={handleRatingChange}/>
            </Col>
        </Row>
        <div className="movie_list">
            <MoviesList movies={filteredMovies} />
        </div>
      
    </Container>
  );
};

export default Movies;