import { Box, Modal, Button, Typography } from "@mui/material";
import { Fragment, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Box mt={5} className="d-flex justify-between">
        <Button
          sx={{ color: "light.main" }}
          color="warning"
          variant="contained"
          onClick={handleOpen}
        >
          دریافت حضوری
        </Button>
        <Button
          sx={{ color: "light.main" }}
          color="warning"
          variant="contained"
        >
          دریافت آنلاین
        </Button>
      </Box>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleOpen}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleOpen}>کنسل</Button>
        </Box>
      </Modal>
    </Fragment>
  );
}
export default function KeepModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <a className="btn btn-1 font-bold" onClick={handleOpen}>
        <svg>
          <rect x="0" y="0" fill="none" width="100%" height="100%" />
        </svg>
        نهایی کردن خرید
      </a>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography
            className="font-bold"
            variant="h6"
            component="h6"
            id="parent-modal-title"
          >
            خرید کردن
          </Typography>

          {/* <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p> */}
          <ChildModal />
        </Box>
      </Modal>
    </div>
  );
}
