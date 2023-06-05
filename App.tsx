import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { View, StyleSheet } from "react-native";

import { ColorPalette } from "./assets/Globals";
import { MainClientPage } from "./Components/Pages";

export default function App() {
  return (
    <StrictMode>
    <View style={styles.app}>
      <View style={[styles.safeSpace, styles.androidSafeSpace]}>
        <MainClientPage/>
        <StatusBar />
      </View>
    </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: ColorPalette.Gray1,
    flex:1,
  },

  safeSpace: {
    flex: 1,
    overflow: "hidden",
  },

  androidSafeSpace: {
    position: "absolute",
    top:25,
    bottom: 0,
  }
});
