import { useState } from "react";
import { View, Image, StyleSheet, TextInput, StyleProp, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
};

export function SearchBox({style}: Props) {
  const [text, setText] = useState('');
  return (
    <View style={[styles.searchBar, style]}>
      <Image source={require("../../../assets/lupa.png")} />
      <TextInput 
        placeholder="Pesquisar"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    columnGap: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
});
