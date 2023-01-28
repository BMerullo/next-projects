import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const Season = ({ episodes }) => {
  const router = useRouter();
  console.log(episodes);

  const { seasonId } = router.query;

  console.log(seasonId);

  return (
    <Layout>
      <h1>Season {seasonId}</h1>
      <section>
        {episodes
          .filter((episode) => episode.season === +seasonId)
          .map((filter) => {
            console.log(filter);
            return <div> {filter.name} </div>;
          })}
      </section>
    </Layout>
  );
};

export default Season;

export async function getStaticPaths() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes");
  const data = await response.json();

  const paths = data.map((season) => {
    return {
      params: {
        seasonId: `${season.id}`,
      },
    };
  });
  return {
    // paths: [{ params: { productId: "1" } }],
    paths,
    fallback: true,
  };
}

export async function getStaticProps() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes");
  const data = await response.json();
  return {
    props: {
      episodes: data,
    },
  };
}
