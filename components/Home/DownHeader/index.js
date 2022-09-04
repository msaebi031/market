import { Fragment } from "react";
import { Container, Grid, Typography, Box } from '@mui/material';
import { DiscountOutlined, HistoryToggleOffOutlined, VisibilityOutlined, ElectricRickshawOutlined } from '@mui/icons-material';


const DownHeader = () => {

    const items = [
        { name: "قیمت ارزان", icon: <DiscountOutlined color="dark" fontSize="large" />, paragraf: "ارزان ترین قیمت ها را با بهترین کیفیت در فروشگاه ما دریافت نمایید (ما کیفیت و قیمت خود را تضمین می کنیم)." },
        { name: "صرفه جویی در وقت", icon: <HistoryToggleOffOutlined color="dark" fontSize="large" />, paragraf: "با سفارش آنلاین می توانید در وقت خود بسیار صرفه جویی کنید و معطلی خود را به صفر برسانید." },
        { name: "مشاهده محصولات", icon: <VisibilityOutlined color="dark" fontSize="large" />, paragraf: "شما میتوانید با مشاهده بسیار اسان تمامی محصولات از تعداد محصولات  و قیمت آن ها با خبر شوید." },
        { name: "تحویل فوری", icon: <ElectricRickshawOutlined color="dark" fontSize="large" />, paragraf: "با سفارش آنلان همراه با پیک می توانید در کمترین زمان ممکن سفارش خود را درب منزل تحویل بگیرید." },
    ]

    return (
        <Fragment>
            <div className="downHeader w-100">
                <Container maxWidth="lg">
                    <Grid container display="flex" alignItems="center" py={4}>
                        {items.map((item, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3} display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
                                {item.icon}
                                <Typography color="dark.main" variant='h6' component="h3" textAlign="center" className="font-bold">{item.name}</Typography>
                                <Typography color="dark.light" variant='p' component="p" textAlign="center" className="fontsizeParagraf">{item.paragraf}</Typography>

                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </Fragment>
    );
};

export default DownHeader;
