import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PaymentScreen = ({ route, navigation }) => {
    const { quantety , itemdata  } = route.params;

    console.log("Route Params:", route.params); 
console.log("ressss",quantety)

    const [currentTime, setCurrentTime] = useState('');
    const [futureTime, setFutureTime] = useState('');

    useEffect(() => {
        const now = new Date();
        const formattedCurrentTime = now.toLocaleString();
        setCurrentTime(formattedCurrentTime);
        const future = new Date(now.getTime() + 10 * 60 * 60 * 1000);
        const formattedFutureTime = future.toLocaleString();
        setFutureTime(formattedFutureTime);
    }, []);

    return (
        <View style={styles.container}>
           
            <View style={styles.infoContainer}>
                <Text style={styles.deliveryTimeText}>
                    Your order will be delivered by {futureTime}
                </Text>
                <Text style={styles.quantityText}>Quantity: {quantety}</Text>
            </View>

       
            <View style={styles.textcontainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Order", { itemdata: itemdata, quantety: quantety })}
                    style={styles.paymentButton}
                >
                    <Text style={styles.textstyle}>Cash on Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Onlinepayorder", { itemdata: itemdata, quantety: quantety })}
                    style={styles.paymentButton}
                >
                    <Text style={styles.textstyle}>Online Payment</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfoText}>
                    Please make sure to check your order details before confirming the payment.
                </Text>
                <Text style={styles.additionalInfoText}>
                    You can change the payment method at any time before the order is processed.
                </Text>
            </View>
        </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    infoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    deliveryTimeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    quantityText: {
        fontSize: 16,
        color: 'lightgreen',
        marginTop: 10,
    },
    textcontainer: {
        padding: 10,
        alignItems: 'center',
    },
    paymentButton: {
        width: '100%',
        marginVertical: 8,
    },
    textstyle: {
        padding: 20,
        backgroundColor: '#555',
        textAlign: 'center',
        borderRadius: 10,
        elevation: 8,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    additionalInfoContainer: {
        padding: 15,
        marginTop: 20,
        backgroundColor: '#333',
        borderTopWidth: 1,
        borderTopColor: '#444',
    },
    additionalInfoText: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 10,
    },
});
