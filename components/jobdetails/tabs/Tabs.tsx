import React, { Dispatch } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles, { btn, btnText } from "./tabs.style";
import { SIZES } from "@/constants";

type TabButton = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

type JobTabs = {
  tabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<React.SetStateAction<string>>;
};

const TabButton = (props: TabButton) => {
  const { activeTab, name, onHandleSearchType } = props;
  return (
    <TouchableOpacity style={btn(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = (props: JobTabs) => {
  const { activeTab, setActiveTab, tabs } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
