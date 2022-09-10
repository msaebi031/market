import { Fragment, useState } from "react";
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeepModal from "./Modal";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../redux/product/action";
import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";
import { deleteCart } from "../redux/cart/action";

const Cart = () => {
  const [openKeepModal, setOpenKeepModal] = useState(false);
  const { cart, product } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOpenKeepModal = () => {
    setOpenKeepModal(!openKeepModal);
  };
  return (
    <Fragment>
      <Container maxWidth="xl">
        {cart.length === 0 ? (
          <Box marginTop={13} textAlign="center">
            <TbFaceIdError size="13rem" color="rgba(255, 255, 255, 0.712)" />
            <Typography
              component="h6"
              variant="subtitle1"
              className="font-bold"
              color="light.light"
            >
              محصولی جهت نمایش وجود ندارد ، لطفا از گزینه ثبت سفارش ابتدا
              محصولات خود را سفارش دهید
            </Typography>
            <Box paddingTop={2.4} py={3}>
              <Link href="/showcart">
                <Button
                  className="btn-header"
                  sx={{ color: "light.main" }}
                  size="large"
                  color="warning"
                  variant="contained"
                >
                  ثبت سفارش
                </Button>
              </Link>
            </Box>
          </Box>
        ) : (
          <Grid marginTop={12} spacing={2} container>
            <Grid
              className="text-center d-flex justify-between align-center"
              item
              xs={12}
            >
              <a className="btn btn-1 font-bold" onClick={handleOpenKeepModal}>
                <svg>
                  <rect x="0" y="0" fill="none" width="100%" height="100%" />
                </svg>
                نهایی کردن خرید
              </a>
              <Link href="/">
                <Button
                  sx={{ color: "warning.main" }}
                  color="warning"
                  endIcon={<KeyboardBackspaceIcon sx={{ mr: 1.3 }} />}
                  className="font-bold link"
                >
                  {" "}
                  بازگشت
                </Button>
              </Link>
            </Grid>
            {cart.map((item, index) => (
              <Grid mt={1} key={index} item xs={12} md={6} lg={6}>
                <Card
                  sx={{
                    textAlign: { xs: "right", sm: "right" },
                    display: { xs: "flex", sm: "flex" },
                  }}
                  className="align-center buygoods-card"
                >
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: "25%", sm: "25%" } }}
                    image={`/uploads/${item.name}.png`}
                    alt="Live from space album cover"
                    className="card-img-cart"
                  />
                  {/* <CardMedia className="card-img-cart">
                    <Box
                      src={`/img/show-cart/${item.name}.png`}
                      component="img"
                      alt={item.name}
                      className="img-showcard"
                    />
                  </CardMedia> */}
                  <CardContent
                    sx={{
                      width: { xs: "100%", sm: "100%" },
                      justifyContent: {
                        xs: "space-between",
                        sm: "space-between",
                      },
                      display: { xs: "flex", sm: "flex" },
                    }}
                    className="d-flex align-center"
                  >
                    <Box>
                      <Typography
                        component="h6"
                        variant="body1"
                        className="font-bold"
                        color="light.light"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        mt={1}
                        color="teal.main"
                        component="p"
                        className="font-size-dic"
                      >
                        {item.dic}
                      </Typography>
                      <Typography
                        pt={5}
                        variant="subtitle2"
                        color="yellow.main"
                        component="div"
                      >
                        <span className="font-salamat">
                          {parseInt(item.price).toLocaleString("ir-ir")}
                        </span>{" "}
                        تومان
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions mt={2} className="d-block text-center">
                    <Box className="justify-evenly align-center d-flex">
                      <IconButton
                        color="teal"
                        onClick={() =>
                          dispatch(
                            editProduct(
                              product,
                              item.id,
                              true,
                              item.taraz === "گرم" ? "gr" : "kg"
                            )
                          )
                        }
                      >
                        <AddIcon />
                      </IconButton>
                      <Typography
                        px={{ xs: 0, sm: 2 }}
                        className="font-bold"
                        variant="h6"
                        color="warning.main"
                      >
                        {item.count}
                      </Typography>
                      <IconButton
                        color="teal"
                        disabled={
                          item.count === 0 || !item.count ? true : false
                        }
                        onClick={() =>
                          dispatch(
                            editProduct(
                              product,
                              item.id,
                              false,
                              item.taraz === "گرم" ? "gr" : "kg"
                            )
                          )
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                    </Box>
                    <Typography
                      variant="overline"
                      color="teal.light"
                      className="font-light letter-spacing-0"
                    >
                      {item.taraz}
                    </Typography>
                    <Box mr={1} mt={2}>
                      <IconButton
                        color="red"
                        onClick={() => dispatch(deleteCart(cart, item.id))}
                      >
                        <DeleteOutlineIcon className="buygoods-bordericon" />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <KeepModal
          handleOpenKeepModal={handleOpenKeepModal}
          openKeepModal={openKeepModal}
          setOpenKeepModal={setOpenKeepModal}
        />
      </Container>
    </Fragment>
  );
};

export default Cart;
