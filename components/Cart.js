import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import BottomTabs from "../Ui screen components/bottomtabs";
import { REMOVECART } from "../redux/Action";

const Cart = ({ navigation }) => {
  const usereduxStore = useSelector((state) => state.cart);

  const Dispatch = useDispatch();

  let Total = 0;
  usereduxStore.map((item) => {
    return (Total += item.price);
  });

  useEffect(() => {
    console.log("Total Price:", Total);
  }, [Total]);

  const RemoveItem = (id) => {
    console.log("Remove Item ID:", id);
    Dispatch(REMOVECART(id));
  };

  return (
    <>
      <View style={styles.container}>
        <LinearGradient colors={["black", "#333", "#5f5f5f"]} style={styles.header}>
          <Text style={styles.totalText}>Total Price: ${Total.toFixed(2)}</Text>
        </LinearGradient>

        {usereduxStore.length === 0 ? (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyText}>Your cart is empty!</Text>
          </View>
        ) : (
          <FlatList
            data={usereduxStore}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.itemDetails}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                  <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => RemoveItem(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}

        {usereduxStore.length > 0 && (
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        )}
      </View>
      <BottomTabs navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    padding: 15,
    alignItems: "center",
  },
  totalText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    color: "lightgreen",
    fontSize: 14,
    marginTop: 5,
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#555",
    borderRadius: 5,
  },
  removeButtonText: {
    color: "white",
    fontSize: 14,
  },
  checkoutButton: {
    backgroundColor: "white",
    padding: 15,
    margin: 15,
    borderRadius: 10,
  },
  checkoutText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Cart;
