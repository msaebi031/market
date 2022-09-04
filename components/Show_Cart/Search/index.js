import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../redux/product/action";
import { handleCheckCart } from "../../redux/cart/action";

const Search = ({ reSearch, product, cart }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setUseSearch(reSearch);
  }, [reSearch]);

  const [useSearch, setUseSearch] = useState("");
  const filteredCart = product.filter((entry) =>
    Object.values(entry).some(
      (val) => typeof val === "string" && val.includes(useSearch)
    )
  );
  // console.log(useSearch);

  return (
    <Fragment>
      <OutlinedInput
        // id="demo-helper-text-misaligned-no-helper"
        placeholder="نام محصول را وارد کنید ..."
        className="search font-light"
        onChange={(e) => setUseSearch(e.target.value)}
        // value={search}
        endAdornment={
          <IconButton position="end">
            <SearchIcon color="warning" />
          </IconButton>
        }
        fullWidth
      />
      {(() => {
        if (!useSearch) {
          return "";
        } else if (useSearch && filteredCart.length > 0) {
          return (
            <Grid marginTop={3} spacing={2} container>
              {filteredCart.map((item, index) => {
                var find = cart.find((o) => o.id === item.id);
                return (
                  <Grid key={index} item xs={12} sm={4} md={3} lg={2.4}>
                    <Card className="cart-card">
                      <CardMedia
                        display="initial"
                        className="card-img-showcard"
                      >
                        <Box
                          src={`/img/show-cart/${item.name}.png`}
                          component="img"
                          alt={item.name}
                          className="img-showcard"
                        />
                      </CardMedia>
                      <Box mt={2}>
                        <Typography
                          className="font-bold"
                          color="light.light"
                          gutterBottom
                          variant="body1"
                          component="p"
                        >
                          {item.name}
                        </Typography>
                        <Box
                          mt={2}
                          className="justify-evenly align-center d-flex"
                        >
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
                            className="font-bold"
                            variant="h6"
                            color="warning.main"
                          >
                            {item.count ? item.count : 0}
                            {}
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
                          className="font-light letter-spacing-0"
                          variant="overline"
                          color="teal.light"
                        >
                          {item.taraz}
                        </Typography>
                      </Box>
                      <Box>
                        <Divider sx={{ my: 0.2 }} variant="middle" />
                      </Box>
                      <CardActions
                        sx={{ mt: "-20" }}
                        className="justify-between align-center d-flex"
                      >
                        <Typography
                          className="font-light"
                          variant="body2"
                          color="yellow.main"
                        >
                          <span className="font-salamat">
                            {parseInt(item.price).toLocaleString("ir-ir")}
                          </span>{" "}
                          تومان
                        </Typography>
                        <Button
                          variant="outlined"
                          color="warning"
                          size="small"
                          className="font-light"
                          onClick={() =>
                            dispatch(handleCheckCart(product, cart, item.id))
                          }
                          disabled={
                            item.count === 0 || !item.count ? true : false
                          }
                        >
                          {find ? "ویرایش کردن" : "اضافه کردن"}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          );
        } else {
          return (
            <Box mt={2}>
              <Typography
                className="font-bold"
                color="light.light"
                gutterBottom
                variant="body1"
                component="p"
              >
                هیچ محصولی با این نام پیدا نکردم!
              </Typography>
            </Box>
          );
        }
      })()}
    </Fragment>
  );
};
export default Search;
