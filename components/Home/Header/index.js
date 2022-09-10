import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
} from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <Box className="bg-header">
      <Container maxWidth="xl">
        <Grid className="justify-center" textAlign="center" container>
          <Grid
            item
            xs={12}
            sm={10}
            md={7}
            lg={5.6}
            marginTop={{ xs: 1, sm: 2, md: 3, lg: 5 }}
            pt={{ xs: "110px", lg: "7%" }}
          >
            <Box>
              <Typography
                className="font-bold line-height-2"
                variant="h3"
                component="h1"
                color="light.main"
                fontSize={{ xs: "2.7rem", sm: "3rem" }}
              >
                به سوپـــــر مارکتـــــ نسیم <br />
                خوش آمدید .
              </Typography>
              <Typography
                variant="subtitle1"
                component="p"
                className="font-light"
                color="light.contrastText"
                pb={{ xs: 2, sm: 0.6, md: 0.6, lg: 1.4 }}
                pt={.1}
                fontSize={{ xs: "1rem", sm: "1.1rem" }}
              >
                با سفارش آنلاین می توانید در وقت خود نهایت سرفه جویی را کنید و
                علاوه بر آن قیمت تمامی محصولات راببینید ومحصول دلخواه خود را
                سفارش دهید و در کمترین زمان آن را تحویل بگیرید .
              </Typography>
            </Box>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
