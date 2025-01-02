import { View,Text} from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";

const CateGories2  = ({navigation})=>{

return(
    <>
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
        <Text style={{fontSize:25,color:'black'}}>Not Found</Text>
    </View>
    <BottomTabs navigation={navigation} />
    </>
)


}

export default CateGories2;