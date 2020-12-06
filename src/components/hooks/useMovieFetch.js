import React, { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config'

function useMovieFetch(movieId) {
    const [ state, setState ] = useState ({ });
    const [ loading, setLoading ] = useState (true);
    const [ error, setError ] = useState (false);

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(false)

        try {
            const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
            const result = await (await fetch(endpoint)).json();
            // console.log(result);
            const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
            const creditsResult = await (await fetch(creditsEndpoint)).json();
            // console.log(creditsResult)

            const directors = creditsResult.crew.filter(
                member => member.job === 'Director'
            )

            setState({
                ...result,
                actors: creditsResult.cast,
                directors       // FULL SYNTAX FOR: directors: directors
            })



        } catch (error) {
            setError(true);
            console.log(error);
        } 
        setLoading(false); 

    }, [movieId])    // means this function only change when movieId change (prevent infinite loop)  


    useEffect( () => {
        // console.log(localStorage.movieId)        // undefined
        // console.log(localStorage[movieId])       // has value
        if(localStorage[movieId]) {
            console.log('Grabbing from localStorage')
            setState(JSON.parse(localStorage[movieId]))
            setLoading(false)       // if you don't setLoading(false) --> it will show Spinner because loading=true (Movie.js)
        } else {
            console.log('Grabbing from API')
            fetchData()
        }
    }, [fetchData, movieId])     // if you don't put fetchData in here, it will cause infinite loop

    useEffect( () => {
        localStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state])

    return (
        [state, loading, error]
    );
}

export default useMovieFetch;