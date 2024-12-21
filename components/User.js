import { View,Text, Image, TouchableOpacity} from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";
import Entypo from "react-native-vector-icons/Entypo"
import { ScrollView } from "react-native-gesture-handler";

const User  = ({navigation})=>{

return(
    <>
    <View style={{flex:1}}>
       <View style={{width:'100%',height:200,padding:10,justifyContent:'center',alignItems:'center'}}>
        <Image style={{width:100,height:100}} source={{uri:"https://cdn-icons-png.flaticon.com/512/219/219970.png"}}/>
        <Text style={{marginTop:10}}>Mohammad Muzammil</Text>
       </View>

       <View style={{height:"100%"}}>
        <View style={{borderWidth:0.5,borderColor:'gray',alignSelf:'center',marginVertical:10,width:"70%"}}/>
       <View style={{width:'100%', flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Cart")
        }} >    
                <Text style={{backgroundColor:'white',paddingVertical:10,paddingHorizontal:65,borderRadius:10,color:'black'}}>cart</Text>
</TouchableOpacity>
<TouchableOpacity>
    <Text style={{backgroundColor:'white',paddingVertical:10,paddingHorizontal:65,borderRadius:10,color:'black'}}>like</Text>
</TouchableOpacity>


       </View>
       <ScrollView style={{padding:10,height:'55%'}}>
       <View style={{justifyContent:'space-around',height:'100%',flexDirection:'column',marginVertical:20}} >
<TouchableOpacity><View style={{width:'100%',backgroundColor:'white',padding:10}}>
    <Text style={{color:'black'}}>Setting</Text>
</View></TouchableOpacity>

<TouchableOpacity><View style={{width:'100%',backgroundColor:'white',padding:10}}>
    <Text style={{color:'black'}}>support</Text>
</View></TouchableOpacity>
<TouchableOpacity><View style={{width:'100%',backgroundColor:'white',padding:10}}>
    <Text style={{color:'black'}}>privecy policy</Text>
</View></TouchableOpacity>
<TouchableOpacity><View style={{width:'100%',backgroundColor:'white',padding:10}}>
    <Text style={{color:'black'}}>suport team</Text>
</View>

</TouchableOpacity>

<TouchableOpacity >
    
    <View style={{width:'100%',backgroundColor:'white',padding:10}}>


    <Text style={{color:'black'}}>Aboute</Text>

</View>

</TouchableOpacity>




       </View>
       </ScrollView>
       </View>
    </View>
<BottomTabs navigation={navigation}/>
    </>
)


}

export default User;