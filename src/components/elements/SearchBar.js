import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';

import { StyledSearchBar, StyledSearchBarContent } from '../styles/StyledSearchBar'

function SearchBar({ callback }) {
    const [state, setState] = useState('');
    const timeOut = useRef(null);       // controlled component       
    
    const doSearch = event => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);

        const { value } = event.target;     // ANOTHER SYNTAX FOR: const value = event.target.value;

        clearTimeout(timeOut.current)       // we clear timeout before doing anything else
        setState (value);
    
        timeOut.current = setTimeout( () => {
            callback(value);
        }, 500);

    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x"/>
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    );
}

export default SearchBar;