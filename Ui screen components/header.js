import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from "react-native-vector-icons/EvilIcons";

const Header = ({ navigation, Modalfun, ModalSfun }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("User")}>
          <Icons name={"navicon"} size={40} color={"white"} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => ModalSfun()}
          style={styles.searchButton}
        >
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>

        <View style={styles.iconRow}>
          <TouchableOpacity onPress={() => ModalSfun()} style={styles.iconWrapper}>
            <Icons name={"search"} size={35} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Modalfun()} style={styles.iconWrapper}>
            <Icons name={"camera"} size={35} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "black",
    height: 90,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  icon: {
    marginBottom: 5,
  },
  searchButton: {
    borderWidth: 1,
    borderColor: "#555",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#222",
  },
  searchText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, 
  },
  iconWrapper: {
    padding: 8,
    backgroundColor: "#333",
    borderRadius: 50,
  },
});
