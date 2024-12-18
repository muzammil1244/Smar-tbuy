import { View,Text, StyleSheet, Image} from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import { useDispatch, useSelector } from "react-redux"
import BottomTabs from "../Ui screen components/bottomtabs"
import { REMOVECART } from "../redux/Action"





const Cart  = ({navigation})=>{

    const usereduxStore = useSelector((state)=>state)

    const Dispatch = useDispatch()

    const Removefun=(id)=>{
console.log("remove",id)
Dispatch(REMOVECART(id))

    }
return(
    <>
    <View style={{flex:1}}>

<FlatList
              
            
                data={usereduxStore}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View  style={{margin:10,borderWidth:1,borderColor:"black",borderRadius:10,paddingVertical:10,paddingHorizontal:5}}>
                 
                            <View style={{flexDirection:'row',flex:1,}}>

                            <Image source={{ uri: item.image }} style={{width:80,height:80,flex:1,borderRadius:7,overflow:'hidden'}} />
                            <View style={{flex:2,}}>
                            <Text >{item.title}</Text>
                            <Text style={{color:'green'}} >${item.price}</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',}}>
                                <TouchableOpacity onPress={()=>{
                                    Removefun(item.id)
                                }}>
                                <Text style={{borderWidth:1,borderColor:'black',paddingVertical:10,paddingHorizontal:5,backgroundColor:'#aed6f1',borderRadius:5,}}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                 
                    </View>

                )}
            />
        
    </View>
    <BottomTabs navigation={navigation} />
    </>
)


}

export default Cart;

