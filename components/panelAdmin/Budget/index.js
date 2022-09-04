import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import {
  Inventory2Outlined,
  CurrencyExchangeOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";

const Budget = () => {
  const items = [
    {
      name: "تعداد کل سفارشات",
      count: "201 عدد",
      icon: <Inventory2Outlined />,
      color: "success.main",
    },
    {
      name: "جمع تمامی فروش",
      count: "590,582 تومان",
      icon: <CurrencyExchangeOutlined />,
      color: "warning.main",
    },
    {
      name: "تعداد محصولات",
      count: "50 عدد",
      icon: <ReceiptLongOutlined />,
      color: "error.main",
    },
  ];
  return (
    <Grid container spacing={2} py={2}>
      {items.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card className="card-budget">
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar
                  sx={{
                    backgroundColor: item.color,
                    height: 56,
                    width: 56,
                  }}
                >
                  {item.icon}
                </Avatar>
                <Box pr={4}>
                  <Typography
                    pb={1.3}
                    color="dark.light"
                    component="p"
                    variant="h6"
                    className="title-budget"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    color="dark.main"
                    className="font-bold paragraf-budget"
                    component="p"
                    variant="h5"
                  >
                    {item.count}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Budget;
