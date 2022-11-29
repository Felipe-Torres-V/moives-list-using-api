import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_KEY } from '../../Config/config';
import { Link, useParams } from 'react-router-dom';
import {
    Container,
    MoviePoster, 
    InfoColumn, 
    MovieTitle, 
    MovieInfo
} from "./StylesMoviesInfo";

const MoviesInfo = () => {

    const [movieInfo, setMovieInfo] = useState();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
            .then((response) => {
                setMovieInfo(response.data)
            })
    }, [])

    return (
        <Container>
            {movieInfo ? <>
                <Link style={{
                'textDecoration': 'none',
                'color': 'white',
                'width': '60px',
                'height': '40px',
                'display': 'flex',
                'justifyContent': 'center',
                'alignItems': 'center',
                'margin': '20px',
                'fontFamily': "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
                'fontWeight': 'bold'
                }} to='/'>Voltar</Link>
                <MoviePoster src={movieInfo.Poster} />
                <InfoColumn>
                    <MovieTitle>
                        {movieInfo.Type} : <span>{movieInfo.Title}</span>
                    </MovieTitle>
                    <MovieInfo>
                        Year: <span>{movieInfo.Year}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Rated: <span>{movieInfo.Rated}</span>
                    </MovieInfo>
                    <MovieInfo>
                        imdbRating: <span>{movieInfo.imdbRating}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Released: <span>{movieInfo.Released}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Runtime: <span>{movieInfo.Runtime}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Genre: <span>{movieInfo.Genre}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Director: <span>{movieInfo.Director}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Writer: <span>{movieInfo.Writer}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Actors: <span>{movieInfo.Actors}</span>
                    </MovieInfo>
                    <MovieInfo>
                        Plot: <span>{movieInfo.Plot}</span>
                    </MovieInfo>
                </InfoColumn>

            </> : "Loading..."}
        </Container>
    )
}

export default MoviesInfo