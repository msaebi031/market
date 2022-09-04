import { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  HomeRounded,
  DvrRounded,
  InventoryRounded,
  Inventory2Rounded,
} from "@mui/icons-material";
import { NavItem } from "./nav-item";

const items = [
  {
    href: "/panelAdmin",
    icon: <HomeRounded fontSize="small" />,
    title: "خانه",
  },
  {
    href: "/panelAdmin/orders",
    icon: <DvrRounded fontSize="small" />,
    title: "سفارشات",
  },
  {
    href: "/panelAdmin/ordersNow",
    icon: <InventoryRounded fontSize="small" />,
    title: "سفارشات در حال انجام",
  },
  {
    href: "/panelAdmin/product",
    icon: <Inventory2Rounded fontSize="small" />,
    title: "محصولات",
  },
];

export const DashboardSidebar = (props) => {
  const { open, handleOpenMenu } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        handleOpenMenu?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
          <Box pr={2} textAlign="center">
            <NextLink href="/" passHref>
              <a>
                <Box
                  component="img"
                  src={"/img/logo.png"}
                  alt="لوگو"
                  className="widthLogo"
                />
              </a>
            </NextLink>
          </Box>
          <Box px={2}>
            <Box
              className="show-admin"
              display="flex"
              alignItems="center"
              px={3}
              py={2}
            >
              <Box>
                <Avatar
                  alt="پروفایل"
                  src={"/img/content/content-center/img-1.jpg"}
                  className="avatar-dashboard"
                />
              </Box>
              <Box pr={2}>
                <Typography color="inherit" variant="subtitle2">
                  پروا یزدانی
                </Typography>
                <Typography color="neutral.400" variant="caption">
                  مدیر اصلی فروشگاه
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            my: 3,
          }}
        />
        <Box>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="right"
        open={true}
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            color: "#FFFFFF",
            width: "25%",
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="right"
      onClose={() => handleOpenMenu()}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
