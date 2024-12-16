import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Icons from "react-native-vector-icons/EvilIcons"

const Headerr = ({navigation}) => {

    return (

        <View >
            <LinearGradient
                colors={["black", "black", "#5f5f5f"]} 
                style={style.headercontainer}
            >
                <Icons name={'navicon'} size={42} color={'white'} style={{
                    marginBottom: 10
                    
                }} />
                <TouchableOpacity onPress={()=>{
                    navigation.navigate("Search")
                }}>
                    <Text style={style.hederitem}>

                        Search Product
                    </Text>

                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,

                }}>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate("Search")
                    }}>
                        <Icons name={"search"} size={42} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icons name={"camera"} size={42} color={'white'} />
                    </TouchableOpacity>

                </View>
            </LinearGradient>

        </View>

    )
}

export default Headerr;

const style = StyleSheet.create({
    headercontainer: {
        backgroundColor: "black",
        height: 80,
        width: "100%",

        alignSelf: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius:25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',



    },
    hederitem: {
        color: 'white',
        borderWidth: 2,
        borderColor: "white",
        width: 150,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 11



    }

})