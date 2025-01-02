import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Modal,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { SELECTADDS } from '../redux/Action';

const Address = ({ navigation }) => {
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [contact, setContact] = useState('');
    const [addresses, setAddresses] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({});
    const dispatch = useDispatch();
    const datas = useSelector((state) => state.ADDRS);

    useEffect(() => {
        const loadAddresses = async () => {
            try {
                const storedAddresses = await AsyncStorage.getItem('addresses');
                if (storedAddresses) {
                    setAddresses(JSON.parse(storedAddresses));
                }
            } catch (error) {
                console.error('Error loading addresses:', error);
            }
        };
        loadAddresses();
    }, []);

    const addAddress = async () => {
        if (!city || !pincode || !contact) {
            alert('Please fill all fields');
            return;
        }

        const newAddress = { id: Date.now().toString(), city, pincode, contact };
        const updatedAddresses = [...addresses, newAddress];

        try {
            await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));
            setAddresses(updatedAddresses);
            setCity('');
            setPincode('');
            setContact('');
        } catch (error) {
            console.error('Error saving address:', error);
        }
    };

    const deleteAddress = async (id) => {
        const updatedAddresses = addresses.filter((address) => address.id !== id);

        try {
            await AsyncStorage.setItem('addresses', JSON.stringify(updatedAddresses));
            setAddresses(updatedAddresses);
        } catch (error) {
            console.error('Error deleting address:', error);
        }
    };

    const selectAddress = (item) => {
        setSelectedAddress(item);
        dispatch(SELECTADDS(item));
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add Address</Text>

            <TextInput
                style={styles.input}
                placeholder="City Name"
                value={city}
                onChangeText={setCity}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Pincode"
                value={pincode}
                keyboardType="numeric"
                onChangeText={setPincode}
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={contact}
                keyboardType="phone-pad"
                onChangeText={setContact}
                placeholderTextColor="#888"
            />

            <TouchableOpacity style={styles.button} onPress={addAddress}>
                <Text style={styles.buttonText}>Add Address</Text>
            </TouchableOpacity>

            <Text style={styles.heading}>Saved Addresses</Text>

            <FlatList
                data={addresses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.addressCard}>
                        <Text style={styles.cardText}>City: {item.city}</Text>
                        <Text style={styles.cardText}>Pincode: {item.pincode}</Text>
                        <Text style={styles.cardText}>Contact: {item.contact}</Text>

                        <View style={styles.cardActions}>
                            <TouchableOpacity
                                style={styles.deleteButton}
                                onPress={() => deleteAddress(item.id)}
                            >
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.selectButton}
                                onPress={() => {
                                    toggleModal();
                                    selectAddress(item);
                                }}
                            >
                                <Text style={styles.selectText}>Select</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            <Modal
                transparent={true}
                animationType="fade"
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirm Address</Text>
                        <Text style={styles.modalText}>City: {datas.city}</Text>
                        <Text style={styles.modalText}>Pincode: {datas.pincode}</Text>
                        <Text style={styles.modalText}>Contact: {datas.contact}</Text>

                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                toggleModal();
                                navigation.navigate('MainHome');
                            }}
                        >
                            <Text style={styles.modalButtonText}>Confirm</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={toggleModal}
                        >
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000', 
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#fff', 
    },
    input: {
        borderWidth: 1,
        borderColor: '#fff', 
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        fontSize: 16,
        color: '#fff', 
        backgroundColor: '#333', 
    },
    button: {
        backgroundColor: '#fff', 
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#000', 
        fontSize: 16,
        fontWeight: 'bold',
    },
    addressCard: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#fff', 
        borderRadius: 8,
        marginBottom: 15,
        backgroundColor: '#333',
    },
    cardText: {
        color: '#fff', 
        marginBottom: 5,
        fontSize: 16,
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    deleteButton: {
        backgroundColor: '#FF4C4C',
        padding: 10,
        borderRadius: 6,
        flex: 0.45,
        alignItems: 'center',
    },
    selectButton: {
        borderWidth: 1,
        borderColor: '#fff', 
        padding: 10,
        borderRadius: 6,
        flex: 0.45,
        alignItems: 'center',
    },
    selectText: {
        color: '#fff', 
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#333', 
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff', 
        marginBottom: 20,
    },
    modalText: {
        color: '#fff', 
        fontSize: 16,
        marginBottom: 10,
    },
    modalButton: {
        backgroundColor: '#fff', 
        padding: 12,
        borderRadius: 6,
        marginVertical: 10,
        alignItems: 'center',
        width: '100%',
    },
    modalButtonText: {
        color: '#000', 
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Address;
