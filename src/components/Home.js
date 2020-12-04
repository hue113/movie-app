import React from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
import Grid from './elements/Grid';
import Header from './elements/Header';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// custom Hook
import { useHomeFetch } from './hooks/useHomeFetch'


function Home() {
    const [{ state, loading, error }, fetchMovies ] = useHomeFetch(); 
    console.log(state);

    if (!state.movies[0]) return <Spinner />;
    if (error) return <div>Something went wrong ...</div>;


    return (
        <>
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
                title={state.heroImage.original_title}
                text={state.heroImage.overview}
                />  
            <Grid />  
            <LoadMoreBtn />
            <MovieThumb />
            <SearchBar />
            <Spinner />
        </>
    );
};

export default Home;