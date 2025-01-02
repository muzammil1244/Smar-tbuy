import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Share,
  Modal,
  StyleSheet,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import { ADDCART, ADDLIKE } from "../redux/Action";

const ItemBigScreen = ({ route, navigation }) => {
  const Dispatch = useDispatch();
  const { itemdata, GetApi } = route.params;

  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [quantety, setQuantity] = useState(1);
  const [modal, setModal] = useState(false);
  const address = useSelector((state) => state.ADDRS);

  const toggleHeart = () => {
    setIsHeartClicked(!isHeartClicked);
    Dispatch(ADDLIKE(itemdata));
    navigation.navigate("Like");
  };

  const addToCart = () => {
    navigation.navigate("Cart");
    Dispatch(ADDCART(itemdata));
  };

  const shareItem = async () => {
    try {
      await Share.share({
        message: `Check out this product: ${itemdata.title}\nPrice: $${itemdata.price}`,
      });
    } catch (error) {
      console.error("Error sharing the item:", error);
    }
  };

  const toggleModal = () => setModal(!modal);

  return (
    <View style={styles.container}>
      {/* Modal for Quantity and Address */}
      <Modal transparent={true} animationType="slide" visible={modal} onRequestClose={toggleModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => setQuantity((q) => Math.max(1, q - 1))}>
                <AntDesign name="minuscircleo" size={25} color="white" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantety}</Text>
              <TouchableOpacity onPress={() => setQuantity((q) => q + 1)}>
                <AntDesign name="pluscircleo" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalTitle}>Selected Address</Text>
            {address.city ? (
              <View style={styles.addressDetails}>
                <Text style={styles.addressText}>City: {address.city}</Text>
                <Text style={styles.addressText}>Contact: {address.contact}</Text>
                <Text style={styles.addressText}>Pincode: {address.pincode}</Text>
                <TouchableOpacity
                  style={styles.confirmButton}
                  onPress={() =>{navigation.navigate("Payment", { quantety:quantety, itemdata:itemdata})
                toggleModal()
                }}
                >
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.noAddressContainer}>
                <Text style={styles.noAddressText}>Please select an address</Text>
                <TouchableOpacity style={styles.selectButton} onPress={() => navigation.navigate("Address")}>
                  <Text style={styles.selectButtonText}>Select Address</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>

   
      <FlatList
        ListHeaderComponent={
          <View style={styles.productDetails}>
            <Image source={{ uri: itemdata.images[0] }} style={styles.productImage} />
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={toggleHeart}>
                <FontAwesome
                  name={isHeartClicked ? "heart" : "heart-o"}
                  size={30}
                  color={isHeartClicked ? "red" : "white"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={shareItem}>
                <Ionicons name="share-social-outline" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productPrice}>${itemdata.price}</Text>
              <Text style={styles.productTitle}>{itemdata.title}</Text>
              <Text style={styles.productCategory}>{itemdata.category.name}</Text>
            </View>
            <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate("Details", itemdata)}>
              <Text style={styles.detailsButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        }
        data={GetApi}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("MainItem", { itemdata: item, GetApi })}>
            <View style={styles.listItem}>
              <Image source={{ uri: item.image }} style={styles.listItemImage} />
              <View style={styles.listItemInfo}>
                <Text style={styles.listItemCategory}>{item.category}</Text>
                <Text style={styles.listItemPrice}>${item.price}</Text>
                <Text style={styles.listItemTitle}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

    
      <View style={styles.footer}>
        <TouchableOpacity onPress={addToCart} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal} style={styles.footerButton}>
          <Text style={styles.footerButtonText2}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  modalBackground: { flex: 1, justifyContent: "center", backgroundColor: "rgba(0,0,0,0.7)" },
  modalContent: { width: "80%", backgroundColor: "#333", borderRadius: 10, padding: 20, alignSelf: "center" },
  quantityContainer: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  quantityText: { color: "white", fontSize: 18, textAlign: "center" },
  modalTitle: { color: "white", fontSize: 18, textAlign: "center", marginBottom: 20 },
  addressDetails: { alignItems: "center" },
  addressText: { color: "white", marginVertical: 5 },
  confirmButton: { backgroundColor: "white", padding: 10, borderRadius: 10, marginTop: 20 },
  confirmButtonText: { color: "black" },
  noAddressContainer: { alignItems: "center" },
  noAddressText: { color: "white", marginBottom: 10 },
  selectButton: { backgroundColor: "white", padding: 10, borderRadius: 10 },
  selectButtonText: { color: "black" },
  productDetails: { backgroundColor: "#1F1F1F", padding: 20 },
  productImage: { width: "100%", height: 300, resizeMode: "contain" },
  iconContainer: { flexDirection: "row", justifyContent: "space-between", marginVertical: 10 },
  productInfo: { alignItems: "center", marginVertical: 10 },
  productPrice: { fontSize: 24, color: "#FF6347", fontWeight: "bold" },
  productTitle: { fontSize: 18, marginVertical: 5, color: "white" },
  productCategory: { fontSize: 14, color: "gray" },
  detailsButton: { backgroundColor: "black", padding: 10, borderRadius: 10, marginTop: 20 },
  detailsButtonText: { color: "white", textAlign: "center" },
  listItem: { flexDirection: "row", padding: 10, borderBottomWidth: 1, borderColor: "#444" },
  listItemImage: { width: 80, height: 80 },
  listItemInfo: { marginLeft: 10, justifyContent: "center" },
  listItemCategory: { fontSize: 12, color: "gray" },
  listItemPrice: { fontSize: 16, color: "#FF6347" },
  listItemTitle: { fontSize: 14, color: "white" },
  footer: { flexDirection: "row", height: 50, backgroundColor: "#121212", justifyContent: "center" },
  footerButton: { width: "50%", justifyContent: "center", alignItems: "center" },
  footerButtonText: { color: "white", fontSize: 16, fontWeight: "bold", paddingVertical: 10 },
  footerButtonText2: { color: "white", fontSize: 16, fontWeight: "bold", paddingVertical: 10 },
});

export default ItemBigScreen;
