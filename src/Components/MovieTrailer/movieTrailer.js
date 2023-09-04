// src/MovieTrailer.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieTrailer = () => {
  const { trailerLink } = useParams();

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`<iframe width="330" height="587" src="https://www.youtube.com/embed/Zz4IKbpuT2s" title="❤hindi love song status❤hindi old song status❤hindi romantic song status❤hindi song status #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe
        >/${trailerLink}`}
        title="Movie Trailer"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
