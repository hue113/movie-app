import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledNavigation } from '../styles/StyledNavigation';

function Navigation({ movie }) {
    return (
        <StyledNavigation>
            <div className='navigation-content'>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>|</p>
                <p>{movie}</p>
            </div>
        </StyledNavigation>
    );
}

Navigation.propTypes = {
    movie: PropTypes.string
}

export default Navigation;