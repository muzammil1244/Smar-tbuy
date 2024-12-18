import { View,Text } from "react-native"
import BottomTabs from "../Ui screen components/bottomtabs";

const Searchs=({navigation})=>{



    return(
        <>
    <View style={{flex:1}}>
        <Text>
            hello Search
        </Text>
    </View>
    <BottomTabs navigation={navigation}/>
    </>
)





}

export default Searchs;