import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";

const DetailMovieWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeatilMovieBanner = styled.img`
  width: 100%;
  height: 285px;
  object-fit: cover;
  border-bottom-left-radius: 200%;
  border-bottom-right-radius: 200%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const DetailMoviePlayButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0px auto;
  border: 1px solid #dbdbdb;
  background-color: white;
  margin-top: -25px;
  cursor: pointer;

  img {
    width: 20%;
    object-fit: scale-down;
  }
`;

const Detail: React.FC = ({
  params,
  res,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
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
            <DetailMoviePlayButton>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXs3OJfXyxZU7eTXNK7psJj5j5ALOnkKxjMSjBFd3Z7h-nEeSMJo8GLLy7XWyneTKKwQ&usqp=CAU"
                }
              />
            </DetailMoviePlayButton>
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
