import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput, ActivityIndicator } from "react-native";
import { useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import Headerr from "./header";
import BottomTabs from "./bottomtabs";
import ImageSlider from "./imageslider";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const categories = ["beauty", "fragrances", "furniture", "groceries"];

const Productmain = ({ navigation }) => {
    const [getApi, setApi] = useState([]);
    const [filteredApi, setFilteredApi] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Modall, setModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [sModal, setSModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addrs = useSelector((state) => state.ADDRS);

    const apifun = async () => {
        try {
            const url = "https://dummyjson.com/products";
            let result = await fetch(url);
            result = await result.json();
            setApi(result.products);
            setFilteredApi(result.products);
        } catch (err) {
            console.error("Error fetching API:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        apifun();
    }, []);

    const filterProductsByCategory = (category) => {
        if (category === "All") {
            setFilteredApi(getApi);
        } else {
            const filtered = getApi.filter(product => product.category === category);
            setFilteredApi(filtered);
        }
        setSelectedCategory(category);
    };

    const openCamera = () => {
        const options = {
            mediaType: 'photo',
            cameraType: 'back',
        };
        launchCamera(options, (response) => {
            if (!response.didCancel && !response.errorMessage) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    const openImageLibrary = () => {
        const options = {
            mediaType: 'photo',
        };
        launchImageLibrary(options, (response) => {
            if (!response.didCancel && !response.errorMessage) {
                setSelectedImage(response.assets[0].uri);
            }
        });
    };

    const ModalSfun = () => setSModal(!sModal);
    const Modalfun = () => setModal(!Modall);

    if (loading) {
        return (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#1e1e1e" />
            </View>
        );
    }

    return (
        <>
            <View style={styles.maincontainer}>
                <Headerr navigation={navigation} Modalfun={Modalfun} ModalSfun={ModalSfun} />

                <View style={styles.categoriesContainer}>
                    <FlatList
                        horizontal
                        data={["All", ...categories]}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.categoryButton, selectedCategory === item && styles.selectedCategory]}
                                onPress={() => filterProductsByCategory(item)}
                            >
                                <Text style={styles.categoryText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <FlatList
                    ListHeaderComponent={
                        <View>
                            <View style={styles.addressContainer}>
                                <TouchableOpacity style={styles.addressButton} onPress={() => navigation.navigate("Address")}>
                                    <Feather name="map-pin" size={20} color="white" />
                                    <Text style={styles.addressText}>
                                        Address: {addrs.city} Contact: {addrs.contact} Pincode: {addrs.pincode}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <ImageSlider />
                        </View>
                    }
                    numColumns={2}
                    data={filteredApi}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <TouchableOpacity onPress={() => navigation.navigate("MainItem", { itemdata: item, GetApi: getApi })}>
                                <Image style={styles.image} source={{ uri: item.images[0] }} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                />
            </View>

            <Modal transparent={true} animationType="fade" visible={Modall} onRequestClose={Modalfun}>
                <View style={styles.modalWrapper}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>{selectedImage ? "1 image selected" : "No image selected"}</Text>
                        <TouchableOpacity onPress={openImageLibrary} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Open Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Open Camera</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Modalfun} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal transparent={true} animationType="fade" visible={sModal} onRequestClose={ModalSfun}>
                <View style={styles.modalWrapper}>
                    <View style={styles.modalContent}>
                        <TextInput placeholder="Search" placeholderTextColor="#bbb" style={styles.searchInput} />
                        <TouchableOpacity onPress={ModalSfun} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <BottomTabs navigation={navigation} />
        </>
    );
};

export default Productmain;

const styles = StyleSheet.create({
    maincontainer: {
        backgroundColor: "#121212",
        flex: 1,
    },
    flatListContainer: {
        paddingBottom: 10,
    },
    loader: {
        flex: 1,
        backgroundColor: "#2a2a2a",
        justifyContent: "center",
        alignItems: "center",
    },
    loaderText: {
        color: "white",
        fontSize: 16,
    },
    card: {
        marginBottom: 15,
        backgroundColor: "#1e1e1e",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 3,
        flex: 1,
        marginHorizontal: 5,
        marginTop: 20,
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
        color: "#ffffff",
    },
    price: {
        fontSize: 14,
        color: "#a1a1a1",
    },
    categoriesContainer: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "space-around",
    },
    categoryButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        backgroundColor: "#2a2a2a",
        borderRadius: 10,
    },
    selectedCategory: {
        backgroundColor: "#444",
    },
    categoryText: {
        color: "#e0e0e0",
    },
    addressContainer: {
        width: "100%",
        height: 40,
        marginTop: 5,
    },
    addressButton: {
        width: "100%",
        height: 40,
        backgroundColor: "#1a1a1a",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    addressText: {
        color: "#d0d0d0",
        fontSize: 14,
    },
    modalWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    modalContent: {
        width: "80%",
        backgroundColor: "#222",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    modalText: {
        color: "white",
        fontSize: 18,
        marginBottom: 15,
    },
    modalButton: {
        width: "90%",
        backgroundColor: "#333",
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
    },
    searchInput: {
        width: "90%",
        backgroundColor: "#333",
        borderRadius: 10,
        color: "#fff",}
    })
