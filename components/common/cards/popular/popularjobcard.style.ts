import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const staticStyles = StyleSheet.create({
  logoImage: {
    width: "70%",
    height: "70%",
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },
});

type StyleProps = {
  selectedJob: string;
  item: { job_id: string };
};

const dynamicStyles = ({ selectedJob, item }: StyleProps) => {
  return StyleSheet.create({
    container: {
      width: 250,
      padding: SIZES.xLarge,
      backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
      borderRadius: SIZES.medium,
      justifyContent: "space-between",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
    logoContainer: {
      width: 50,
      height: 50,
      backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    jobName: {
      fontSize: SIZES.large,
      fontFamily: FONT.medium,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
    publisher: {
      fontSize: SIZES.medium - 2,
      fontFamily: FONT.bold,
      color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    },
  });
};

export { staticStyles, dynamicStyles };
