import React from "react";
import { View, Text } from "react-native";

import styles from "./about.style";

type AboutType = {
  info: string;
};

const About = (props: AboutType) => {
  const { info } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the Job</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  );
};

export default About;
