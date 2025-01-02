import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { REMOVELIKE } from "../redux/Action";

const LikeScreen = () => {
  const like = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Likes screen: ", like);
  }, [like]);

  const removelike = (id) => {
    dispatch(REMOVELIKE(id));
  };

  return (
    <View style={styles.container}>
   
     
        <Text style={styles.totalText}>Liked Items</Text>
    
    <View style={{
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    alignSelf:"center",
    width:"90%",
    marginVertical:10
    }}/>

    
      <FlatList
        data={like}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => removelike(item.id)}>
              <FontAwesome name="trash" size={25} color="white" />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.emptyCart}>
            <Text style={styles.emptyText}>No liked items found.</Text>
          </View>
        }
      />
    </View>
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
    marginLeft:20,
    marginTop:10
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
    borderWidth: 1,
    borderColor: "#fff",
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
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default LikeScreen;
