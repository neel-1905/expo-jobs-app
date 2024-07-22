import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import { dynamicStyles, staticStyles } from "./popularjobcard.style";

type POPULAR_JOBCARD = {
  item: any;
  selectedJob: any;
  handleCardPress: (item: any) => void;
};

const PopularJobCard = (props: POPULAR_JOBCARD) => {
  const { item, handleCardPress, selectedJob } = props;
  const styles = dynamicStyles({ item, selectedJob });
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri:
              item?.employer_logo ||
              "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={staticStyles.logoImage}
        />
      </TouchableOpacity>
      <Text style={staticStyles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={staticStyles.infoContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {item.job_title}
        </Text>

        <Text style={staticStyles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
