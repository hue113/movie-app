import React from 'react';
import RMDBLogo from '../images/reactMovie_logo.png'    // import & change photo name
import TMDBLogo from '../images/tmdb_logo.svg'          // import & change photo name
import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader'

// 1. Learn how to create a styled basic styled component
// 2. Learn how to handle props in styled components
// 3. Create a global style with styled components

function Header(props) {
    return (
        <StyledHeader>
            <div className="header-content">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
                <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
                
                {/* BEFORE using styledComponents
                <img src={RMDBLogo} alt="rmdb-logo" /> 
                <img src={TMDBLogo} alt="tmdb-logo" /> */}
            </div>
        </StyledHeader>
    );
}

export default Header;

