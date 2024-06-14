import { BorderColor } from "@mui/icons-material";

export const getThemePallete = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#00FFC6",
            light: "#E0FFF9",
            dark: "#00967B",
            bglight: "#F0F0F0",
            bgtheme: "#E0FFF9",
            bg: "#00967B",
          },
          secondary: {
            main: "#FF00FF",
            light: "#FFD1FF",
            dark: "#B200B2",
          },
          text: {
            primary: "#000000",
            secondary: "rgba(0,0,0,0.5)",
          },
        }
      : {
          primary: {
            main: "#00FFC6",
            light: "#00FFC6",
            dark: "#00FFC6",
            bglight: "#1A1A1A",
            bgtheme: "#1A1A1A",
            bg: "#121212",
          },
          secondary: {
            main: "#FF00FF",
            light: "#FF00FF",
            dark: "#FF00FF",
          },
          text: {
            primary: "#FFFFFF",
            secondary: "rgba(255,255,255,0.7)",
          },
        }),
  },
  typography: {
    body1: {
      fontFamily: "Open Sans, sans-serif",
    },
    h1: {
      fontFamily: "Ubuntu, sans-serif",
      color: mode === "light" ? "#00967B" : "#00FFC6",
      fontSize: 28,
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Ubuntu, sans-serif",
      color: "text.primary",
      fontSize: 28,
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: 22,
      },
    },
    heading: {
      fontFamily: "Ubuntu, sans-serif",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: "large",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "Open Sans, sans-serif",
        },
        contained: {
          fontFamily: "Ubuntu, sans-serif",
          border: 1,
          borderColor: mode === "light" ? "#00967B" : "#00FFC6",
          "&:hover": {
            background: mode === "light" ? "#00967B" : "#00FFC6",
            color: "#FFFFFF",
          },
        },
        outlined: {
          fontFamily: "Ubuntu, sans-serif",
          color: mode === "light" ? "#000" : "#fff",
          borderColor: mode === "light" ? "#00967B" : "#00FFC6",
          "&:hover": {
            background: mode === "light" ? "#E0FFF9" : "#121212",
            borderColor: mode === "light" ? "#00967B" : "#00FFC6",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
