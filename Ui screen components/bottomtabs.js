import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

const BottomTabs = ({ navigation }) => {
  return (
    <View style={styles.bottomContainer}>
      

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate("User")}>
        <Feather name="user" size={25} color="white" />
        <Text style={styles.iconLabel}>User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate("MainHome")}>
        <AntDesign name="home" size={25} color="white" />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      

      <TouchableOpacity style={styles.iconWrapper} onPress={() => navigation.navigate("Cart")}>
        <Feather name="shopping-cart" size={25} color="white" />
        <Text style={styles.iconLabel}>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "black",
 
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabel: {
    color: "#aaa", 
    fontSize: 10,
    marginTop: 5,
  },
});
