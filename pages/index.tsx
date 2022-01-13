import Seo from "../components/Seo";
import { useQuery } from "react-query";
import { useState } from "react";
import styled from "styled-components";
import Movie from "../components/Movie";

const API_KEY = "718e2999073a086d0d475ffef6579d06";

interface IMovieAPI {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IMovie {
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
}

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieWrap = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: 0px auto;
  margin-top: 30px;
  column-gap: 40px;
  row-gap: 30px;
`;

const Home: React.FC = () => {
  const fetchMovieData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`
    );
    const json = await res.json();
    const movieArr = json;
    return movieArr;
  };
  const { isLoading, data } = useQuery<IMovieAPI>("movieFetch", fetchMovieData);

  return (
    <HomeWrap>
      <Seo title="Home" />
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {data && (
            <MovieWrap>
              {data?.results?.map((movie) => {
                return (
                  <Movie
                    imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                  />
                );
              })}
            </MovieWrap>
          )}
        </>
      )}
    </HomeWrap>
  );
};

export default Home;
