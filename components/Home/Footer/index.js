import { ExpandLess, Favorite } from "@mui/icons-material";
import { Box, Typography, Link, IconButton, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box className="bg-footer" py={2}>
      <Container maxWidth="xl">
        <Box className="d-flex justify-between align-center">
          <Box className="design-end">
            <Typography variant="h6" component="h2" color="light.main" pb={1}>
              طراحی شده با <Favorite color="error" /> توسط{" "}
              <Link className="colorLink" href="https://target-designer.com/">
                تارگت دیزاینر
              </Link>
            </Typography>
            <Typography variant="p" component="p" color="light.main">
              &copy; تمامی حقوق این سایت محفوظ می باشد .
            </Typography>
          </Box>

          <Box>
            <IconButton href="#">
              <ExpandLess color="warning" className="arrowUp" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
