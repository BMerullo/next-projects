import React from "react";
import { useRouter } from "next/router";

export const Episodes = ({ episodes }) => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return (
    <section>
      {episodes.map((episode) => {
        return <div>{episode.name}</div>;
      })}
    </section>
  );
};

export default Episodes;

export async function getStaticPaths() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes");
  const data = await response.json();
  const paths = data.map((episode) => {
    return {
      params: {
        episodeId: `${episode.name}`,
      },
      params: {
        seasonId: `${episode.season}`,
      },
    };
  });
  return {
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
