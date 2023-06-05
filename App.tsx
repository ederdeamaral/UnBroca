import { StatusBar } from "expo-status-bar";
import { StrictMode } from "react";
import { View } from "react-native";

import { ColorPalette } from "./assets/Globals";
import { MainClientPage } from "./Components/Pages/MainClientPage"

export default function App() {
  return (
    <StrictMode>
    <View style={{backgroundColor: ColorPalette.Gray1, flex:1}}>
        <MainClientPage/>
        <StatusBar />
    </View>
    </StrictMode>
  );
}