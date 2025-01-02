import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

const OrderItem = ({ route, navigation }) => {
  const { itemdata, quantety } = route.params;

  return (
    <View style={styles.container}>
      {itemdata ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Product Image */}
          <Image source={{ uri: itemdata.images[0] }} style={styles.image} />

          <View style={styles.divider} />

          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{itemdata.name}</Text>
            <Text style={styles.description}>{itemdata.description}</Text>
            <Text style={styles.price}>Price: ₹{itemdata.price}</Text>
            <Text style={styles.quantity}>Quantity: {quantety}</Text>
            <Text style={styles.total}>
              Total: ₹{itemdata.price * quantety}
            </Text>
            <Text
              onPress={() => navigation.navigate("Complete",{quantety:quantety,itemdata:itemdata})} // Added navigation to Complete screen
              style={styles.confirmButton}
            >
              Confirm
            </Text>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#fff", 
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: "#333", 
    borderRadius: 10,
    elevation: 2, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#ccc", 
    marginBottom: 10,
    lineHeight: 22,
  },
  price: {
    fontSize: 18,
    color: "#fff", 
    fontWeight: "600",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    color: "#ccc", 
    marginBottom: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#008000", 
    marginTop: 10,
  },
  confirmButton: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "black",
    color: "white", 
    textAlign: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff", 
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default OrderItem;
