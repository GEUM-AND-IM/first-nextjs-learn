import Seo from "../components/Seo";
import { useQuery } from "react-query";
import { useState } from "react";

const API_KEY = "718e2999073a086d0d475ffef6579d06";

const Home: React.FC = () => {
  const fetchMovieData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`
    );
    const json = await res.json();
    return json;
  };
  const { isLoading, data } = useQuery("movieFetch", fetchMovieData);

  return (
    <div>
      <Seo title="Home" />
      <div>home</div>
    </div>
  );
};

export default Home;
