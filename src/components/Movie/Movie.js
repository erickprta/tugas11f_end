import React from 'react'
import styled from 'styled-components'

const Movie = (props) => {
    const { title, date, image } = props
  return (
    <MovieStyle>
      <div className="movie">
    <img 
    className="movies__image"
    src={image}
    alt=""/>
    <h3 className="movies__tittle">{title}</h3>
    <p className="movies__date">{date}</p>
    </div>
    </MovieStyle>
  )
}

const MovieStyle = styled.div`
.movie {
    margin-bottom: 1rem;
}

.movie__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

.movie__tittle {
    color:#4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
}

.movie__date {
    color: #64748b;
}

/* Large Screen */
@media (min-width: 768px) {


    .movies {
        flex-basis: 50%;
    }
}

/* Large Screen */
@media (min-width: 992px) {

    .movie {
        flex-basis: 25%;
        padding: 1rem;
    }
}
`

export default Movie;