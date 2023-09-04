import { Link } from 'react-router-dom';
import move from '../MovieCard/move.mp4';


export const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'Description for Movie 1.',
      trailerLink: './video/banana.mp4',
    },

  ];
  
const MovieList = () => {


    
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <Link to={move}> View Details</Link>
          
        </div>
      ))}
    </div>
  );
};

export default MovieList;
