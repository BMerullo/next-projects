import React from "react";

import Link from "next/link";
import Layout from "./components/Layout";

const MainPage = ({ episodes }) => {
  // console.log(episodes);
  return (
    <Layout>
      {episodes
        .filter((episode) => episode.episode === 1)
        .map((filteredEpisode) => {
          return (
            <Link href={`${filteredEpisode.season}`} key={filteredEpisode.id}>
              <div>Season {filteredEpisode.season}</div>
            </Link>
          );
        })}
    </Layout>
  );
};

export default MainPage;

export async function getStaticProps() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes");
  const data = await response.json();
  return {
    props: {
      episodes: data,
    },
  };
}
