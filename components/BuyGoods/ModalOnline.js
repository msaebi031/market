import { Fragment, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ModalFinal from "./ModalFinal";

const ModalOnline = ({ openModal, handleOpenModalOnline }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleOpenSuccessModal = () => {
    setOpenSuccessModal(!openSuccessModal);
  };
  return (
    <Fragment>
      <Modal
        open={openModal}
        onClose={handleOpenModalOnline}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
          <Box display="flex" alignItems="center" p={2}>
            <Typography component="p" className="font-bold" flexGrow="1">
              اطلاع دهنده{" "}
            </Typography>
            <IconButton onClick={() => handleOpenModalOnline()}>
              <CloseRoundedIcon color="error" />
            </IconButton>
          </Box>
          <Divider className="divider-bg" />
          <Typography
            component="p"
            variant="body2"
            color="dark.light"
            py={2}
            pr={1.5}
          >
            <strong>توجه :</strong> لطفا نوع پرداخت خود را انتخاب کنید
          </Typography>
          <Box my={3} className="d-flex justify-center">
            <Button
              sx={{ color: "light.main", ml: 2 }}
              color="warning"
              variant="contained"
              onClick={() => {
                handleOpenModalOnline();
                handleOpenSuccessModal();
              }}
            >
              درب منزل
            </Button>
            <Button
              sx={{ color: "light.main" }}
              color="success"
              variant="contained"
              href="/PaymentRequest?Amount=1000&Mobile=09901000000&Id=1"
              // target="_blank"
            >
              آنلاین
            </Button>
          </Box>
        </Box>
      </Modal>
      <ModalFinal
        handleOpenSuccessModal={handleOpenSuccessModal}
        openSuccessModal={openSuccessModal}
      />
    </Fragment>
  );
};

export default ModalOnline;
