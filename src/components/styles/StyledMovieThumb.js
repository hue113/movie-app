import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }


  a {
    text-decoration: none;
  }
  p {
    font-family: 'Abel', sans-serif;
    font-size: 26px;
    line-height: 26px;
    text-align: center;
    color: black;
    font-weight: 700;
    margin: 15px;

    @media screen and (max-width: 768px) {
      font-size: 23px;
      line-height: 20px;
      color: black;
    }


  }
`;
