import React, { useState } from 'react';
import { API_URL, API_KEY, SEARCH_BASE_URL, POPULAR_BASE_URL, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMoreBtn from './elements/LoadMoreBtn';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

// custom Hook
import { useHomeFetch } from './hooks/useHomeFetch'

import NoImage from './images/no_image.jpg'


function Home() {
    
    const [searchTerm, setSearchTerm] = useState('');

    // BEFORE: const [{ state, loading, error }, fetchMovies ] = useHomeFetch(); 
    // If you don't want to destructure the state into smaller: movies, currentPage,...
    // you will need to write state.movies / state.currentPage ... whenever you want to use
    
    // If you destructure state like below, you only need to write movies / currentPage ...
    const [
        { 
            state: { movies, currentPage, totalPages, heroImage },  // destructure state
            loading, 
            error 
    }, fetchMovies ] = useHomeFetch(searchTerm); 


    const searchMovies = search => {
        const endpoint = search 
            ? SEARCH_BASE_URL + search  // SAME AS: ? `${SEARCH_BASE_URL}${search}`   // template literal
            : POPULAR_BASE_URL
        
        setSearchTerm(search)
        fetchMovies(endpoint)
    }

    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`
        // to avoid typing long format (like below) everytime, put these url to config.js as SEARCH_BASE_URL & POPULAR_BASE_URL
        // BEFORE: const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`
        // BEFORE const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint
        fetchMovies(endpoint);
    }

    if (error) return <div>Something went wrong ...</div>;
    if (!movies[0]) return <Spinner />;

    return (
        <>
            { !searchTerm &&
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            />  

            }
            

            <SearchBar callback={searchMovies}/>

            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'} >
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable       // short form of clickable={true} -- Reason: props in JSX will default to true if you don't give it a value;
                        image={
                            movie.poster_path 
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`  // template literal
                                // SAME AS: ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                : NoImage
                        }
                        movieId = {movie.id}
                        movieName = {movie.original_title}
                    />
                ))}
            </Grid>  
            {loading && <Spinner /> }
            {currentPage < totalPages && !loading && 
                <LoadMoreBtn text="Load More" callback={loadMoreMovies}/>
            }
            
            
        </>
    );
};

export default Home;