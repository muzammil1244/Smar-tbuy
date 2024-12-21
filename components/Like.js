import { isValidElement, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { REMOVELIKE } from "../redux/Action";



const LikeScreen = () => {






    const like = useSelector((state) => state.likes)

    useEffect(() => {

        console.log("lieks screen ", like)

    }, [])

    const removeitem =useDispatch()

    const removelike=(id)=>{

removeitem(REMOVELIKE(id))

    }
    return (
        <View>
            <FlatList


                data={like}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ margin: 10, borderWidth: 1, borderColor: "black", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 5 }}>

                        <View style={{ flexDirection: 'row', flex: 1, }}>

                            <Image source={{ uri: item.image }} style={{ width: 80, height: 80, flex: 1, borderRadius: 7, overflow: 'hidden' }} />
                            <View style={{ flex: 2, }}>
                                <Text >{item.title}</Text>
                                <Text style={{ color: 'green' }} >${item.price}</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => {
                                    removelike(item.id)

                                }}>
                                    <FontAwesome
                                        name={"heart"}
                                        size={23}
                                        color={"red"}
/>
                                         </TouchableOpacity>



                            </View>
                        </View>

                    </View>

                )}
            />
        </View>
    )
}

export default LikeScreen;