import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

import styles, { btnImg } from "./screenheader.style";

type ScreenHeaderBtn = {
  iconUrl: ImageSourcePropType;
  resizeMode: "cover";
  dimensions: string;
  handlePress: () => void;
};

const ScreenHeaderBtn = (props: ScreenHeaderBtn) => {
  const { iconUrl, dimensions, resizeMode, handlePress } = props;
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} style={btnImg(dimensions)} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
