import { Fragment } from "react";
import NavBar from "../Home/Header/NavBar";
import Head from "next/head";
import Cart from "./Cart";

const Buygoods = () => {
  return (
    <Fragment>
      <Head>
        <title> نسیم | سبد خرید</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Cart />
    </Fragment>
  );
};

export default Buygoods;