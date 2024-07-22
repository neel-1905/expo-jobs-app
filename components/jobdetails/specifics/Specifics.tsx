import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

type Specifics = {
  title: string;
  qualifications: string[];
};

const Specifics = (props: Specifics) => {
  const { qualifications, title } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointsContainer}>
        {qualifications.map((item, index) => {
          return (
            <View style={styles.pointWrapper} key={`qualifications-${index}`}>
              <Text style={styles.pointDot} />
              <Text style={styles.pointText}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Specifics;
