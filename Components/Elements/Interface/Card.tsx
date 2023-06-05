import React from "react";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import { ColorPalette } from "../../../assets/Globals";

export interface CardProps {
  name: string;
  distance: string;
  price: string;
  imageSrc: string;
  onPress?: () => void;
}

export function Card({ name, distance, price, imageSrc, onPress}: CardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.whiteBoard}></View>
      
      <Image source={{ uri: imageSrc }} style={styles.cardImage} />
      
      <Text style={[{flex: 1.5, overflow:"hidden"}, styles.text]}>
        {name}
      </Text>
      <Text style={[{color: ColorPalette.Gray2, flex:1}, styles.text]}>
        {"A " + distance}
      </Text>
      <Text style={[{color: ColorPalette.Primary, flex:1}, styles.text]}>
        {"R$ " + price}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "normal",
  },
  
  card: {
    width: 170,
    height: 290,
    padding: 10,
    
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    rowGap: 7,
  },

  cardImage: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },

  whiteBoard: {
    borderRadius: 20,
    backgroundColor: "#ffffff",

    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
