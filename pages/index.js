import Head from "next/head";
import { Fragment, useEffect } from "react";
import App from "../container/App";

// import { wrapper } from "../components/redux/store";
import { addProduct } from "../components/redux/product/action";
// import { getProduct } from "../components/Servise/getData";
import { useDispatch } from "react-redux";
import http from "../components/utils/httpServise";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMyAPI() {
      const res = await http.get("/api/product/select");
      dispatch(addProduct(res.data.data));
    }

    fetchMyAPI();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>فروشگاه مواد غذایی نسیم</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="گروه برنامه نویسی،برنامه نویس سایت،طراح سایت"
        />
        <meta
          name="keywords"
          content="برنامه نویسی ، طراحی و توسعه دهنده وب،طراحی وبسایت"
        />
        <meta name="author" content="Target Designer" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <App />
    </Fragment>
  );
};

// export const getStaticProps = wrapper.getStaticProps((store) => async () => {
//   const res = await getProduct();
//   store.dispatch(addProduct(res.data.data));
//   return {
//     props: {
//       authState: false,
//     },
//   };
// });

export default Home;
