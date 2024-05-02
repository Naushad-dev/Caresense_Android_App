import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import Routes from "./src/navigation/Routes";
import { AuthProvider } from "./src/state/AuthContext";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
// import { myFonts } from './src/config/customfonts';
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const myFonts = {
    "Poppins-Black": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
  };

  const [fontsLoaded] = useFonts(myFonts);

  return (
    <PaperProvider>
      <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Routes />
        </GestureHandlerRootView>
      </AuthProvider>

      <StatusBar style="auto" />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
