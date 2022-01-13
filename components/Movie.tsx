import React from "react";
import styled from "styled-components";

interface IMovieProps {
  imgUrl: string;
  title: string;
}

const MovieBg = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const MovieBox = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -20px;
  }
`;

const MovieTitle = styled.h1`
  width: 100%;
  font-size: 15px;
  margin: 0px;
  text-align: center;
`;

const Movie: React.FC<IMovieProps> = ({ imgUrl, title }) => {
  return (
    <MovieBox>
      <MovieBg src={imgUrl} />
      <MovieTitle>{title}</MovieTitle>
    </MovieBox>
  );
};

export default Movie;
