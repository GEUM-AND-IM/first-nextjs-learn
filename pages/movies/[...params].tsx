import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { ReactElement } from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";

const DetailMovieWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeatilMovieBanner = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-bottom-left-radius: 200%;
  border-bottom-right-radius: 200%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const DetailMovieHeaderButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailMoviePlayButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  background-color: white;
  margin-top: -25px;
  cursor: pointer;

  img {
    width: 20%;
    object-fit: scale-down;
  }
`;

const DetailMovieSideButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -25px;
  border: 0px;
  background: none;

  &:first-child {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: 20px;
  }

  svg {
    width: 90%;
  }
`;

const DetailMovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 70px;
  margin: 20px 0px;
  box-sizing: border-box;
`;

const DetailMovieTitle = styled.h1`
  font-size: 28px;
  color: black;
  text-align: center;
  margin: 0px;
  margin-top: 30px;
  margin-bottom: 15px;
  word-break: keep-all;
`;

const DetailMovieSubTitle = styled.h2`
  font-size: 18px;
  color: gray;
  text-align: center;
  margin: 0px;
  margin-bottom: 15px;
  font-weight: 300;
`;

const DetailMovieStarWrap = styled.div`
  display: flex;
  margin: 0px auto;
  column-gap: 20px;

  svg {
    width: 15px;
  }
`;

const DetailMovieSubInfoWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailMovieSubInfoItem = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0px;
    color: gray;
    text-align: center;
    font-size: 16px;
    font-weight: 300;
  }

  h2 {
    margin: 0px;
    color: black;
    text-align: center;
    font-size: 18px;
  }
`;

const DetailMovieOverViewWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px;
  padding-top: 0px;
  box-sizing: border-box;
`;

const DetailMovieOverViewTitle = styled.h1`
  font-size: 18px;
  color: black;
  margin: 0px;
`;

const DetailMovieOverViewContent = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
  word-break: break-all;
`;

const Star = (rating: number) => {
  const result: ReactElement[] = [];
  for (let i = rating; i >= 2; i -= 2) {
    result.push(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="#fece3c"
        viewBox="0 0 16 16"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }
  return result;
};

const Detail: React.FC = ({
  params,
  res,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const [title, id]: any = params || [];
  console.log(res);

  return (
    <div>
      <Seo title={title} />
      <DetailMovieWrap>
        {res && (
          <>
            <DeatilMovieBanner
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            />
            <DetailMovieHeaderButtonWrap>
              <DetailMovieSideButton>
                <svg viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                  ></path>
                </svg>
              </DetailMovieSideButton>
              <DetailMoviePlayButton>
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXs3OJfXyxZU7eTXNK7psJj5j5ALOnkKxjMSjBFd3Z7h-nEeSMJo8GLLy7XWyneTKKwQ&usqp=CAU"
                  }
                />
              </DetailMoviePlayButton>
              <DetailMovieSideButton>
                <svg viewBox="0 0 20 20">
                  <path
                    fill="black"
                    d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                  ></path>
                </svg>
              </DetailMovieSideButton>
            </DetailMovieHeaderButtonWrap>
            <DetailMovieInfoWrap>
              <DetailMovieTitle>{title}</DetailMovieTitle>
              <DetailMovieSubTitle>{res.tagline}</DetailMovieSubTitle>
              <DetailMovieStarWrap>
                {Star(res.vote_average)}
              </DetailMovieStarWrap>
              <DetailMovieSubInfoWrap>
                <DetailMovieSubInfoItem>
                  <h1>개봉년도</h1>
                  <h2>{res.release_date.slice(0, 4)}</h2>
                </DetailMovieSubInfoItem>
                <DetailMovieSubInfoItem>
                  <h1>언어</h1>
                  <h2>{res.original_language}</h2>
                </DetailMovieSubInfoItem>
                <DetailMovieSubInfoItem>
                  <h1>러닝타임</h1>
                  <h2>
                    {Math.floor(res.runtime / 60)}시 {res.runtime % 60}분
                  </h2>
                </DetailMovieSubInfoItem>
              </DetailMovieSubInfoWrap>
            </DetailMovieInfoWrap>
            <DetailMovieOverViewWrap>
              <DetailMovieOverViewTitle>개요</DetailMovieOverViewTitle>
              <DetailMovieOverViewContent>
                {res.overview}
              </DetailMovieOverViewContent>
            </DetailMovieOverViewWrap>
          </>
        )}
      </DetailMovieWrap>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params: { params } }: any) {
  const res = await (
    await fetch(`http://localhost:3000/api/movies/${params[1] + ""}`)
  ).json();

  return {
    props: {
      params,
      res,
    },
  };
}
