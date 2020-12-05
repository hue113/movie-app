import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid'

// BEFORE: function Grid(props) --> if you use like this, you will have to use props.header / props.children
function Grid({ header, children }) {       // destructuring props --> you can use 'header' instead of props.header
    return (
        <StyledGrid>
            <h1>{header}</h1>
            <StyledGridContent>{children}</StyledGridContent>
        </StyledGrid>
    );
}

Grid.propTypes = {
    header: PropTypes.string
    // no need to write PropTypes for children
}

export default Grid;