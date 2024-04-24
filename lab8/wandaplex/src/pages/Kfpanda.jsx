import React from 'react';
import Topbar from '../components/Topbar';
import { useState } from 'react';
import { useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import MovieComments, { updateMovieComments } from '../components/MovieComments';
import ReactPlayer from 'react-player'
import PandaMovieDetails from '../components/pandamovieDetails';


const Kfpanda = () => {
  
  
  const [comments, setComments] = useState([]);
  const commentsForKfpanda = MovieComments.kfpanda;

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const addComment = (newComment) => {
    
    newComment.timestamp = new Date().toISOString();
    const updatedComments = [...comments, newComment];
    
    setComments([updatedComments]);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    updateMovieComments('kfpanda', newComment);
  };




  return (
    <div className="page-container">
      <Topbar />
      <div className="centered-player-container">
        
      <ReactPlayer class = "player" id = "player" url="https://www.youtube.com/watch?v=cO2ZLBAbkjI" /> 
      </div>
      <PandaMovieDetails/>
      
      
      <CommentForm addComment={addComment} />
      <CommentsList comments={commentsForKfpanda} />
    </div>
  );
};

export default Kfpanda;