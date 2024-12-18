import { View,Text} from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";

const User  = ({navigation})=>{

return(
    <>
    <View style={{flex:1}}>
        <Text>
            hello User
        </Text>
    </View>
<BottomTabs navigation={navigation}/>
    </>
)


}

export default User;