// Modern color design tokens
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F9FAFB",
    50: "#F3F4F6",
    100: "#E5E7EB",
    200: "#D1D5DB",
    300: "#9CA3AF",
    400: "#6B7280",
    500: "#4B5563",
    600: "#374151",
    700: "#1F2937",
    800: "#111827",
    900: "#030712",
    1000: "#000000",
  },
  primary: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB",
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },
  accent: {
    50: "#FAF5FF",
    100: "#F3E8FF",
    200: "#E9D5FF",
    300: "#D8B4FE",
    400: "#C084FC",
    500: "#A855F7",
    600: "#9333EA",
    700: "#7E22CE",
    800: "#6B21A8",
    900: "#581C87",
  },
  success: {
    light: "#6EE7B7",
    main: "#10B981",
    dark: "#059669",
  },
  error: {
    light: "#FCA5A5",
    main: "#EF4444",
    dark: "#DC2626",
  },
  warning: {
    light: "#FCD34D",
    main: "#F59E0B",
    dark: "#D97706",
  },
};

// Modern MUI theme settings with glassmorphism support
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // Dark mode - sophisticated and elegant
            primary: {
              dark: colorTokens.primary[300],
              main: colorTokens.primary[500],
              light: colorTokens.primary[700],
            },
            accent: {
              dark: colorTokens.accent[300],
              main: colorTokens.accent[500],
              light: colorTokens.accent[700],
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[300],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[500],
              light: colorTokens.grey[700],
            },
            background: {
              default: colorTokens.grey[900],
              paper: colorTokens.grey[800],
              alt: colorTokens.grey[800],
            },
            success: colorTokens.success,
            error: colorTokens.error,
            warning: colorTokens.warning,
          }
        : {
            // Light mode - clean and modern
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[600],
              light: colorTokens.primary[100],
            },
            accent: {
              dark: colorTokens.accent[700],
              main: colorTokens.accent[600],
              light: colorTokens.accent[100],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
            },
            background: {
              default: colorTokens.grey[10],
              paper: colorTokens.grey[0],
              alt: colorTokens.grey[0],
            },
            success: colorTokens.success,
            error: colorTokens.error,
            warning: colorTokens.warning,
          }),
    },
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "sans-serif",
      ].join(","),
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: 1.3,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h5: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "1.25rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontFamily: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ].join(","),
        fontSize: "1rem",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
        letterSpacing: "0.00938em",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
        letterSpacing: "0.01071em",
      },
    },
    shape: {
      borderRadius: 12,
    },
    shadows: [
      "none",
      "0px 2px 4px rgba(0, 0, 0, 0.05)",
      "0px 4px 6px rgba(0, 0, 0, 0.07)",
      "0px 6px 12px rgba(0, 0, 0, 0.1)",
      "0px 8px 16px rgba(0, 0, 0, 0.12)",
      "0px 12px 24px rgba(0, 0, 0, 0.15)",
      "0px 16px 32px rgba(0, 0, 0, 0.18)",
      "0px 20px 40px rgba(0, 0, 0, 0.2)",
      "0px 24px 48px rgba(0, 0, 0, 0.22)",
      ...Array(16).fill("0px 24px 48px rgba(0, 0, 0, 0.22)"),
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            textTransform: "none",
            fontWeight: 500,
            padding: "10px 20px",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.15)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 10,
            },
          },
        },
      },
    },
  };
};
