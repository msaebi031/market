import { EditOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Avatar,
  Pagination,
} from "@mui/material";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ModalDelete from "./modalDelete";

const Product = () => {
  const orders = [
    {
      id: 1,
      name: "لوبیا",
    },
    {
      id: 2,
      name: "برنج طبیعت",
    },
    {
      id: 3,
      name: "برنج محسن",
    },
    {
      id: 4,
      name: "زولبیا",
    },
  ];

  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [idModalDelete, setIdModalDelete] = useState(0);

  const handleOpenModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  const handlechangePage = (event, value) => {
    console.log(value);
  };

  return (
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
            محصولات
          </Typography>
          <PerfectScrollbar>
            <TableContainer>
              <Table sx={{ minWidth: 200 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-bold">نام محصول</TableCell>
                    <TableCell className="font-bold">تصویر</TableCell>
                    <TableCell className="font-bold">قیمت</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order, index) => (
                    <TableRow hover key={index}>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>
                        <Avatar
                          alt={order.name}
                          src={"/img/content/content-center/img-1.jpg"}
                          className="avatar-dashboard"
                          variant="rounded"
                        />
                      </TableCell>
                      <TableCell>09454 تومان</TableCell>
                      <TableCell className="text-left">
                        <Tooltip
                          enterDelay={300}
                          arrow
                          title={
                            <Typography
                              className="font-bold"
                              component="span"
                              variant="caption"
                            >
                              ویرایش
                            </Typography>
                          }
                        >
                          <IconButton>
                            <EditOutlined color="secondary" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip
                          enterDelay={300}
                          arrow
                          title={
                            <Typography
                              className="font-bold"
                              component="span"
                              variant="caption"
                            >
                              حذف
                            </Typography>
                          }
                        >
                          <IconButton
                            onClick={() => {
                              setIdModalDelete(order.id);
                              handleOpenModalDelete();
                            }}
                          >
                            <DeleteOutlineOutlined color="error" />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </PerfectScrollbar>
        </CardContent>
        <Box display="flex" justifyContent="center" pb={2}>
          <Pagination
            count={10}
            color="secondary"
            onChange={handlechangePage}
          />
        </Box>
      </Card>

      <ModalDelete
        openModalDelete={openModalDelete}
        handleOpenModalDelete={() => handleOpenModalDelete()}
        id={idModalDelete}
      />
    </Box>
  );
};

export default Product;
