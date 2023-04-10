import Head from "next/head";
import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NM Digital</title>
      </Head>
      <Header />
      <h1 className="text-green-500">Welcome</h1>
      <p className="text-blue-900">this is my p</p>
    </div>
  );
};

export default Home;
