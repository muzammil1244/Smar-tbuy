import { Image, View ,Text} from "react-native"



const FirstScreen = ({ navigation }) => {



  setTimeout(() => {
    navigation.navigate("Login")
  }, 4000);

return(

<View style={{flex:1,   flexDirection:'row',justifyContent:'center', alignItems:'center'}}>

<View style={{backgroundColor:'#cecece',width:'50%',height:"100%"}}>


        </View>
<View style={{backgroundColor:'#302e2f',width:'50%',height:"100%"}}>

    </View>
    

        <View style={{width:120,height:120,  position:'absolute',alignSelf:'center',elevation:23,
}}>
        <Image source={require("../images/additimage.png")} style={{width:120,height:120,
          borderWidth:1,
          borderRadius:40,borderColor:'#cecece'
          }}/>


         
        </View> 

        <Text style={{textAlign:'center',color:'#302e2f',fontSize:20,fontWeight:'bold',marginTop:10,
            position:'absolute',top:370
        }}>
        Smar
        <Text style={{color:"#cecece"}}>t Buy</Text>
      </Text>  
</View>

)


}

export default FirstScreen