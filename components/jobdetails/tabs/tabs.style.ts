import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
});

export const btn = (name: string, activeTab: string) => ({
  paddingVertical: SIZES.medium,
  paddingHorizontal: SIZES.xLarge,
  backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
  borderRadius: SIZES.medium,
  marginLeft: 2,
  ...SHADOWS.medium,
  shadowColor: COLORS.white,
});

export const btnText = (name: string, activeTab: string) => ({
  fontFamily: "DMMedium",
  fontSize: SIZES.small,
  color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
});

export default styles;
