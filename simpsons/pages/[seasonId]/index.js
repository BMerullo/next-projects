import React from "react"
import { useRouter } from "next/router"
import Layout from "@/components/Layout"
import Link from "next/link"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/container"
import Card from "react-bootstrap/Card"

const Season = ({ episodes }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  // console.log(episodes);

  const { seasonId } = router.query

  // console.log(seasonId)

  return (
    <Layout>
      <Container fluid="md">
        <h1>Season {seasonId}</h1>
        <Row className="grid text-container">
          {episodes
            .filter((episode) => episode.season === +seasonId)
            .map((filter) => {
              return (
                <Col className="g-col-4">
                  <Card style={{ width: "18rem" }}>
                    <Link href={`${seasonId}/${filter.name}`} key={filter.id}>
                      <div>
                        <Card.Img variant="top" src={filter.thumbnailUrl} />
                        <Card.Title>{filter.name}</Card.Title>
                      </div>
                    </Link>
                  </Card>
                </Col>
              )
            })}
        </Row>
      </Container>
    </Layout>
  )
}

export default Season

export async function getStaticPaths() {
  const response = await fetch("https://api.sampleapis.com/simpsons/episodes")
  const data = await response.json()

  const paths = data.map((season) => {
    return {
      params: {
        seasonId: `${season.id}`,
      },
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
