import { View,Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ItemBigScreen from "./components/itemBigScreen";
import Productmain from "./Ui screen components/prodecutscreen";
import Cart from "./components/Cart";
import Explore from "./components/Explore";
import CateGories2 from "./components/Categories2";
import User from "./components/User";
import Searchs from "./components/Search";



const Stack = createStackNavigator()

const App= ()=>{

  
  

  return(
<NavigationContainer>
<Stack.Navigator initialRouteName="MainHome" screenOptions={
  {
    headerShown:false
  }
}>
        <Stack.Screen name="MainHome" component={Productmain} /> 
        <Stack.Screen name= "MainItem"component={ItemBigScreen} />
        <Stack.Screen name= "Cart"component={Cart} />
        <Stack.Screen name= "Explore"component={Explore} />
        <Stack.Screen name= "Categories"component={CateGories2} />
        <Stack.Screen name= "User"component={User} />
        <Stack.Screen name= "Search"component={Searchs} />




</Stack.Navigator>
</NavigationContainer>
  )
}

export default App;