import { View,Text } from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";
import Entypo from "react-native-vector-icons/Entypo"

const Searchs=({navigation})=>{



    return(
        <>
    <View style={{flex:1,backgroundColor:"white"}}>
        <Text>
            hello Search
        </Text>
    </View>
    <BottomTabs navigation={navigation}/>
    </>
)





}

export default Searchs;