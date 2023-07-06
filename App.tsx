// theme
import { customTheme } from "./utils/theme";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// providers
import { PaperProvider } from "react-native-paper";
import ProductProvider from "./context/ProductContext";
// components
import Home from "./views/Home";
import CartDetails from "./views/CartDetails";
import PaymentMessage from "./views/PaymentMessage";
import AppBar from "./components/AppBar";
import Address from "./views/Address";
import Payment from "./views/Payment";

const Stack = createNativeStackNavigator();

const App = () => (
  <PaperProvider theme={customTheme}>
    <ProductProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ header: (props) => <AppBar {...props} /> }}
          >
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="cart" component={CartDetails} />
            <Stack.Screen name="address" component={Address} />
            <Stack.Screen name="payment" component={Payment} />
            <Stack.Screen name="payment-message" component={PaymentMessage} />
          </Stack.Navigator>
        </NavigationContainer>
    </ProductProvider>
  </PaperProvider>
);

export default App;
