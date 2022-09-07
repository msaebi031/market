import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Divider,
  Typography,
  Button,
  Modal,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Cancel, ReplyAll, CloseRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";

const ViewFactor = ({ open, handleOpen }) => {
  const items = [
    { id: 1, name: "نام کالا" },
    { id: 2, name: "تعداد" },
    { id: 3, name: "قیمت فروشگاه" },
    { id: 4, name: "قیمت کل" },
    { id: 5, name: "وضعیت" },
  ];

  const rowss = [
    {
      id: 1,
      name: "چیتوز موتوری",
      number: 5,
      storePrice: "7000 ت",
      totalPrice: 7000,
    },
    {
      id: 4,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 5,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 6,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 6,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 8,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 10,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 11,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
    {
      id: 12,
      name: "هویج",
      number: 5,
      storePrice: "8000 ت",
      totalPrice: 8000,
    },
  ];

  const [total, setTotal] = useState(0);
  const [cancel, setCancel] = useState(0);
  const [rows, setRows] = useState(rowss);

  const handleNewTotal = (id, status = false) => {
    const rowIndex = rows.findIndex((p) => p.id === id);
    if (status) {
      rows[rowIndex].status = true;
      setTotal(total - rows[rowIndex].totalPrice);
      setCancel(cancel + 1);
    } else {
      rows[rowIndex].status = false;
      setTotal(total + rows[rowIndex].totalPrice);
      setCancel(cancel - 1);
    }
    const rowsCopy = [...rows];
    rowsCopy[rowIndex] = rows[rowIndex];
    setRows(rowsCopy);
  };

  useEffect(() => {
    setTotal(rows.reduce((a, v) => (a = a + v.totalPrice), 0));
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="btn-edit-modal scroll-height"
          bgcolor="dark.contrastText"
          width={{ xs: "80%", md: "40%" }}
        >
          {/* <Box borderRadius={.4} border="1px solid #eeeeee" p="17px" bgcolor="light.contrastText"> */}
          <Box display="flex" alignItems="center" p={2}>
            <Typography component="p" className="font-bold" flexGrow="1">
              فاکتور
            </Typography>
            <IconButton onClick={() => handleOpen()}>
              <CloseRounded color="error" />
            </IconButton>
          </Box>
          <TableContainer>
            <Table
              className="table-minWidth"
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {items.map((item, index) => (
                    <TableCell
                      key={index}
                      sx={{ color: "#424242", border: " 1px solid #e1e1e1" }}
                      variant="h5"
                      size="medium"
                      className="font-bold"
                      align="right"
                    >
                      {item.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow
                      key={index}
                      sx={{
                        color: "#424242",
                        "&:last-child td, &:last-child th": {
                          border: "1px solid #e1e1e1",
                        },
                      }}
                      className={row.status ? "line-through" : ""}
                    >
                      <TableCell
                        sx={{ color: "#424242", border: "1px solid #e1e1e1" }}
                        size="small"
                        align="right"
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#424242", border: "1px solid #e1e1e1" }}
                        className="font-salamat"
                        align="right"
                      >
                        {row.number}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#424242", border: "1px solid #e1e1e1" }}
                        className="font-salamat"
                        align="right"
                      >
                        {row.storePrice}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#424242", border: "1px solid #e1e1e1" }}
                        className="font-salamat"
                        align="right"
                      >
                        {row.totalPrice}
                      </TableCell>
                      <TableCell
                        sx={{ color: "#424242", border: "1px solid #e1e1e1" }}
                        align="right"
                      >
                        {!row.status ? (
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
                            <IconButton
                              onClick={() => handleNewTotal(row.id, true)}
                            >
                              <Cancel color="error" />
                            </IconButton>
                          </Tooltip>
                        ) : (
                          <Tooltip
                            enterDelay={300}
                            arrow
                            title={
                              <Typography
                                className="font-bold"
                                component="span"
                                variant="caption"
                              >
                                برگشت
                              </Typography>
                            }
                          >
                            <IconButton onClick={() => handleNewTotal(row.id)}>
                              <ReplyAll color="secondary" />
                            </IconButton>
                          </Tooltip>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* </Box> */}
          <Box
            className="d-flex justify-between align-center"
            border="1px solid #e1e1e1"
            p={1.1}
          >
            <Typography
              className="font-bold"
              variant="body2"
              component="span"
              color="dark.dark"
            >
              مبلغ کل فاکتور
            </Typography>
            <Typography
              className="font-salamat"
              variant="body2"
              component="span"
              color="success.main"
            >
              {total} تومان
            </Typography>
          </Box>
          <Box
            className="d-flex justify-between align-center"
            border="1px solid #e1e1e1"
            p={1.1}
          >
            <Typography
              className="font-bold"
              variant="body2"
              component="span"
              color="dark.dark"
            >
              تعداد لغو شده ها
            </Typography>
            <Typography
              className="font-salamat"
              variant="body2"
              component="span"
              color="dark.light"
            >
              {cancel} محصول
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewFactor;
