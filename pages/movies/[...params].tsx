import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import Seo from "../../components/Seo";

const Detail: React.FC = ({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const [title, id]: any = params || [];
  return (
    <div>
      <Seo title={title} />
      {title}
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
