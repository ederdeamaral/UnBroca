import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { StyledTextInput } from "../../Elements/Interface/Forms/StyledTextInput";

export function DemoPage() {
  const [text, setText] = useState("hehe");

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <StyledTextInput style={{flex:0.33}} title="Form input 1" placeholder="Hey, it's me"/>
        <StyledTextInput style={{flex:0.33}} title="Form input 2" placeholder="Placeholder"/>
        <StyledTextInput style={{flex:0.33}} title="Form input 3" placeholder="Can you see me here by the side?"/>
      </View>
      <StyledTextInput title="Big form" placeholder="placeholder"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    gap: 20,
    paddingHorizontal: 10,
    justifyContent: "flex-start",
    alignContent: "stretch"
  },
});
