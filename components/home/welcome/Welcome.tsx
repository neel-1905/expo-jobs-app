import React, { Dispatch, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import styles, { JOBTYPES, tab, tabText } from "./welcome.style";
import { useRouter } from "expo-router";
import { icons, SIZES } from "@/constants";

const jobTypes: JOBTYPES[] = ["Full-time", "Part-time", "Contract"];

type WelcomeTypes = {
  search: string;
  handleClick: () => void;
  setSearch: Dispatch<React.SetStateAction<string>>;
};

const Welcome = (props: WelcomeTypes) => {
  const { handleClick, search, setSearch } = props;
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState<JOBTYPES>("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Neel</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChange={(e) => setSearch(e.nativeEvent.text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item}
          renderItem={({ item }: { item: JOBTYPES }) => (
            <TouchableOpacity
              style={tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
