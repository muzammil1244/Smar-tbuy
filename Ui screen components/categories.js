import { useEffect, useState } from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const CateGories = ({navigation}) => {
    const [getApi, setAPi] = useState([]);

    const categoriesfun = async () => {
        const url = 'https://api.escuelajs.co/api/v1/categories';

        try {
            let resulte = await fetch(url);
            resulte = await resulte.json();
            setAPi(resulte.slice(0, 6)); 
        } catch (err) {
            console.log("Error fetching categories:", err);
        }
    };

    useEffect(() => {
        categoriesfun();
    }, []);


const categoryfun =(items)=>{

navigation.navigate("Categories")
}


    return (
        <View style={styles.mainContainer}>
            <FlatList
            horizontal={true}
                data={getApi}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.card}>
                            <TouchableOpacity onPress={()=>categoryfun({item})}>
                            <Image 
                                source={{ uri: item.image }} 
                                style={styles.image} 
                            />
                            <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default CateGories;

const styles = StyleSheet.create({
    mainContainer: {
      height:120,
        padding: 10,
        backgroundColor: "#f8f8f8",
    },
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        overflow: "hidden",
        elevation: 3,
        padding: 10,
        alignItems: "center",
        width:100
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
});
