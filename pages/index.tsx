import { Footer, Header } from "@components/common";
import Contri1 from "@components/contri1/Contri1";
// import Contri from "@components/Contri";
// import Comp from "@components/Comp";
// import Figma from "@components/Figma";
import { AppConstant } from "constant/AppConstant";
import type { NextPage } from "next";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout className="page-home">
      <Head>
        <title>{AppConstant.meta.title}</title>
        <meta name="description" content={AppConstant.meta.description} />
      </Head>
      <ParallaxProvider>
        <Header />
        {/* nitin */}
        {/* <Comp /> */}
        {/* <Figma/> */}
        {/* <Footer /> */}
        {/* <Contri /> */}
        <Contri1/>
      </ParallaxProvider>
    </Layout>
  );
};

export default Home;
