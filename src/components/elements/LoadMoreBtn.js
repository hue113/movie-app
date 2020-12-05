import React from 'react';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

function LoadMoreBtn({ text, callback }) {
    return (
        <StyledLoadMoreBtn type="button" onClick={callback} >
            {text}
        </StyledLoadMoreBtn>
    );
}

export default LoadMoreBtn;