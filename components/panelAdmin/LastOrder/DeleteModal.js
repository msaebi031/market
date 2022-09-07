import { Box, Button, Modal, Typography } from "@mui/material";
import http from "../../utils/httpServise";

const DeleteModal = ({ openModalDelete, handleOpenModalDelete, id }) => {
  const handleDelete = () => {
    http.get("/api/product/delete", {
      id,
    });
  };

  return (
    <Modal
      open={openModalDelete}
      onClose={() => handleOpenModalDelete()}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="style-modal" sx={{ width: { xs: "80%", md: "40%" } }}>
        <Typography
          textAlign="center"
          mt={2.5}
          component="p"
          variant="body2"
          color="dark.light"
          pb={2}
        >
          آیا از دیلیت کردن محصول مطمئن هستید؟
        </Typography>
        <Box
          mb={3}
          textAlign="center"
          display={{ xs: "grid", sm: "flex" }}
          justifyContent="center"
        >
          <Button
            onClick={() => handleDelete()}
            color="success"
            variant="contained"
            sx={{ ml: { xs: 0, sm: 2 } }}
          >
            بله
          </Button>
          <Button
            onClick={() => handleOpenModalDelete()}
            sx={{ mt: { xs: 1.6, sm: 0 } }}
            color="error"
            variant="contained"
          >
            خیر
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
