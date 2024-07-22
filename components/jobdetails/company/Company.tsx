import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./company.style";
import { icons, images } from "@/constants";

type COMPANY = {
  logo: string;
  jobTitle: string;
  location: string;
  companyName: string;
};

const Company = (props: COMPANY) => {
  const { jobTitle, logo, companyName, location } = props;
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{ uri: logo || images.jobPlaceholder }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
