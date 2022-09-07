import {
  Box,
  Modal,
  Button,
  Typography,
  TextField,
  Autocomplete,
} from "@mui/material";
import { useState, useEffect } from "react";
import http from "../../utils/httpServise";
import { successTost, warningTost } from "../../utils/reactTostify";

export default function BtnModal({
  openModalCreate,
  handleOpenModalCreate,
  handleGetPage,
  setIdModalDelete,
  id,
}) {
  const taraz = [
    { label: "کیلو گرم" },
    { label: "گرم" },
    { label: "کیسه ای" },
    { label: "دانه" },
  ];

  const Label = [
    { label: "غلات", value: 1 },
    { label: "میوه و سبزیجات", value: 2 },
    { label: "لبنیات", value: 3 },
    { label: "خوراکی", value: 4 },
  ];

  const [name, setName] = useState("");
  const [dic, setDic] = useState("");
  const [tarazs, setTarazs] = useState("");
  const [labels, setlabels] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [type, setType] = useState("Create");

  const handleRegister = async (event) => {
    event.preventDefault();
    if ((type == "Create" && selectedImage) || type == "Edit") {
      try {
        if (selectedImage) {
          let formData = new FormData();
          formData.append("uploaded_file", event.target.uploaded_file.files[0]);
          formData.append("name", name);
          http.post("/upload", formData);
        }
        let data = {
          name,
          dic,
          taraz: tarazs,
          tab: labels.label,
          value: Number.parseInt(labels.value),
          price: Number.parseInt(price),
          id,
        };
        if (type == "Create") {
          await http.post("/api/product/insert", data);
          successTost("با موفقیت اضافه شد");
        } else {
          await http.post("/api/product/update", data);
          successTost("با موفقیت ویرایش شد");
        }
      } catch (ex) {
        console.log(ex);
      }
      handleOpenModalCreate();
      handleGetPage();
    } else {
      warningTost("لطفا یک عکس اضافه کنید");
    }
  };

  const handleClear = () => {
    setName(null);
    setDic(null);
    setTarazs(null);
    setlabels(null);
    setPrice(null);
    setSelectedImage(null);
    setType("Create");
  };

  const handleGetData = async (id) => {
    const res = await http.post("/api/product/select", { id });
    const { name, taraz, dic, price, tab } = res.data.data;
    setName(name);
    setDic(dic);
    setTarazs(taraz);
    setlabels(tab);
    setPrice(price);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (id !== null) {
      handleGetData(id);
      setType("Edit");
    }
  }, [id]);

  return (
    <Box px={{ xs: 0, sm: 1 }}>
      <Button
        onClick={() => {
          handleOpenModalCreate(), handleClear();
          setIdModalDelete(null);
        }}
        sx={{ color: "light.main" }}
        color="warning"
        variant="contained"
      >
        افزودن محصول
      </Button>
      <Modal
        open={openModalCreate}
        onClose={() => {
          handleOpenModalCreate();
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="btn-edit-modal" width={{ xs: "80%", md: "40%" }}>
          <Typography
            className="font-bold text-center"
            variant="h6"
            component="h6"
            id="parent-modal-title"
          >
            کاربری محصولات
          </Typography>

          <Box mt={3} display="grid">
            <form
              enctype="multipart/form-data"
              onSubmit={handleRegister}
              id="createProduct"
            >
              <TextField
                className="btnModal-input font-light"
                id="outlined-basic"
                label="نام محصول"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
              {/* Upload-img */}
              <Button
                sx={{ mb: 1 }}
                variant="contained"
                component="label"
                fullWidth
              >
                آپلود تصویر محصول
                <input
                  id="file-input"
                  type="file"
                  name="uploaded_file"
                  aria-describedby="uploaded_file"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                  hidden
                />
              </Button>
              {/* Upload-img */}

              <TextField
                className="btnModal-input font-light"
                id="outlined-basic"
                label="توضیح محصول"
                variant="outlined"
                value={dic}
                onChange={(e) => setDic(e.target.value)}
                required
                fullWidth
              />
              <Autocomplete
                fullWidth
                className="btnModal-input font-light"
                disablePortal
                id="combo-box-demo"
                options={taraz}
                value={tarazs}
                renderInput={(params) => (
                  <TextField {...params} label="تراز محصول" required />
                )}
                onChange={(event, value) =>
                  value ? setTarazs(value.label) : ""
                }
              />
              <Autocomplete
                fullWidth
                className="btnModal-input font-light"
                disablePortal
                id="combo-box-demo"
                options={Label}
                value={labels}
                renderInput={(params) => (
                  <TextField {...params} label="دسته بندی محصول" required />
                )}
                onChange={(event, value) => (value ? setlabels(value) : "")}
              />
              <TextField
                className="btnModal-input font-light"
                id="outlined-basic"
                label="قیمت"
                variant="outlined"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                fullWidth
                type="number"
              />
              <Box display="flex" justifyContent="center" alignContent="center">
                <Button
                  sx={{ color: "light.main", ml: 3 }}
                  color="success"
                  variant="contained"
                  type="submit"
                >
                  ثبت کردن
                </Button>
                <Button
                  sx={{ color: "light.main" }}
                  color="error"
                  variant="contained"
                  onClick={() => {
                    handleOpenModalCreate();
                  }}
                >
                  انصراف
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
