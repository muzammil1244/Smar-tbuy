import { View,Text} from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";

const CateGories2  = ({navigation})=>{

return(
    <>
    <View style={{flex:1}}>
        <Text>
            hello categories
        </Text>
    </View>
    <BottomTabs navigation={navigation} />
    </>
)


}

export default CateGories2;