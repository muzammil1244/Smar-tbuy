import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Share, } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { ADDCART, ADDLIKE } from "../redux/Action";
const ItemBigScreen = ({ route, navigation }) => {
  const Dispatch = useDispatch();
  const { itemdata, GetApi } = route.params;
  console.log(itemdata);

  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const addtocart = () => {
    navigation.navigate("Cart");
    Dispatch(ADDCART(itemdata));
  };

  const addBuy = () => {
    console.log("add to buy");
  };

  const itemfun = (item) => {
    navigation.navigate("MainItem", { itemdata: item, GetApi: GetApi });
  };

  const toggleHeart = (item) => {
    setIsHeartClicked(!isHeartClicked);
    Dispatch(ADDLIKE(itemdata))
    navigation.navigate("Like")
  };



  const shareItem = async () => {
    try {
      const result = await Share.share({
        message: `Check out this product: ${itemdata.title}\nPrice: $${itemdata.price}\nImage: ${itemdata.image}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type: ", result.activityType);
        } else {
          console.log("Item shared successfully!");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing the item:", error);
    }
  };

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                width: "100%",
                height: 600,
                backgroundColor: "white",
              }}
            >
              <View>
                <Image
                  source={{ uri: itemdata.image }}
                  style={{
                    width: "75%",
                    height: 400,
                    alignSelf: "center",
                    marginTop: 20,
                  }}
                />
              </View>
              <View
                style={{
                  height: 70,
                  flexDirection: "column",
                  justifyContent: "space-around",
                  position: "absolute",
                  right: 10,
                  top: 20,
                }}
              >
               
                <TouchableOpacity onPress={toggleHeart}>
                  <FontAwesome
                    name={isHeartClicked ? "heart" : "heart-o"} // Change icon based on state
                    size={23}
                    color={isHeartClicked ? "red" : "black"} // Change color based on state
                  />
                </TouchableOpacity >
                <TouchableOpacity onPress={() => {
                  shareItem()
                }}>

                  <Ionicons name={"send-outline"} size={23} color={"black"} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: "80%",
                  borderWidth: 0.5,
                  borderColor: "gray",
                  alignSelf: "center",
                  marginTop: 20,
                }}
              />
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "90%",
                    backgroundColor: "white",
                    alignSelf: "center",
                    justifyContent: "space-around",
                    paddingVertical: 10,
                    borderWidth: 1,
                    borderColor: "blue",
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 30,
                    }}
                  >
                    ${itemdata.price}
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 10 }}>
                    {itemdata.rating.rate}
                    <MaterialIcons name={"star"} size={15} color={"green"} />
                  </Text>
                  <Text style={{ fontSize: 15, marginTop: 10, marginRight: 50 }}>
                    {itemdata.rating.count}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => [navigation.navigate("Details",itemdata)]}
                >
                  <Text
                    style={{
                      marginTop: 10,
                      borderWidth: 1,
                      borderColor: "gray",
                      padding: 10,
                      width: "95%",
                      alignSelf: "center",
                      backgroundColor: "#cacfd2 ",
                    }}
                  >
                    All Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
          data={GetApi}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                itemfun(item);
              }}
            >
              <View
                style={{
                  width: "100%",
                  marginVertical: 1,
                  flexDirection: "row",
                  backgroundColor: "white",
                  borderRadius: 8,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 100,
                    height: 100,
                  }}
                />
                <View
                  style={{
                    marginLeft: 10,
                  }}
                >
                  <Text>{item.category}</Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "green",
                    }}
                  >
                    ${item.price}
                  </Text>
                  <Text>{item.title}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "white",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
            onPress={() => {
              addtocart();
            }}
          >
            <View
              style={{
                width: "50%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 17,
                }}
              >
                Add to cart
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: "50%",
              height: "100%",
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              addBuy();
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                }}
              >
                Buy now
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  export default ItemBigScreen;
