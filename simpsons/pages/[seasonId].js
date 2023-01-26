import React from "react";
import { useRouter } from "next/router";

const Season = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return <div>Season {params}</div>;
};

export default Season;
