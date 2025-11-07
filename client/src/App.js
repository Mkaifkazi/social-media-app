import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
=======
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
<<<<<<< HEAD
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: mode === "dark" ? "#1F2937" : "#FFFFFF",
                color: mode === "dark" ? "#F3F4F6" : "#111827",
                borderRadius: "12px",
                padding: "16px",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)",
                fontFamily: "Inter, sans-serif",
              },
              success: {
                iconTheme: {
                  primary: "#10B981",
                  secondary: "#FFFFFF",
                },
                style: {
                  border: `1px solid ${mode === "dark" ? "#059669" : "#6EE7B7"}`,
                },
              },
              error: {
                iconTheme: {
                  primary: "#EF4444",
                  secondary: "#FFFFFF",
                },
                style: {
                  border: `1px solid ${mode === "dark" ? "#DC2626" : "#FCA5A5"}`,
                },
              },
            }}
          />
=======
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
