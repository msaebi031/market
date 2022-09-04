import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';

export const TraficTotal = () => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#D39B22', '#14B8A6', '#D14343'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF',
        fontFamily:"IranSanseDN"
      }
    ],
    labels: ['سفارشات', 'فروش', 'محصولات']
  };

  const options = {
    animation: true,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    },
    plugins: {
        legend: {
            labels: {
                fontFamily: "IranSanseDN",
                // This more specific font property overrides the global property
                font: {
                    size: 14,
                    family:"IranSanseDN"
                }
            },
        }
    },
  };

  const devices = [
    {
      title: 'سفارشات',
      value: 63,
      color: '#D39B22'
    },
    {
      title: 'فروش',
      value: 15,
      color: '#14B8A6'
    },
    {
      title: 'محصولات',
      value: 23,
      color: '#D14343'
    }
  ];

  return (
    <Card className="card-budget" sx={{
            height: 450,
          }}>
      <CardContent>
      <Typography className='font-bold' component="span" variant='subtitle1' py={3} px={1}>نسبت درصد</Typography>

        <Box
          sx={{
            height: 300,
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="body2"
                pb={2}
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h5"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};