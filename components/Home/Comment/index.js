import { Avatar, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import required modules
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Comment = () => {
  const items = [
    {
      img: "/img/content/content-center/img-1.jpg",
      name: "حسین نادری",
      title: "قیمت",
      star: "",
      p: "بهترین قیمت را در این فروشگاه دیدم وهیچ خبری از گران فروشی نبود!",
      star: 4,
    },
    {
      img: "/img/content/content-center/img-2.jpg",
      name: "جعفر صائبی",
      title: "برخورد",
      star: "",
      p: "بهترین نحوه برخورد با مشتری را در این فروشگاه دیدم واقعا عالی بود.",
      star: 5,
    },
    {
      img: "/img/content/content-center/img-3.jpg",
      name: "آرشام یزدانی",
      title: "تنوع محصولات",
      star: "",
      p: "تنوع زیادی رو مشاهده کردم خدا به کسب و کارتون بیشتر از قبل رونق بده!",
      star: 4,
    },
    {
      img: "/img/content/content-center/img-4.jpg",
      name: "شیوا رسول زاده",
      title: "پشتیبانی فعال",
      star: "",
      p: "از نظر من بهترین پشتیبانی آنلاین رو دارن وهمیشه فعالن برای پاسخ دادن",
      star: 5,
    },
  ];

  const creataStar = (max) => {
    var min = [];
    for (var i = 0; i < max; i++) {
      min.push(<StarIcon key={i} color="warning" />);
    }
    return min;
  };

  return (
    <Box my={5}>
      <Box marginBottom={4} textAlign="center">
        <Typography
          color="light.main"
          className="font-bold"
          variant="h5"
          component="h5"
        >
          آنچه مشتری ها در باره ی ما می گویند{" "}
          <span className="span-top">!</span>
        </Typography>
      </Box>
      <Swiper
        styles={{ position: "relative" }}
        modules={[Pagination, Autoplay]}
        // slidesPerView={3}
        loop={true}
        spaceBetween={20}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1090: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Box className="box-center">
              <Box
                sx={{ display: { xs: "flex", sm: "block", md: "flex" } }}
                className="align-center justify-between"
              >
                <Box className="d-flex align-center">
                  <Avatar
                    className="avatar-center"
                    alt="Remy Sharp"
                    src={item.img}
                  />
                  <Box paddingRight="8px">
                    <Typography
                      color="light.light"
                      className="font-bold"
                      variant="body1"
                      component="p"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      marginTop={0.9}
                      color="light.contrastText"
                      className="font-light"
                      variant="body2"
                      component="p"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
                <Box marginTop={{ xs: 0, sm: 2, md: 0 }}>
                  {creataStar(item.star)}
                </Box>
              </Box>
              <Typography
                marginTop={{ xs: 2.4, sm: 0, md: 2.4 }}
                color="light.contrastText"
                className="font-light"
                variant="body2"
                component="p"
              >
                {item.p}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Comment;
