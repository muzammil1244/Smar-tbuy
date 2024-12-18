import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import IconsMat from "react-native-vector-icons/MaterialIcons"
import Iconsfeath from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"






const BottomTabs = ({navigation}) => {

    return (

        <View >
            <LinearGradient colors={["black", "#3b3b3b"]} style={style.bottomtcontainermain}>
               
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Explore")
                }}>
                    <Entypo name={'compass'} size={25} color={'white'} />

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("User")
                }}>
                    <Iconsfeath name={'user'} size={25} color={'white'} />

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("MainHome")
                }}>
                    <AntDesign name={"home"} size={25} color={"white"} />
                    <Text style={{color:'white',fontSize:10,marginBottom:10}}>
                        home
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Categories")
                }}>
                    <FontAwesome name={'th-large'} size={25} color={'white'} />

                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Cart")
                }}>
                    <Iconsfeath name={"shopping-cart"} size={25} color={"white"} />

                </TouchableOpacity>
            </LinearGradient>
        </View>

    )



}


export default BottomTabs;

const style = StyleSheet.create({

    bottomtcontainermain: {
        height: 50,
        width: "100%",
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingVertical: 10

    }




})