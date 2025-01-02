import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";

const OnlinePayment = ({route,navigation}) => {

  const { itemdata, quantety } = route.params;

  const total = itemdata.price*quantety

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Text style={styles.headerText}>Online Payment</Text>
      </View>

  
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Total Amount:</Text>
        <Text style={styles.amount}>${total}</Text>
      </View>

     
      <View style={styles.divider} />

      <Text style={styles.paymentLabel}>Select Payment Method:</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.paymentOption}>
          <Image
            source={
              require("../images/payment-method.png")
            }
            style={styles.icon}
          />
          <Text style={styles.paymentText}>UPI</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption}>
          <Image
            source={require("../images/credit-card.png")}
            style={styles.icon}
          />
          <Text style={styles.paymentText}>Credit/Debit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.paymentOption}>
          <Image
            source={require("../images/wallet.png")}
            style={styles.icon}
          />
          <Text style={styles.paymentText}>Wallet</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      
      <TouchableOpacity onPress={()=>navigation.navigate("Complete" ,{quantety:quantety,itemdata:itemdata})} style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  amountLabel: {
    fontSize: 18,
    color: "#666666",
  },
  amount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    marginVertical: 20,
  },
  paymentLabel: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 10,
  },
  paymentMethods: {
    marginBottom: 20,
  },
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  paymentText: {
    fontSize: 16,
    color: "#333333",
  },
  payButton: {
    backgroundColor: "black",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    elevation: 2,
  },
  payButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default OnlinePayment;
