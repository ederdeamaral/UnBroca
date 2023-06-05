import { View, Image, StyleSheet, TextInput, StyleProp, ViewStyle } from "react-native";

interface Props {
  style?: StyleProp<ViewStyle>;
};

export function SearchBox({style}: Props) {
  return (
    <View style={[styles.searchBar, style]}>
      <Image source={require("../../../assets/lupa.png")} />
      <TextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
});
