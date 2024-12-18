import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, Button } from "react-native";
import CateGories from "./categories";
import ImageSlider from "./imageslider";
import Headerr from "./header";
import BottomTabs from "./bottomtabs";
import { BlurView } from "@react-native-community/blur";

const Productmain = ({ navigation }) => {
    const [getApi, setApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Modall,setModal] = useState(false)

    const apifun = async () => {
        try {
            const url = "https://fakestoreapi.com/products";
            let result = await fetch(url);
            result = await result.json();
            setApi(result);
        } catch (err) {
            console.error("Error fetching API:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        apifun();
    }, []);


    const itemui = (item) => {
        console.log(item)
    }









    if (loading) {
        return (
            <View style={styles.loader}>
                <Text>Loading...</Text>
            </View>
        );
    }

const Modalfun = ()=>{


setModal(!Modall)


}




    return (
        <>
        
        <View style={styles.maincontainer}>
            <Headerr navigation={navigation} Modalfun={Modalfun}/>

            
           

            <FlatList
                ListHeaderComponent={
                    <View>
                        <CateGories />
                        <ImageSlider />
                    </View>
                }
                numColumns={2}
                data={getApi}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("MainItem",{itemdata:item,GetApi:getApi})

                            itemui(item)

                        }}>

                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                        </TouchableOpacity>
                    </View>

                )}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
        <Modal  
        
        transparent={true}
        animationType="fade" // Modal ki animation
        visible={Modall} // Modal visibility ko control karega
        onRequestClose={Modalfun}>
<View style={{
   width: "70%", // Modal content ki width
   height: "50%", // Modal content ki height
   backgroundColor: "rgba(0, 0, 0, 0.9)", // Semi-transparent background
   borderRadius: 10,
   justifyContent: "center",
   alignItems: "center",
   padding: 10,
   alignSelf:'center',
   marginTop:130

}}>
    <View style={{height:"90%",flexDirection:'column',justifyContent:'space-around',width:"90%"}}>
        <Text style={{
            color:'white'
        }}>(1)images</Text>
        <TouchableOpacity>
            <Text style={{width:'100%',backgroundColor:'white',paddingVertical:8,borderRadius:10,textAlign:'center',color:'black'}}>Buy Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={{width:'100%',backgroundColor:'white',paddingVertical:8,borderRadius:10,textAlign:'center',color:'black'}}>Buy Cammera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            setModal(!Modall)
        }}>
            <Text style={{width:'100%',backgroundColor:'white',paddingVertical:8,borderRadius:10,textAlign:'center',color:'black'}}>Cancel</Text>
        </TouchableOpacity>
        

    </View>

</View>
        </Modal>
<BottomTabs navigation={navigation}/>
        </>
    );
};

export default Productmain;

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#f5f5f5",
        flex: 1,
    },
    flatListContainer: {
        paddingBottom: 10,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        marginBottom: 15,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        flex: 1,
        marginHorizontal: 5,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
        color: "#333",
    },
    price: {
        fontSize: 14,
        color: "#888",
    },modalWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "70%", // Modal content ki width
        height: "50%", // Modal content ki height
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});
