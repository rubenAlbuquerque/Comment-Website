import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import Home_profile from "../components/Home_profile";
import RightColumn from "../components/RightColumn";

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Comment App</title>
                <link rel="icon" href="/perfil.png" />
            </Head>
            <Header />

            <div className="grid grid-cols-12 gap-2 m-2">
                <Home_profile />
                <Feed />
                <RightColumn />
            </div>
        </div>
    );
};

export default Home;
