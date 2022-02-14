import Seo from "../components/Seo";
import styled from "styled-components";
import Movie from "../components/Movie";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

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

const Home: React.FC = ({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <HomeWrap>
      <Seo title="Home" />
      <>
        {results && (
          <MovieWrap>
            {results?.map((movie: IMovie) => {
              return (
                <Movie
                  imgUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  title={movie.title}
                  movieId={movie.id}
                  key={movie.id}
                />
              );
            })}
          </MovieWrap>
        )}
      </>
    </HomeWrap>
  );
};

export default Home;

export async function getServerSideProps({}: GetServerSideProps) {
  const res = await fetch("http://localhost:3000/api/movies");

  const { results } = await res.json();

  return {
    props: {
      results,
    },
  };
}
