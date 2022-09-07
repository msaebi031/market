import {
  Box,
  Modal,
  Button,
  Typography,
  IconButton,
  Divider,
  Alert,
} from "@mui/material";
import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ViewFactor from "../panelAdmin/LastOrder/ViewFactor";
import ModalFinal from "./ModalFinal";
import http from "../utils/httpServise";
import { useSelector, useDispatch } from "react-redux";
import { editCart } from "../redux/cart/action";
import ModalOnline from "./ModalOnline";

export default function KeepModal({
  handleOpenKeepModal,
  openKeepModal,
  setOpenKeepModal,
}) {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(!openSuccessModal);
  };

  const handleOpen = () => setOpen(!open);

  const handleOpenModalOnline = () => setOpenModal(!openModal);

  const handleRegisterOrder = async (cart) => {
    await http.post("/api/order/create", {
      data: cart,
    });
    await dispatch(editCart([]));
  };

  return (
    <div>
      <Modal
        open={openKeepModal}
        onClose={handleOpenKeepModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
          <Box display="flex" alignItems="center" p={2}>
            <Typography component="p" className="font-bold" flexGrow="1">
              نهایی کردن خرید
            </Typography>
            <IconButton onClick={() => handleOpenKeepModal()}>
              <CloseRoundedIcon color="error" />
            </IconButton>
          </Box>
          <Divider className="divider-bg" />
          <Typography
            mt={2.5}
            component="p"
            variant="body2"
            color="dark.light"
            pr={1.5}
          >
            <strong>دریافت حضوری :</strong> در دریافت حضوری شما سفارش خود را در
            فروشگاه دریافت می کنید، نحوه پرداخت سفارش شما بصورت پرداخت در
            فروشگاه و چک می باشد.
          </Typography>
          <Typography
            mt={2.5}
            component="p"
            variant="body2"
            color="dark.light"
            pb={2}
            pr={1.5}
          >
            <strong>دریافت آنلاین :</strong> در دریافت آنلاین شما سفارش خود را
            درب منزل دریافت می کنید،نحوه پرداخت میتواند بصورت انلاین یا درب منزل
            باشد.
          </Typography>
          <Divider className="divider-bg" />
          <Typography
            mt={2.5}
            component="p"
            variant="body2"
            color="dark.light"
            pr={1.5}
          >
            <strong>هزینه فاکتور :</strong> کل هزینه سفارش شما :{" "}
            <span className="font-salamat">
              {parseInt(9852465).toLocaleString("ir-ir")}
            </span>{" "}
            تومان ، و با اعمال 5% درصد تخفیف خرید در سایت :{" "}
            <span className="font-salamat">
              {parseInt(8564245).toLocaleString("ir-ir")}
            </span>{" "}
            تومان می باشد.{" "}
          </Typography>
          <Button
            sx={{ color: "primary.main", mb: 2 }}
            className="font-bold link"
            onClick={() => handleOpen()}
          >
            {" "}
            جهت مشاهده فاکتور کلیک کنید.
          </Button>
          <Divider className="divider-bg" />
          <Typography
            component="p"
            variant="body2"
            color="dark.light"
            pt={2}
            pr={1.5}
          >
            <strong>توجه :</strong> پس از کلیک بر روی یکی از گزینه های زیر
            پرداخت نهایی و غیر قابل بازگشت می باشد.
          </Typography>
          <Box my={3} className="d-flex justify-center">
            <Button
              sx={{ color: "light.main", ml: 2 }}
              color="warning"
              variant="contained"
              onClick={() => {
                setOpenKeepModal(false);
                handleOpenSuccessModal();
                handleRegisterOrder(cart);
              }}
            >
              دریافت حضوری
            </Button>
            <Button
              sx={{ color: "light.main" }}
              color="success"
              variant="contained"
              onClick={() => {
                setOpenKeepModal(false);
                handleOpenModalOnline();
              }}
            >
              دریافت آنلاین
            </Button>
          </Box>
        </Box>
      </Modal>
      <ModalFinal
        handleOpenSuccessModal={handleOpenSuccessModal}
        openSuccessModal={openSuccessModal}
      />
      <ModalOnline
        openModal={openModal}
        handleOpenModalOnline={handleOpenModalOnline}
      />
      <ViewFactor open={open} handleOpen={handleOpen} />
    </div>
  );
}
