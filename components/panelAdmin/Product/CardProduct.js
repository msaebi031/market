import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
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
import { useState, useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import http from "../../utils/httpServise";
import BtnModal from "./BtnModal";
import ModalDelete from "./modalDelete";
import ProductSearch from "./ProductSearch";

const CardProduct = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1);
  const [orders, setOrders] = useState([]);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [idModalDelete, setIdModalDelete] = useState(null);

  const handleOpenModalDelete = () => {
    setOpenModalDelete(!openModalDelete);
  };

  const handleOpenModalCreate = () => {
    setOpenModalCreate(!openModalCreate);
  };

  const handleGetPage = async (page) => {
    const res = await http.post("/api/product/selectOfPage", {
      offset: (page - 1) * 10,
      limit: 10,
    });
    const newCount = Math.ceil(res.data.count / 10);
    setCount(newCount);
    setOrders(res.data.data);
  };

  const handleSearch = async (name) => {
    console.log(name);
    const res = await http.post("/api/product/search", { name });
    setOrders(res.data.data);
  };

  useEffect(() => {
    handleGetPage(page);
  }, [page]);

  return (
    <Box py={2}>
      <Card className="card-budget min-height my-lastorder">
        <CardContent>
          <Box pt={2} pb={2} className="d-flex justify-between align-center">
            <Typography
              className="font-bold"
              component="span"
              variant="subtitle1"
              px={{ xs: 0, sm: 1 }}
            >
              محصولات
            </Typography>
            <BtnModal
              openModalCreate={openModalCreate}
              handleOpenModalCreate={() => handleOpenModalCreate()}
              handleGetPage={() => handleGetPage(page)}
              setIdModalDelete={setIdModalDelete}
              id={idModalDelete}
            />
          </Box>
          <ProductSearch handleSearch={handleSearch} />
          {orders.length === 0 ? (
            <Typography
              className="font-bold"
              color="dark"
              variant="body1"
              component="p"
              pt={2}
            >
              محصولی جهت نمایش وجود ندارد!
            </Typography>
          ) : (
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
                        <TableCell>
                          {" "}
                          <span className="font-salamat">
                            {parseInt(order.price).toLocaleString("ir-ir")}
                          </span>{" "}
                          تومان
                        </TableCell>
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
                            <IconButton
                              onClick={() => {
                                setIdModalDelete(order.id);
                                handleOpenModalCreate();
                              }}
                            >
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
          )}
        </CardContent>
        <Box
          justifyContent="center"
          pb={2}
          display={orders.length === 0 ? "none" : "flex"}
        >
          <Pagination
            count={count}
            color="secondary"
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </Box>
      </Card>

      <ModalDelete
        openModalDelete={openModalDelete}
        handleOpenModalDelete={() => handleOpenModalDelete()}
        handleGetPage={() => handleGetPage(page)}
        id={idModalDelete}
      />
    </Box>
  );
};

export default CardProduct;
