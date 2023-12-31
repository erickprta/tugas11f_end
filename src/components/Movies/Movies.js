import styled from "styled-components";
import Movie from "../Movie/Movie";

const Movies = (props) => {

    const { item } = props
    // state
    // const handleClick = () => {
    //     const movie = {
    //         id: 4,
    //         title: "BERSERK OF GLUTTONY",
    //         date: "11 JANUARI 2023",
    //         image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wQMcq5YUjMfoIEqLRzrNQVt4ROl.jpg"
    //     }

    //     const movie2 = {
    //         id: 8,
    //         title: "JUJUTSU KAISEN",
    //         date: "15 MARET 2023",
    //         image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg"
    //     }
    return (
      <MoviesStyle>
          <div className="container">
            <section className="movies">
                <h2 className="movies__tittle">Latest Movies</h2>
                <div className="movies__container">
                    {
                        item.map((data) => <Movie key={data.id} title={data.title} date={data.date} image={data.image}/>)
                    }
                  </div>
                  {/* <button onClick={handleClick}>Tambahkan Movie</button> */}
            </section>
        </div>
      </MoviesStyle>
    )
}

const MoviesStyle = styled.div`
/* Small Screen */
.container {
    margin: 1rem;
}

.movies {
    margin: 5rem 0;
    text-align: center;
}

.movies__tittle {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
}

.movies__container {
    display: flex;
    flex-direction: column;
}

.movies {
    margin-bottom: 1rem;
}

.movies__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}

.movies__tittle {
    color:#4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
}

.movies__date {
    color: #64748b;
}

/* Medium Screen */
@media (min-width: 768px) {
    .movies__container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .movies {
        flex-basis: 50%;
    }
}

/* Large Screen */
@media (min-width: 992px) {
    .container {
        max-width: 1200px;
        margin: 3rem auto;
    }

    .movies {
        flex-basis: 25%;
        padding: 1rem;
    }
}
`


export default Movies;