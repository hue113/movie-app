import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

function MovieThumb({ image, movieId, clickable }) {
    return (
        <StyledMovieThumb>
            {clickable ?
                <Link to={`/${movieId}`} >
                    <img className="clickable" src={image} alt="moviethumb" />
                </Link>    
                
                
                // ? <img className="clickable" src={image} alt="moviethumb" />
                : <img src={image} alt="moviethumb"/>
            }

            {/* {clickable ?
                ? <img className="clickable" src={image} alt="moviethumb" />
                : <img src="image" alt="moviethumb"/>
            } */}
        </StyledMovieThumb>
        
    );
}

MovieThumb.propTypes = {
    image: PropTypes.string,        // url for image
    movieId: PropTypes.number,
    clickable: PropTypes.bool
}

export default MovieThumb;