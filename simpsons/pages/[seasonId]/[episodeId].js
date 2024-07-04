import React from "react"
import { useRouter } from "next/router"

export const Episodes = ({ episodes }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  console.log("IDs", router.query)
  const { episodeId, seasonId } = router.query
  console.log("Episode list", episodes)

  return (
    <section>
      {episodes
        .filter((episode) => episode.name === episodeId)
        .map((filter) => {
          return (
            <div key={filter.id}>
              <img src={filter.thumbnailUrl} alt="" />
              <p>{filter.name} </p>
            </div>
          )
        })}
      Episode page
    </section>
  )
}

export default Episodes

export async function getStaticPaths() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes")
  const data = await response.json()
  const paths = data.map((episode) => {
    return {
      params: { episodeId: episode.name, seasonId: episode.id.toString() },
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes")
  const data = await response.json()
  return {
    props: {
      episodes: data,
    },
  }
}
