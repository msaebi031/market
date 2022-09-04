import { Box, Button, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <Grid
      sx={{ justifyContent: { xs: "center", sm: "right" } }}
      textAlign={{ xs: "center", sm: "right" }}
      container
    >
      <Grid item xs={12} md={6.2} marginTop={{ xs: 5, md: 13, lg: 20 }}>
        <Box>
          <Typography
            variant="h5"
            component="h5"
            className="font-bold"
            color="light.main"
          >
            چرا از ما خرید کنید <span className="span-top">؟</span>
          </Typography>
          <Typography
            className="font-light"
            variant="body2"
            component="p"
            color="light.contrastText"
            py={{ xs: 2, sm: 0.6, md: 0.6, lg: 2 }}
          >
            ما در فروش خود ادعایی نداریم اما انصاف ما زبان زد مردم است! ما با
            رعایت کردن تمامی حقوق مشتری فضای خیلی مناسبی را برای خرید شما فراهم
            کرده ایم. اما این تمام کار ما نیست ، با قیمت های های بسیار مناسب و
            نظارت دائمی بر روی محصولات توانسته ایم بهترین و ارزان ترین محوصلات
            را در اختیار شما قرار دهیم. شما میتوانید با خرید از ما این تضمین را
            داشته باشید که بهترین محصول با بهترین قیمت و با بهترین برخورد را
            دریافت می کنید.
          </Typography>
        </Box>
        <Box paddingTop={1.4}>
          <Button
            sx={{ color: "light.main" }}
            color="warning"
            href="/showcart"
            variant="contained"
            fontSize="large"
            size="large"
          >
            خرید کردن
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={5.8} className="d-flex">
        <Box
          component="img"
          alt="img-header"
          src="/img/content/content-center.png"
          m={{ xs: "0 auto", lg: "0 40px 0 0" }}
          width={{ xs: "90%", sm: "80%", md: "90%", lg: "100%" }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
