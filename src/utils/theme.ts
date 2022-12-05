import { createTheme } from '@shopify/restyle'

//
const palette = {
  black: '#222222',
  white: '#FFFFFF',
  gray: "#9B9B9B",
  gray1: "#fafafafa",
  gray2: "#f5f5f5f5",
  gray3: "#e9e9e9e9",
  gray4: "#c4c4c4c4",
  gray5: "#F2F2F2",
  primary: "#FFD101",
  primaryDarker: '#FEB800',
  primaryLighter: '#ffe163',
  backgroundLight: "#F5F5F5F5",
  error: "#F01F0E",
  success: "#2AA952",
  darkColor: "#2A2C36",
  backgroundDark: "#1E1F28"
};


const theme = createTheme({
  colors: {
    background: palette.gray1,
    white: palette.white,
    gray: palette.gray,
    black: palette.black,
    error: palette.error,
    primary: palette.primary,
    primaryDarker: palette.primaryDarker,
    primaryLighter: palette.primaryLighter,
    success: palette.success,
    gray1: palette.gray1,
    gray2: palette.gray2,
    gray3: palette.gray3,
    gray4: palette.gray4,
    gray5: palette.gray5,
    darkColor: palette.darkColor
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    headlineMont: {
      fontFamily: "Montserrat-ExtraBold",
      fontSize: 34,
      lineHeight: 45,
      color: "black"
    },
    headlineMont2: {
      fontFamily: "Montserrat-Bold",
      fontSize: 24,
      lineHeight: 28.8,
      color: "black"
    },
    headlineMont3: {
      fontFamily: "Montserrat-Bold",
      fontSize: 18,
      lineHeight: 22,
      color: "black"
    },
    headlineMont4: {
      fontFamily: "Montserrat-Bold",
      fontSize: 35,
      lineHeight: 60,
      color: "black"
    },
    bodyMont2: {
      fontFamily: "Montserrat-Medium",
      fontSize: 16,
      lineHeight: 16,
      color: "black"
    },
    descriptionMont: {
      fontFamily: "Montserrat-Medium",
      fontSize: 14,
      lineHeight: 20,
      color: "black",
      opacity: 0.8
    },



    headline: {
      fontFamily: "Montserrat-ExtraBold",
      fontSize: 34,
      lineHeight: 45,
      color: "black"
    },
    headline2: {
      fontFamily: "Montserrat-Bold",
      fontSize: 24,
      lineHeight: 28.8,
      color: "black"
    },
    headline3: {
      fontFamily: "Montserrat-Bold",
      fontSize: 18,
      lineHeight: 22,
      color: "black"
    },
    headline4: {
      fontFamily: "Montserrat-Bold",
      fontSize: 35,
      lineHeight: 60,
      color: "black"
    },
    body: {
      fontFamily: "Montserrat-Medium",
      fontSize: 14,
      lineHeight: 20,
      color: "black"
    },
    body2: {
      fontFamily: "Montserrat-Medium",
      fontSize: 16,
      lineHeight: 16,
      color: "black"
    },
    description: {
      fontFamily: "Montserrat-Medium",
      fontSize: 14,
      lineHeight: 20,
      color: "black",
      opacity: 0.8
    },
    small: {
      fontFamily: "Montserrat-Medium",
      fontSize: 11,
      lineHeight: 11,
      color: "black"
    },
    smallGray: {
      fontFamily: "Montserrat-Medium",
      fontSize: 11,
      lineHeight: 11,
      color: "gray"
    },
  }
});

export type Theme = typeof theme;

export default theme;