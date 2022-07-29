import {extendTheme} from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {},
  },
};

const fonts = {
  heading: `'Lato', sans-serif`,
  body: `'Lato', sans-serif`,
};

const colors = {
  brand: {
    pink: {
      600: "#d295ae",
      400: "#ecadc7",
      200: "#ffc6e0",
      100: "#fcf1f5",
    },
    green: {
      900: "#7FB685",
      600: "#8EAD99",
      400: "#b3c8ba",
      200: "#D9E3DC",
    },
  },
  accent: "#E05263",
  neutral: {
    plate_white: "#E3E4E5", //green gray
    ghost_white: "#f8f8ff", //pink gray
    white: "#F4F4F4",
    black: "#0F0A0C",
    pink_black: "#4a383f",
    pink_gray: "#7c788f",
  },
};

export const gradients = {
  pink_light: "linear-gradient(120deg, rgba(247,249,255,1) 0%, rgba(254,246,250,1) 100%)",
  pink_accent: "linear-gradient(120deg, rgba(236,212,247,1) 0%, rgba(211,245,240,1) 100%)",
  pink_strong: "linear-gradient(120deg, rgba(210,149,174,1) 0%, rgba(224,82,99,1) 100%)",
  green_active: "linear-gradient(120deg, rgba(139,189,144,1) 0%, rgba(190,203,129,1) 100%)",
};

export const theme = extendTheme({styles, fonts, colors, gradients});
