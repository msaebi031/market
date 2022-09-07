import { Fragment } from "react";
import {
  Alert,
  Box,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ModalFinal = ({ handleOpenSuccessModal, openSuccessModal }) => {
  return (
    <Fragment>
      <Modal
        open={openSuccessModal}
        onClose={handleOpenSuccessModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
          <Box display="flex" alignItems="center" p={2}>
            <Typography component="p" className="font-bold" flexGrow="1">
              اطلاع دهنده{" "}
            </Typography>
            <IconButton onClick={() => handleOpenSuccessModal()}>
              <CloseRoundedIcon color="error" />
            </IconButton>
          </Box>
          <Divider className="divider-bg" />
          <Alert severity="success">
            سفارش شما با موفقیت با کد <span className="font-bold">#1</span> ثبت
            شد
          </Alert>
          <Typography
            component="p"
            variant="body2"
            color="dark.light"
            py={2}
            pr={1.5}
          >
            <strong>توجه :</strong> جهت دریافت سفارش خود این کد را به فروشگاه یا
            پیک دهید.
          </Typography>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default ModalFinal;
