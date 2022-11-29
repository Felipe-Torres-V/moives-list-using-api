import React, { useState } from 'react';
import { MdLocalMovies } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import Movies from '../Movies/Movies';
import axios from 'axios';
import MoviesInfo from '../Movies-Info/MoviesInfo';
import {
  Container, 
  Header, 
  AppName, 
  Search, 
  SearchInput, 
  MovieListContainer, 
  HomePlaceholder
} from './StylesHome'
import { API_KEY } from '../../Config/config';

function Home() {

  const [searchQuery, updateSearchQuery] = useState();
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    updateMovieList(response.data.Search)
  }

  const onTextChange = (event) => {

    clearTimeout(timeoutId)
    updateSearchQuery(event.target.value);
    console.log(searchQuery);
    const timeout = setTimeout(() => fetchData(event.target.value), 500)
    updateTimeoutId(timeout)
  }

  return (
    <Container>
      <Header>
        <AppName>Film List<MdLocalMovies style={{ 'color': '#980a0a' }} /></AppName>
        <Search>
          <SearchInput placeholder='Search Movie' value={searchQuery || ''} onChange={onTextChange} />
          <div><BsSearch /></div>
        </Search>
      </Header>
      <MoviesInfo />
      <MovieListContainer>
        {movieList?.length ?
          movieList.map((movie, index) =>
            <Movies key={index} movie={movie} />) : <HomePlaceholder src='../../public/images.png' />}
      </MovieListContainer>
    </Container>
  );
}

export default Home;