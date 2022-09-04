import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Container } from "@mui/material";

import NavBar from "../components/Home/Header/NavBar";
import Header from "../components/Home/Header";
import DownHeader from "../components/Home/DownHeader";
import About from "../components/Home/About";
import Map from "../components/Home/Map";
import Footer from "../components/Home/Footer";

const Comment = dynamic(() => import("../components/Home/Comment"), {
  ssr: false,
});

export default function App() {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <DownHeader />
      <Container maxWidth="lg" className="container-1300">
        <About />
      </Container>
      <Container maxWidth="xl">
        <Comment />
      </Container>
      <Map />
      <Footer />
    </Fragment>
  );
}
