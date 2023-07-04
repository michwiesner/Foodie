import { PaperProvider } from "react-native-paper";
import { customTheme } from "./utils/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./views/Home";
import CartDetails from "./views/CartDetails";
import PaymentMessage from "./views/PaymentMessage";
import AppBar from "./components/AppBar";
import ProductProvider from "./context/productContext";

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
          <Stack.Screen name="payment" component={PaymentMessage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductProvider>
  </PaperProvider>
);

export default App;
