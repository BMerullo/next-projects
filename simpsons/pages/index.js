import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

const MainPage = ({ episodes }) => {
  console.log(episodes);
  return (
    <Layout>
      {episodes
        .filter((episode) => episode.episode === 1)
        .map((filteredEpisode) => {
          return (
            <Link href={`${filteredEpisode.season}`}>
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
