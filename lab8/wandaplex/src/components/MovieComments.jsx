const MovieComments = {
    kfpanda: [],
  };
  
  export const updateMovieComments = (movieId, newComment) => {
    MovieComments[movieId].push(newComment);
    localStorage.setItem('movieComments', JSON.stringify(MovieComments));
  };
  
  export default MovieComments;
  