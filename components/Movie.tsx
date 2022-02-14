import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

interface IMovieProps {
  imgUrl: string;
  title: string;
  movieId: number;
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
    transition: transform 0.2s ease-in-out;
    transform: scale(1.05) translateY(-10px);
  }
`;

const MovieTitle = styled.h1`
  width: 100%;
  font-size: 15px;
  margin: 0px;
  text-align: center;
`;

const Movie: React.FC<IMovieProps> = ({ imgUrl, title, movieId }) => {
  const router = useRouter();
  const goToMovieDetail = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <MovieBox onClick={() => goToMovieDetail(movieId, title)}>
      <MovieBg src={imgUrl} />
      <MovieTitle>{title}</MovieTitle>
    </MovieBox>
  );
};

export default Movie;
