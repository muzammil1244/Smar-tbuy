import { useEffect } from "react"
import { View,Text, TouchableOpacity } from "react-native"

const AllDetails = ({navigation,route})=>{
    const items = route.params

useEffect(()=>{
console.log(items)
})
return(
    <View style={{flex:1,backgroundColor:'white',}}>

        
<View style={{width:"80%",height:"100%",padding:20}}>

<Text style={{marginVertical:10}}> 1) Category : {items.category}</Text>
<Text style={{marginVertical:10}}> 2)Price : ${items.price}</Text>
<Text style={{marginVertical:10}}> 3) title: {items.title}</Text>
<Text style={{marginVertical:10}}>  4) descriptions : {items.description}</Text>
    
    <TouchableOpacity onPress={()=>navigation.navigate("MainHome")} >
        
        <Text style={{color:"white",backgroundColor:"black",width:100,padding:10,borderRadius:10,textAlign:'center',marginLeft:180,marginTop:50}}> Go back</Text>
        
        </TouchableOpacity>    
    </View>    

    
    </View>
)




}
export default AllDetails ;