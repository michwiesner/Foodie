import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  PaperProvider,
  Appbar,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { customTheme } from "./utils/theme";


const App = () => (
  <PaperProvider theme={customTheme}>
    <View>
      <Text>Open up App.js to start working on your app!xf dffgd</Text>
      <StatusBar style="auto" />
    </View>
  </PaperProvider>
);

export default App;
