import { useFonts } from "expo-font";

const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    DMRegular: require("./assets/fonts/DMRegular.ttf"),
    DMMedium: require("./assets/fonts/DMMedium.ttf"),
    DMBold: require("./assets/fonts/DMBold.ttf"),
  });

  return fontsLoaded;
};

export default useCustomFonts;
