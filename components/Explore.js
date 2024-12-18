import React from "react";
import { View, Text } from "react-native";
import BottomTabs from "../Ui screen components/bottomtabs";

const Explore = ({navigation}) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <Text>
          Hello Explore
        </Text>
      </View>
      <BottomTabs navigation={navigation} />
    </>
  );
};

export default Explore;
