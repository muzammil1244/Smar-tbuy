import { Text, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useEffect } from "react";
import notifee from "@notifee/react-native";

const Complete = ({ route, navigation }) => {
  const { quantety, itemdata } = route.params || {};
  const totalPrice = quantety * itemdata.price;

  useEffect(() => {
    const displayNotification = async () => {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({
        id: "default",
        name: "SmartBuy",
      });
      await notifee.displayNotification({
        id: `${Date.now()}`, 
        title: `Order for ${itemdata.title}`,
        body: `You ordered ${quantety} items for a total of $${totalPrice}.`,
        android: {
          channelId,
          smallIcon: "ic_launcher",
          largeIcon: itemdata.image,
          color: "#ffffff",
        },
      });
    };

    displayNotification();
    setTimeout(() => {
          navigation.navigate("MainHome");

    }, 1.500);
  }, [itemdata, quantety]);

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={150} color="white" />
      <Text style={styles.text}>Order Complete!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    marginTop: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Complete;
