import { ThemeProvider } from "@mui/material";
import theme from "../components/theme";
import { ToastContainer } from "react-toastify";
import { wrapper } from "../components/redux/store";
import { getProduct } from "../components/Servise/getData";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../components/redux/product/action";
import Fixed from "../components/Fixed";
import Router from "next/router";
import Loading from "../components/Loading";
import "react-toastify/dist/ReactToastify.css";
import "../public/css/main.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };

  Router.onRouteChangeComplete = () => {
    setLoading(false);
  };

  // useMemo(() => {
  //   (async () => {
  //     const response = await getProduct();
  //     dispatch(addProduct(response.data.list));
  //   })();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* <Provider store={store}> */}
      <Component {...pageProps} />
      {/* </Provider> */}
      <ToastContainer
        rtl
        theme="dark"
        toastClassName="style-toast font-light"
        autoClose={2000}
      />
      <Fixed />
      {loading ? <Loading /> : ""}
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
