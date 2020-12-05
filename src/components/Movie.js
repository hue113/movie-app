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

    if (error) return <div>Something went wrong! </div>
    if (loading) return <Spinner />
    // if (loading || !movie.original_title) return <Spinner />

    return (
        <div>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie}/>
            <MovieInfoBar 
                time={movie.runtime}
                budget={movie.budget}    
                revenue={movie.revenue}
            />
            <Grid header="Actors">
                {movie.actors.map(actor => (
                    <Actor key={actor.credit_id} actor={actor}
                    />
                ))}
            </Grid>
    
        </div>
    );
}

export default Movie;

