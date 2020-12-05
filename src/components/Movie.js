import React from 'react';

// Components
import MovieInfo from '../components/elements/MovieInfo'
import MovieInfoBar from '../components/elements/MovieInfoBar'
import Actor from '../components/elements/Actor'
import Navigation from '../components/elements/Navigation'
import Grid from '../components/elements/Grid'
import Spinner from '../components/elements/Spinner'
import useMovieFetch from './hooks/useMovieFetch';

function Movie({ movieId }) {
    const [ movie, loading, error ] = useMovieFetch(movieId);
    console.log(movie);


    return (
        <>
            <Navigation />
            <MovieInfo />
            <MovieInfoBar />
            <Grid>
                <Actor />
            </Grid>
            <Spinner />
            Movie: {movieId}
        </>
    );
}

export default Movie;

