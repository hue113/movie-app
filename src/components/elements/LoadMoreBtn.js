import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

function LoadMoreBtn({ text, callback }) {
    return (
        <StyledLoadMoreBtn type="button" onClick={callback} >
            {text}
        </StyledLoadMoreBtn>
    );
}

LoadMoreBtn.protoTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
}

export default LoadMoreBtn;