import React from 'react';

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

export default Grid;