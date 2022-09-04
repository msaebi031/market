import Head from "next/head";
import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import App from "../container/App";

import { wrapper } from "../components/redux/store";
import { addProduct } from "../components/redux/product/action";
import { getProduct } from "../components/Servise/getData";

const Home = () => {
  const dispatch = useDispatch();

  // useEffect(async () => {
  //   // axios
  //   //   .get("/api/product/select")
  //   //   .then((res) => {
  //   const res = await getProduct();
  //   console.log(res.data.data);
  //   dispatch(addProduct(res.data.data));
  //   // })
  //   // .catch();
  // }, []);

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
  console.log(res.data.data);
  store.dispatch(addProduct(res.data.data));
  return {
    props: {
      authState: false,
    },
  };
});

export default Home;
