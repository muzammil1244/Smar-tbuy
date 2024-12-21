import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const Address=({navigation})=>{

return(

<View style={{flex:1,backgroundColor:"white",padding:10}}>
    <View style={{width:'100%',height:200,borderWidth:1,
    borderRadius:10

    }}>

    </View>

<View>
    <View>
<Text>contact No</Text>
<TextInput placeholder="Enter" style={style.inputstyle}/>
</View>
<View>
<Text>city </Text>
<TextInput placeholder="Enter" style={style.inputstyle}/>
</View>
<View>
<Text>pincode</Text>
<TextInput placeholder="Enter" style={style.inputstyle}/>
</View>
<View>
<Text>gmail id</Text>
<TextInput placeholder="Enter" style={style.inputstyle}/>
</View>
</View>
<TouchableOpacity onPress={()=>navigation.navigate("MainHome")}>
    <Text style={{color:'white',backgroundColor:'black',width:100,textAlign:'center',padding:10,borderRadius:10,marginLeft:240,marginTop:20}}>OK</Text>
</TouchableOpacity>
</View>

)



}
export default Address;
const style = StyleSheet.create({

    inputstyle:{
borderWidth:1,
borderRadius:10,
textAlign:'center',



    }




})