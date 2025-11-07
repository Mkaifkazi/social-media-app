<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
<<<<<<< HEAD
  Avatar,
  Badge,
  Fade,
  Slide,
=======
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
<<<<<<< HEAD
=======
  Help,
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
<<<<<<< HEAD
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
=======

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
<<<<<<< HEAD
  const isDarkMode = theme.palette.mode === "dark";

  const fullName = `${user.firstName} ${user.lastName}`;

  // Handle scroll for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <FlexBetween
        padding="1rem 6%"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          backgroundColor: isScrolled
            ? isDarkMode
              ? "rgba(17, 24, 39, 0.8)"
              : "rgba(255, 255, 255, 0.8)"
            : alt,
          boxShadow: isScrolled ? "0 4px 30px rgba(0, 0, 0, 0.1)" : "none",
          transition: "all 0.3s ease",
          borderBottom: isScrolled
            ? `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`
            : "none",
        }}
      >
        <FlexBetween gap="1.75rem">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Typography
              fontWeight="bold"
              fontSize="clamp(1rem, 2rem, 2.25rem)"
              color="primary"
              onClick={() => navigate("/home")}
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent?.main || theme.palette.primary.dark})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  filter: "brightness(1.2)",
                },
              }}
            >
              SocioMedia
            </Typography>
          </motion.div>

          {isNonMobileScreens && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: neutralLight,
                borderRadius: "50px",
                padding: "0.3rem 1rem",
                gap: "1rem",
                width: searchExpanded ? "350px" : "200px",
                transition: "width 0.3s ease",
                border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
              }}
            >
              <InputBase
                placeholder="Search..."
                onFocus={() => setSearchExpanded(true)}
                onBlur={() => setSearchExpanded(false)}
                sx={{ flex: 1, fontSize: "0.9rem" }}
              />
              <IconButton size="small">
                <Search fontSize="small" />
              </IconButton>
            </Box>
          )}
        </FlexBetween>

        {/* DESKTOP NAV */}
        {isNonMobileScreens ? (
          <FlexBetween gap="1.5rem">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton onClick={() => dispatch(setMode())}>
                {isDarkMode ? (
                  <LightMode sx={{ fontSize: "22px", color: "#FDB813" }} />
                ) : (
                  <DarkMode sx={{ fontSize: "22px", color: dark }} />
                )}
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton>
                <Badge
                  badgeContent={3}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      height: "18px",
                      minWidth: "18px",
                    },
                  }}
                >
                  <Message sx={{ fontSize: "22px" }} />
                </Badge>
              </IconButton>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton>
                <Badge
                  badgeContent={5}
                  color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      fontSize: "0.65rem",
                      height: "18px",
                      minWidth: "18px",
                    },
                  }}
                >
                  <Notifications sx={{ fontSize: "22px" }} />
                </Badge>
              </IconButton>
            </motion.div>

            <FormControl variant="standard">
=======

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          SocioMedia
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
<<<<<<< HEAD
                  borderRadius: "25px",
                  padding: "0.4rem 1rem",
                  minWidth: "160px",
                  border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
                  "& .MuiSvgIcon-root": {
                    display: "none",
                  },
                  "& .MuiSelect-select": {
                    paddingRight: "0 !important",
                  },
                  "&:before, &:after": {
                    display: "none",
                  },
                }}
                input={<InputBase />}
                renderValue={() => (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 28,
                        height: 28,
                        fontSize: "0.85rem",
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      {user.firstName[0]}
                    </Avatar>
                    <Typography fontSize="0.9rem" fontWeight={500}>
                      {fullName}
                    </Typography>
                  </Box>
                )}
              >
                <MenuItem value={fullName}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        bgcolor: theme.palette.primary.main,
                      }}
                    >
                      {user.firstName[0]}
                    </Avatar>
                    <Box>
                      <Typography fontWeight={600}>{fullName}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        View Profile
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem
                  onClick={() => dispatch(setLogout())}
                  sx={{
                    color: theme.palette.error.main,
                    "&:hover": {
                      backgroundColor: theme.palette.error.light + "20",
                    },
                  }}
                >
                  <Typography fontWeight={500}>Log Out</Typography>
=======
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
<<<<<<< HEAD
        ) : (
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Menu />
          </IconButton>
        )}

        {/* MOBILE NAV */}
        {!isNonMobileScreens && (
          <Slide direction="left" in={isMobileMenuToggled} mountOnEnter unmountOnExit>
            <Box
              position="fixed"
              right="0"
              top="0"
              bottom="0"
              height="100%"
              zIndex="20"
              maxWidth="300px"
              minWidth="250px"
              sx={{
                backgroundColor: background,
                backdropFilter: "blur(20px) saturate(180%)",
                boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* CLOSE ICON */}
              <Box display="flex" justifyContent="flex-end" p="1rem">
                <IconButton
                  onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
                >
                  <Close />
                </IconButton>
              </Box>

              {/* MENU ITEMS */}
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="2.5rem"
                mt="2rem"
              >
                <Box
                  sx={{
                    width: "100%",
                    px: 2,
                    mb: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: theme.palette.primary.main,
                      fontSize: "1.5rem",
                      mb: 1,
                    }}
                  >
                    {user.firstName[0]}
                  </Avatar>
                  <Typography fontWeight={600} fontSize="1.1rem">
                    {fullName}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {user.email}
                  </Typography>
                </Box>

                <IconButton
                  onClick={() => dispatch(setMode())}
                  sx={{ fontSize: "28px" }}
                >
                  {isDarkMode ? (
                    <LightMode sx={{ fontSize: "28px", color: "#FDB813" }} />
                  ) : (
                    <DarkMode sx={{ fontSize: "28px" }} />
                  )}
                </IconButton>

                <IconButton>
                  <Badge badgeContent={3} color="error">
                    <Message sx={{ fontSize: "28px" }} />
                  </Badge>
                </IconButton>

                <IconButton>
                  <Badge badgeContent={5} color="error">
                    <Notifications sx={{ fontSize: "28px" }} />
                  </Badge>
                </IconButton>

                <Box
                  onClick={() => dispatch(setLogout())}
                  sx={{
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    borderRadius: "25px",
                    backgroundColor: theme.palette.error.main,
                    color: "white",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: theme.palette.error.dark,
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography fontWeight={600}>Log Out</Typography>
                </Box>
              </Box>
            </Box>
          </Slide>
        )}
      </FlexBetween>
    </motion.div>
=======
        </Box>
      )}
    </FlexBetween>
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
  );
};

export default Navbar;
