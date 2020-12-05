import React from 'react';

// Components
import MovieInfo from '../components/elements/MovieInfo'
import MovieInfoBar from '../components/elements/MovieInfoBar'
import Actor from '../components/elements/Actor'
import Navigation from '../components/elements/Navigation'
import Grid from '../components/elements/Grid'
import Spinner from '../components/elements/Spinner'

function Movie({ movieId }) {
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

