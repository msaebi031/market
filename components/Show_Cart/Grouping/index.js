import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { GiWheat, GiFruitBowl, GiMilkCarton, GiCupcake } from "react-icons/gi";
import { BsCheckAll } from "react-icons/bs";
import { editProduct } from "../../redux/product/action";
import { handleCheckCart } from "../../redux/cart/action";
import _ from "lodash";
const Grouping = ({ product, cart }) => {
  const items = [
    { icon: <BsCheckAll size="1.5rem" />, name: "همه" },
    { icon: <GiWheat size="1.5rem" />, name: "غلات" },
    { icon: <GiFruitBowl size="1.5rem" />, name: "میوه و سبزیجات" },
    { icon: <GiMilkCarton size="1.5rem" />, name: "لبنیات" },
    { icon: <GiCupcake size="1.5rem" />, name: "خوراکی" },
  ];

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const itemGrid = value === 0 ? product : _.groupBy(product, "value")[value];
  return (
    <Fragment>
      <Tabs
        className="grouping-tabs"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        // visibleScrollbar={true}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        indicatorColor="none"
        textColor="secondary"
        allowScrollButtonsMobile
      >
        {items.map((item, index) => (
          <Tab
            sx={{ color: "teal.light", fontSize: "1rem" }}
            iconPosition="end"
            className="font-bold grouping-tab"
            icon={item.icon}
            key={index}
            label={item.name}
          />
        ))}
      </Tabs>
      {itemGrid == undefined ? (
        <Box mt={2}>
          <Typography
            className="font-bold"
            color="light.light"
            gutterBottom
            variant="body1"
            component="p"
          >
            محصولی جهت نمایش وجود ندارد!
          </Typography>
        </Box>
      ) : (
        <Grid marginTop={3} spacing={2} container>
          {itemGrid.map((item, index) => {
            var find = cart.find((o) => o.id === item.id);
            return (
              <Grid key={index} item xs={12} sm={4} md={3} lg={2.4}>
                <Card
                  sx={{
                    width: { xs: "309px", sm: "auto" },
                    m: { xs: "0 auto" },
                  }}
                  className="cart-card"
                >
                  <CardMedia display="initial" className="card-img-showcard">
                    <Box
                      src={`/uploads/${item.name}.png`}
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
                    <Box mt={2} className="justify-evenly align-center d-flex">
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
                      disabled={item.count === 0 || !item.count ? true : false}
                    >
                      {find ? "ویرایش کردن" : "اضافه کردن"}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Fragment>
  );
};

export default Grouping;
