import React from "react";

const MainPage = ({ episodes }) => {
  console.log(episodes);
  return (
    <main>
      <h1>SIMPSONS EPISODE GUIDE</h1>
      {episodes
        .filter((episode) => episode.episode === 1)
        .map((filteredEpisode) => {
          return <div>Season {filteredEpisode.season}</div>;
        })}
    </main>
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
