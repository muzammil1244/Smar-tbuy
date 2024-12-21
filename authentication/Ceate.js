import { Text, TextComponent, TouchableOpacity, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"

const Create=()=>{

return(
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40,fontStyle:"italic"}}>Create</Text>

        <View style={{ width:"75%",height:"60%",borderWidth:1,   backgroundColor: "rgba(0, 0, 0, 0.9)",
        borderRadius:20,justifyContent:'center'
}}>

<View style={{alignItems:'center',flexDirection:'column',justifyContent:'space-around',height:"70%"}}>

<TextInput placeholder="Enter Email" style={{backgroundColor:'white',width:"80%",borderRadius:15,textAlign:'center'}}/>
<TextInput placeholder="Enter Email" style={{backgroundColor:'white',width:"80%",borderRadius:15,textAlign:'center'}}/>
<TouchableOpacity>
    <Text style={{textAlign:'center',backgroundColor:'white',paddingVertical:15,paddingHorizontal:96,color:'blak',borderRadius:15,color:'black'}}>Ok</Text>
</TouchableOpacity>
</View>
<TouchableOpacity>
<Text style={{color:'white',margin:10,marginLeft:140}}>if have account</Text>

</TouchableOpacity>


        </View>
    </View>
)

}

export default Create