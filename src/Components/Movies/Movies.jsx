import React from 'react'
import { Link } from 'react-router-dom'
import {
    MovieContainer, 
    MoviePoster, 
    MovieTitle, 
    InfoColumn, 
    MovieInfo
} from "./StylesMovies";

const Movies = (props) => {

    const { Title, Year, imdbID, Type, Poster } = props.movie

    return (
        <Link to={`/MoviesInfo/${imdbID}`}>
            <MovieContainer>
                <MoviePoster src={Poster} />
                <MovieTitle>{Title}</MovieTitle>
                <InfoColumn>
                    <MovieInfo>{Year}</MovieInfo>
                    <MovieInfo>{Type}</MovieInfo>
                </InfoColumn>
            </MovieContainer>
        </Link>
    )
}

export default Movies