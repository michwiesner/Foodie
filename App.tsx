import { PaperProvider } from "react-native-paper";
import { customTheme } from "./utils/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CartDetails from "./screens/CartDetails";
import PaymentMessage from "./screens/PaymentMessage";

const Stack = createNativeStackNavigator();

const App = () => (
  <PaperProvider theme={customTheme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="cart" component={CartDetails} />
        <Stack.Screen name="payment" component={PaymentMessage} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
);

export default App;
