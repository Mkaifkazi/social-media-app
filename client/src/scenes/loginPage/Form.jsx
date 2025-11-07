import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
<<<<<<< HEAD
  CircularProgress,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
=======
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { serverUrl } from "Constants";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
=======
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");
<<<<<<< HEAD
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
=======
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const register = async (values, onSubmitProps) => {
<<<<<<< HEAD
    setIsLoading(true);
    try {
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("picturePath", values.picture.name);

      const savedUserResponse = await fetch(`${serverUrl}/auth/register`, {
        method: "POST",
        body: formData,
      });

      const savedUser = await savedUserResponse.json();

      if (savedUserResponse.ok && savedUser) {
        toast.success("Account created successfully! Please login.");
        setPageType("login");
        onSubmitProps.resetForm();
      } else {
        toast.error(savedUser.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
=======
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(`${serverUrl}/auth/register`, {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      setPageType("login");
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
    }
  };

  const login = async (values, onSubmitProps) => {
<<<<<<< HEAD
    setIsLoading(true);
    try {
      const loggedInResponse = await fetch(`${serverUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const loggedIn = await loggedInResponse.json();

      if (loggedInResponse.ok && loggedIn.token) {
        toast.success(`Welcome back, ${loggedIn.user.firstName}!`);
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        onSubmitProps.resetForm();
        navigate("/home");
      } else {
        toast.error(loggedIn.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
=======
    const loggedInResponse = await fetch(`${serverUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  return (
<<<<<<< HEAD
    <Box
      display="flex"
      flexDirection={isNonMobile ? "row" : "column"}
      height="100vh"
      overflow="hidden"
    >
      {/* Left Side - Hero Section (Desktop Only) */}
      {isNonMobile && (
        <Box
          sx={{
            width: "50%",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.primary.dark} 50%, ${palette.accent?.main || palette.primary.dark} 100%)`,
            animation: "gradientShift 15s ease infinite",
            "@keyframes gradientShift": {
              "0%, 100%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
            },
            backgroundSize: "200% 200%",
          }}
        >
          {/* Animated Dot Pattern Background */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
              animation: "dotMove 20s linear infinite",
              "@keyframes dotMove": {
                "0%": {
                  transform: "translate(0, 0)",
                },
                "100%": {
                  transform: "translate(50px, 50px)",
                },
              },
            }}
          />

          {/* Hero Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                fontWeight="800"
                sx={{
                  color: "white",
                  fontSize: { xs: "3rem", md: "4rem" },
                  textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                SocioMedia
              </Typography>
              <Typography
                variant="h5"
                fontWeight="400"
                sx={{
                  color: "rgba(255, 255, 255, 0.95)",
                  maxWidth: "500px",
                  margin: "0 auto",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  lineHeight: 1.6,
                }}
              >
                Connect, Share, and Inspire with friends and the world around you
              </Typography>
            </motion.div>

            {/* Decorative Icons */}
            <Box
              sx={{
                marginTop: "4rem",
                display: "flex",
                gap: "3rem",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography fontSize="2rem">🔗</Typography>
                  <Typography fontSize="0.7rem" color="white" fontWeight="600" mt={0.5}>
                    Connect
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography fontSize="2rem">📤</Typography>
                  <Typography fontSize="0.7rem" color="white" fontWeight="600" mt={0.5}>
                    Share
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Typography fontSize="2rem">💬</Typography>
                  <Typography fontSize="0.7rem" color="white" fontWeight="600" mt={0.5}>
                    Chat
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Box>
      )}

      {/* Right Side - Form Section */}
      <Box
        sx={{
          width: isNonMobile ? "50%" : "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: isNonMobile ? "3rem" : "2rem",
          backgroundColor: palette.background.default,
          overflowY: "auto",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pageType}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{ width: "100%", maxWidth: "480px" }}
          >
            <Box
              sx={{
                padding: isNonMobile ? "3rem" : "2.5rem",
                borderRadius: "24px",
                backgroundColor: palette.background.alt,
                boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.12)",
                border: `1px solid ${palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
              }}
            >
              <Typography
                variant="h3"
                fontWeight="700"
                mb={1}
                sx={{
                  background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.accent?.main || palette.primary.dark} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </Typography>
              <Typography variant="body1" color={palette.neutral.main} mb={3}>
                {isLogin ? "Welcome back! Please login to continue." : "Join our community today."}
              </Typography>

            <Formik
              onSubmit={handleFormSubmit}
              initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
              validationSchema={isLogin ? loginSchema : registerSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="20px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                  >
                    {isRegister && (
                      <>
                        <TextField
                          label="First Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 2" }}
                          disabled={isLoading}
                        />
                        <TextField
                          label="Last Name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 2" }}
                          disabled={isLoading}
                        />
                        <TextField
                          label="Location"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.location}
                          name="location"
                          error={Boolean(touched.location) && Boolean(errors.location)}
                          helperText={touched.location && errors.location}
                          sx={{ gridColumn: "span 4" }}
                          disabled={isLoading}
                        />
                        <TextField
                          label="Occupation"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.occupation}
                          name="occupation"
                          error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                          helperText={touched.occupation && errors.occupation}
                          sx={{ gridColumn: "span 4" }}
                          disabled={isLoading}
                        />
                        <Box
                          gridColumn="span 4"
                          sx={{
                            border: `1px solid ${
                              touched.picture && errors.picture
                                ? palette.error.main
                                : palette.neutral.medium
                            }`,
                            borderRadius: "12px",
                            padding: "1rem",
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                              borderColor: palette.primary.main,
                              transform: "translateY(-2px)",
                              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            },
                          }}
                        >
                          <Dropzone
                            acceptedFiles=".jpg,.jpeg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) =>
                              setFieldValue("picture", acceptedFiles[0])
                            }
                            disabled={isLoading}
                          >
                            {({ getRootProps, getInputProps, isDragActive }) => (
                              <Box
                                {...getRootProps()}
                                sx={{
                                  border: `2px dashed ${isDragActive ? palette.accent?.main || palette.primary.dark : palette.primary.main}`,
                                  borderRadius: "8px",
                                  padding: "1.5rem",
                                  textAlign: "center",
                                  cursor: "pointer",
                                  backgroundColor: isDragActive ? palette.primary.light + "20" : "transparent",
                                  transition: "all 0.2s ease-in-out",
                                  "&:hover": {
                                    backgroundColor: palette.neutral.light,
                                  },
                                }}
                              >
                                <input {...getInputProps()} />
                                {!values.picture ? (
                                  <Box>
                                    <Typography fontSize="2.5rem" mb={1}>
                                      📸
                                    </Typography>
                                    <Typography color={palette.neutral.main} fontWeight="500">
                                      {isDragActive ? "Drop your picture here" : "Add Profile Picture"}
                                    </Typography>
                                    <Typography color={palette.neutral.medium} fontSize="0.875rem" mt={0.5}>
                                      Click or drag and drop
                                    </Typography>
                                  </Box>
                                ) : (
                                  <FlexBetween>
                                    <Typography color={palette.neutral.main}>{values.picture.name}</Typography>
                                    <EditOutlinedIcon sx={{ color: palette.primary.main }} />
                                  </FlexBetween>
                                )}
                              </Box>
                            )}
                          </Dropzone>
                          {touched.picture && errors.picture && (
                            <Typography color={palette.error.main} fontSize="0.75rem" mt={0.5}>
                              {errors.picture}
                            </Typography>
                          )}
                        </Box>
                      </>
                    )}

                    <TextField
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={Boolean(touched.email) && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4" }}
                      disabled={isLoading}
                    />
                    <TextField
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={Boolean(touched.password) && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      sx={{ gridColumn: "span 4" }}
                      disabled={isLoading}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword(!showPassword)}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      fullWidth
                      type="submit"
                      disabled={isLoading}
                      sx={{
                        marginTop: "2rem",
                        padding: "1rem",
                        background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.accent?.main || palette.primary.dark} 100%)`,
                        color: "#FFFFFF",
                        fontWeight: 600,
                        fontSize: "1rem",
                        borderRadius: "12px",
                        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0px 8px 28px rgba(0, 0, 0, 0.25)",
                          transform: "translateY(-2px)",
                        },
                        "&:disabled": {
                          background: palette.neutral.medium,
                          color: palette.neutral.dark,
                        },
                      }}
                    >
                      {isLoading ? (
                        <CircularProgress size={24} sx={{ color: "#FFFFFF" }} />
                      ) : (
                        <>{isLogin ? "Sign In" : "Create Account"}</>
                      )}
                    </Button>
                  </motion.div>

                  <Typography
                    onClick={() => {
                      if (!isLoading) {
                        setPageType(isLogin ? "register" : "login");
                        resetForm();
                        setShowPassword(false);
                      }
                    }}
                    sx={{
                      marginTop: "1.5rem",
                      textAlign: "center",
                      color: palette.primary.main,
                      fontWeight: 500,
                      cursor: isLoading ? "default" : "pointer",
                      opacity: isLoading ? 0.5 : 1,
                      "&:hover": {
                        color: !isLoading && (palette.accent?.main || palette.primary.dark),
                        textDecoration: !isLoading && "underline",
                      },
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {isLogin
                      ? "Don't have an account? Sign up here"
                      : "Already have an account? Sign in here"}
                  </Typography>
                </form>
              )}
            </Formik>
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
=======
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
      validationSchema={isLogin ? loginSchema : registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {isRegister && (
              <>
                <TextField
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={
                    Boolean(touched.firstName) && Boolean(errors.firstName)
                  }
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  label="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.location}
                  name="location"
                  error={Boolean(touched.location) && Boolean(errors.location)}
                  helperText={touched.location && errors.location}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  label="Occupation"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.occupation}
                  name="occupation"
                  error={
                    Boolean(touched.occupation) && Boolean(errors.occupation)
                  }
                  helperText={touched.occupation && errors.occupation}
                  sx={{ gridColumn: "span 4" }}
                />
                <Box
                  gridColumn="span 4"
                  border={`1px solid ${palette.neutral.medium}`}
                  borderRadius="5px"
                  p="1rem"
                >
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    multiple={false}
                    onDrop={(acceptedFiles) =>
                      setFieldValue("picture", acceptedFiles[0])
                    }
                  >
                    {({ getRootProps, getInputProps }) => (
                      <Box
                        {...getRootProps()}
                        border={`2px dashed ${palette.primary.main}`}
                        p="1rem"
                        sx={{ "&:hover": { cursor: "pointer" } }}
                      >
                        <input {...getInputProps()} />
                        {!values.picture ? (
                          <p>Add Picture Here</p>
                        ) : (
                          <FlexBetween>
                            <Typography>{values.picture.name}</Typography>
                            <EditOutlinedIcon />
                          </FlexBetween>
                        )}
                      </Box>
                    )}
                  </Dropzone>
                </Box>
              </>
            )}

            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              name="password"
              error={Boolean(touched.password) && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 4" }}
            />
          </Box>

          {/* BUTTONS */}
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
            <Typography
              onClick={() => {
                setPageType(isLogin ? "register" : "login");
                resetForm();
              }}
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                },
              }}
            >
              {isLogin
                ? "Don't have an account? Sign Up here."
                : "Already have an account? Login here."}
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
  );
};

export default Form;
