import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config'

export function useHomeFetch() {
    const [ state, setState ] = useState ({ movies: [] });
    const [ loading, setLoading ] = useState (false);
    const [ error, setError ] = useState (false);

    // console.log(state);

    const fetchMovies = async endpoint => {
        setLoading(true)
        setError(false)

        try {
            // why 2 await? --> wait till get api data, then wait till turn that data into json
            const result = await (await fetch(endpoint)).json();    // parse api data into json 
            // console.log(result)

            setState( prevState => ({
                ...prevState,
                movies: [...result.results],
                heroImage: prevState.heroImage || result.results[0],  
                // || syntax: if A true -> keep A;     if A false -> run B
                // && syntax: if A true -> run B;  
                currentPage: result.page,
                totalPages: result.total_pages,
            }))
            // state.movies

        } catch (error) {
            setError(true);
            console.log(error);
        }
        setLoading(false); 
    }

    // Fetch popular movies initially on mount
    useEffect(() => {
        fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
    }, [])  // empty array [] --> useEffect() only run once on mount

    return [
            { state, loading, error }, 
            fetchMovies 
        ]
    ;
}

export default useHomeFetch;
