import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const SeverityPillRoot = styled("span")(({ theme, ownerState }) => {
  const backgroundColor = theme.palette[ownerState.color].main;

  return {
    alignItems: "center",
    backgroundColor,
    borderRadius: 12,
    color: "#fff",
    cursor: "default",
    display: "inline-flex",
    flexGrow: 0,
    flexShrink: 0,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 2,
    fontWeight: 600,
    justifyContent: "center",
    letterSpacing: 0.5,
    minWidth: 20,
    paddingLeft: 10,
    paddingRight: 10,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
  };
});

export const SeverityPill = (props) => {
  const { color = "primary", children, ...other } = props;

  const ownerState = { color };

  return (
    <SeverityPillRoot ownerState={ownerState} {...other}>
      {children}
    </SeverityPillRoot>
  );
};

SeverityPill.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "info",
    "warning",
    "success",
  ]),
};
