import Head from "next/head";
import { Fragment } from "react";
import App from "../container/App";

import { wrapper } from "../components/redux/store";
import { addProduct } from "../components/redux/product/action";
import { getProduct } from "../components/Servise/getData";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>فروشگاه مواد غذایی نسیم</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </Fragment>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const res = await getProduct();
  store.dispatch(addProduct(res.data.data));
  return {
    props: {
      authState: false,
    },
  };
});

export default Home;
