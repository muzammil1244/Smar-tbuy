import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const AllDetails = ({ navigation, route }) => {
  const items = route.params;

  useEffect(() => {
    console.log(items);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Product Details</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailItem}>
            <Text style={styles.label}>1) Category: </Text>
            {items.category}
          </Text>
          <Text style={styles.detailItem}>
            <Text style={styles.label}>2) Price: </Text>${items.price}
          </Text>
          <Text style={styles.detailItem}>
            <Text style={styles.label}>3) Title: </Text>
            {items.title}
          </Text>
          <Text style={styles.detailItem}>
            <Text style={styles.label}>4) Description: </Text>
            {items.description}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff", 
    marginBottom: 20,
    textAlign: "center",
  },
  detailsContainer: {
    backgroundColor: "#1c1c1c", 
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 5,
  },
  detailItem: {
    fontSize: 16,
    marginBottom: 15,
    color: "#ddd", 
  },
  label: {
    fontWeight: "bold",
    color: "#fff", 
  },
  button: {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#000", 
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default AllDetails;
