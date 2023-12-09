import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Ruwet Staking</title>
        <meta
          name="description"
          content="Ruwet Staking"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
