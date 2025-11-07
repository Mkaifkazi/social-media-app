import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
<<<<<<< HEAD
  borderRadius: "16px",
  boxShadow: theme.palette.mode === "dark"
    ? "0px 4px 12px rgba(0, 0, 0, 0.3)"
    : "0px 4px 12px rgba(0, 0, 0, 0.08)",
  transition: "all 0.3s ease-in-out",
  border: `1px solid ${theme.palette.mode === "dark"
    ? "rgba(255, 255, 255, 0.05)"
    : "rgba(0, 0, 0, 0.05)"}`,
  "&:hover": {
    boxShadow: theme.palette.mode === "dark"
      ? "0px 8px 24px rgba(0, 0, 0, 0.4)"
      : "0px 8px 24px rgba(0, 0, 0, 0.12)",
    transform: "translateY(-2px)",
  },
=======
  borderRadius: "0.75rem",
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
}));

export default WidgetWrapper;
