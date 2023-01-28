import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const Season = () => {
  const router = useRouter();
  const { seasonId } = router.query;

  return <Layout>Season {seasonId}</Layout>;
};

export default Season;
