const brand = {
  primary: "#00bcbc",
  primaryDark: "#007f7f",
  primaryTransparent: "rgba(3, 110, 101, 0.7)",
  primaryTransparentLight: "rgba(0, 185, 188, 0.37)",
  secondary: "#fbe122",
};

const text = {
  inverse: "#ffffff",
  default: "#000000",
};

const background = {
  default: "#ffffff",
  alt: "#f8f8f8",
};

const backgroundButton = {
  primary: brand.primary,
  primaryTransparent: brand.primaryTransparent,
  primaryTransparentLight: brand.primaryTransparentLight,
  alt: "#f8f8f8",
};

const border = {
  default: brand.primaryDark,
};

const grayscale = {
  gray100: "#f8f8f8",
  gray200: "#e0e0e0",
  gray400: "#bdbdbd",
  gray600: "#757575",
  gray800: "#4f4f4f",
  gray900: "#2c2c2c",
};

const status = {
  warning: "#fbe122",
  error: "#ff4d4f",
  success: "#52c41a",
};

const Colors = {
  brand,
  text,
  background,
  backgroundButton,
  border,
  grayscale,
  status,
};

export default Colors;
