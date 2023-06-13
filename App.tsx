import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { View, StyleSheet } from "react-native";

import { ColorPalette } from "./assets/Globals";
import { MainShopperPage } from "./Components/Pages";
import { DemoPage } from "./Components/Pages/DemoPage/DemoPage";

export default function App() {
  return (
    <StrictMode>
    <View style={styles.app}>
      <View style={[styles.safeSpace, styles.androidSafeSpace]}>
        <DemoPage />
        <StatusBar />
      </View>
    </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: ColorPalette.Primary,
    flex:1,
  },

  safeSpace: {
    backgroundColor: ColorPalette.Gray1,
    flex: 1,
    overflow: "hidden",
  },

  androidSafeSpace: {
    position: "absolute",
    left: 0,
    right: 0,
    top:40,
    bottom: 0,
  }
});
