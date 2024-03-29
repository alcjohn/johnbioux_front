import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { roboto: `'Roboto', sans-serif` };

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  config,
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
  },
  styles: {
    global: (props) => ({
      "html, body": {
        fontFamily: "roboto",
        bg: props.colorMode === "dark" ? "bgPrimary" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "bgPrimary",
      },
    }),
  },
  colors: {
    bgPrimary: "#262626",
    primary: {
      100: "#C6ECCF",
      200: "#9FDFAE",
      300: "#79D28E",
      400: "#53C66E",
      500: "#39AC54",
      600: "#2D8641",
      700: "#20602F",
      800: "#13391C",
      900: "#061309",
    },
  },
  fonts,
  breakpoints,
});

export default theme;
