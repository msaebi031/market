import { format } from "date-fns";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import { DoneAllOutlined, Close, VisibilityTwoTone } from "@mui/icons-material";
import { SeverityPill } from "./severity-pill";

const orders = [
  {
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "غلام نادری",
    },
    createdAt: 1555016400000,
    status: "انجام شده",
  },
  {
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "حسن مظاهری",
    },
    createdAt: 1555016400000,
    status: "در حال انجام",
  },
  {
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "مژدوا",
    },
    createdAt: 155493000005,
    status: "لغو شده",
  },
  {
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "رضا میرزا",
    },
    createdAt: 1554757200000,
    status: "در حال انجام",
  },
  {
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "حسن صائبی",
    },
    createdAt: 1554670800000,
    status: "انجام شده",
  },
  {
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "حسین موزی",
    },
    createdAt: 1554670800000,
    status: "در حال انجام",
  },
];

export const LastOrder = ({ now }) => (
  <Box py={2}>
    <Card className="card-budget my-lastorder">
      <CardContent>
        <Typography
          className="font-bold"
          component="span"
          variant="subtitle1"
          py={4}
          px={1}
        >
          آخرین سفارشات
        </Typography>
        <PerfectScrollbar>
          <TableContainer>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold">کد پیگیری</TableCell>
                  <TableCell className="font-bold">نام سفارش دهنده</TableCell>
                  <TableCell className="font-bold">شماره همراه</TableCell>
                  <TableCell sortDirection="desc" className="font-bold">
                    <Tooltip
                      enterDelay={300}
                      arrow
                      title={
                        <Typography
                          className="font-bold"
                          component="span"
                          variant="inherit"
                        >
                          مرتب شده
                        </Typography>
                      }
                    >
                      <TableSortLabel active direction="desc">
                        تاریخ سفارش
                      </TableSortLabel>
                    </Tooltip>
                  </TableCell>
                  <TableCell className="font-bold">مبلغ سفارش</TableCell>
                  <TableCell className="font-bold">وضعیت</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow hover key={index}>
                    <TableCell>{index}#</TableCell>
                    <TableCell>{order.customer.name}</TableCell>
                    <TableCell>09135864578</TableCell>
                    <TableCell>
                      {format(order.createdAt, "dd/MM/yyyy")}
                    </TableCell>
                    <TableCell>{order.amount} تومان</TableCell>
                    <TableCell>
                      <SeverityPill
                        color={
                          (order.status === "در حال انجام" && "warning") ||
                          (order.status === "لغو شده" && "error") ||
                          "success"
                        }
                      >
                        {order.status}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
                      <Tooltip
                        enterDelay={300}
                        arrow
                        title={
                          <Typography
                            className="font-bold"
                            component="span"
                            variant="caption"
                          >
                            مشاهده فاکتور
                          </Typography>
                        }
                      >
                        <IconButton>
                          <VisibilityTwoTone />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                    {now ? (
                      <>
                        <TableCell>
                          <Tooltip
                            enterDelay={300}
                            arrow
                            title={
                              <Typography
                                className="font-bold"
                                component="span"
                                variant="caption"
                              >
                                در حال تکمیل
                              </Typography>
                            }
                          >
                            <IconButton>
                              <Checkbox color="warning" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Tooltip
                            enterDelay={300}
                            arrow
                            title={
                              <Typography
                                className="font-bold"
                                component="span"
                                variant="caption"
                              >
                                انجام شده
                              </Typography>
                            }
                          >
                            <IconButton>
                              <DoneAllOutlined color="success" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Tooltip
                            enterDelay={300}
                            arrow
                            title={
                              <Typography
                                className="font-bold"
                                component="span"
                                variant="caption"
                              >
                                لغو کردن
                              </Typography>
                            }
                          >
                            <IconButton>
                              <Close color="error" />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </>
                    ) : (
                      ""
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  </Box>
);
