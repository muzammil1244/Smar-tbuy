import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ItemBigScreen from "./components/itemBigScreen";
import Productmain from "./Ui screen components/prodecutscreen";
import Cart from "./components/Cart";
import Explore from "./components/Explore";
import CateGories2 from "./components/Categories2";
import User from "./components/User";
import Searchs from "./components/Search";
import AllDetails from "./components/AllDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Address from "./components/Address";
import LikeScreen from "./components/Like";
import Create from "./authentication/Ceate";
import Login from "./authentication/Login";
import ImageSlider from "./Ui screen components/imageslider";
import PaymentScreen from "./components/Pament";
import Complete from "./components/complet";
import FirstScreen from "./Ui screen components/firstscreen";
import OrderItem from "./components/orderitem";
import OnlinePayment from "./components/onlinePayment";
import OrderItems from "./components/onlinesecond";


const Stack = createStackNavigator()

const App = () => {




  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FirstScreen" screenOptions={
          {
            headerShown: false,
          }
        }>

          <Stack.Screen name="MainHome" component={Productmain} />
          <Stack.Screen name="MainItem" component={ItemBigScreen} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Categories" component={CateGories2} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Search" component={Searchs} />
          <Stack.Screen name="Details" component={AllDetails} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="Like" component={LikeScreen} />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Image" component={ImageSlider} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
          <Stack.Screen name="Complete" component={Complete} />
          <Stack.Screen name="FirstScreen" component={FirstScreen} />
          <Stack.Screen name="Order" component={OrderItem} />
<Stack.Screen name="Online" component={OnlinePayment} />
<Stack.Screen name="Onlinepayorder" component={OrderItems} />


        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;