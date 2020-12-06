import React, { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config'

export function useHomeFetch({ searchTerm }) {
    const [ state, setState ] = useState ({ movies: [] });
    const [ loading, setLoading ] = useState (false);
    const [ error, setError ] = useState (false);

    const fetchMovies = async endpoint => {
        setLoading(true)
        setError(false)

        const isLoadMore = endpoint.search('page');
        try {
            // why 2 await? --> wait till get api data, then wait till turn that data into json
            const result = await (await fetch(endpoint)).json();    // parse api data into json 

            setState( prevState => ({
                ...prevState,
                movies: 
                    (isLoadMore !== -1)            
                        ? [...prevState.movies, ...result.results] // if load more, it will return a new array with previous movies & also merge with new results we get
                        : [...result.results],     // if not load more, it will delete the old movies and only return new results
                heroImage: prevState.heroImage || result.results[0],  
                // || syntax: if A true -> keep A;     if A false -> run B
                // && syntax: if A true -> run B;  
                currentPage: result.page,
                totalPages: result.total_pages,
            }))

        } catch (error) {
            setError(true);
            console.log(error);
        }
        setLoading(false);    
    }

    // Fetch popular movies initially on mount
    useEffect(() => {
        if (sessionStorage.homeState) {     // check if sessionStorage exists
            // console.log('Grabbing from sessionStorage')
            setState( JSON.parse(sessionStorage.homeState)) // use JSON.parse to parse it back into object
            setLoading(false)    
        } else {
            console.log('Grabbing from API')
            fetchMovies(POPULAR_BASE_URL);
            // BEFORE: fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
        }
    }, [])  // empty array [] --> useEffect() only run once on mount

    // sessionStorage
    useEffect( () => {
        if(!searchTerm) {           // check whether we have searchTerm or not
            // console.log('Writing to sessionStorage')
            sessionStorage.setItem('homeState', JSON.stringify(state))
        }
    }, [searchTerm, state])         // depends on searchterm & state

    return [
            { state, loading, error }, 
            fetchMovies 
        ]
    ;
}

export default useHomeFetch;
