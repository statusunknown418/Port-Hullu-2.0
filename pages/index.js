import Head from "next/head";
import Image from "next/image";
import { Nav } from "../components/Nav";
import { Header } from "../components/Header";
import { MainContent } from "../components/MainContent";
import requests from "../shared/requests";

// 2 - Now we have access to props
export default function Home({ results }) {
  return (
    <div className="text-xl font-bold font-sans">
      <Head>
        <meta charSet="utf-8" />
        <title>Port HULU 2.0</title>
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Portfolio website, a Hulu clone" />
        <meta lang="en-us" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Header></Header>
      <Nav />
      <MainContent requests={results} />
    </div>
  );
}

// SERVER SIDE RENDERING PART OF THE PROJECT
// FUNCTION SHOULD BE PLACED PER PAGE
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // 1- Get the url user is currently in from TMDB api
  const request = await fetch(
    // Otherwise send to trending
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrend.url}`
  ).then((res) => res.json([]));

  return {
    // 1.1 - Return props for Home component
    props: {
      results: request,
    },
  };
}
