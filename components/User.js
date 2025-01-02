import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import BottomTabs from "../Ui screen components/bottomtabs";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const User = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
      
        <View style={styles.profileSection}>
          <Image
            style={styles.profileImage}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/219/219970.png" }}
          />
          <Text style={styles.userName}>Mohammad Muzammil</Text>
          <Text style={styles.userDetails}>Email: muzammil@example.com</Text>
          <Text style={styles.userDetails}>Phone: +1234567890</Text>
        </View>

      
        <View style={styles.divider} />

    
        <View style={styles.actionRow}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")} style={styles.actionButton}>
            <FontAwesome name="shopping-cart" size={20} color="black" />
            <Text style={styles.actionText}>Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Like")} style={styles.actionButton}>
            <Entypo name="heart" size={20} color="black" />
            <Text style={styles.actionText}>Like</Text>
          </TouchableOpacity>
        </View>

       

      
        <ScrollView style={styles.optionsContainer}>
          <View style={styles.optionsList}>
            <TouchableOpacity onPress={() => navigation.navigate("Address")} style={styles.optionItem}>
              <MaterialIcons name="location-on" size={20} color="black" />
              <Text style={styles.optionText}>Address</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <FontAwesome name="support" size={20} color="black" />
              <Text style={styles.optionText}>Support</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <Entypo name="lock" size={20} color="black" />
              <Text style={styles.optionText}>Privacy Policy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <MaterialIcons name="people" size={20} color="black" />
              <Text style={styles.optionText}>Support Team</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem}>
              <FontAwesome name="info-circle" size={20} color="black" />
              <Text style={styles.optionText}>About</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
   
      <BottomTabs navigation={navigation} />
    </>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  profileSection: {
    width: "100%",
    height: 220,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  userDetails: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 5,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "gray",
    alignSelf: "center",
    marginVertical: 10,
    width: "70%",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  actionButton: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    color: "black",
    marginLeft: 5,
    fontSize: 14,
  },
  activitySection: {
    backgroundColor: "#1c1c1c",
    padding: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  activityHeader: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
  },
  activityItem: {
    color: "white",
    fontSize: 14,
    marginVertical: 5,
  },
  optionsContainer: {
    padding: 10,
    marginBottom: 60, 
  },
  optionsList: {
    flexDirection: "column",
    gap: 10,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  optionText: {
    color: "black",
    fontSize: 14,
    marginLeft: 10,
  },
});
