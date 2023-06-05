import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { GestureResponderEvent } from "react-native/types";
import { ColorPalette } from "../../../assets/Globals";

export interface BigButtonProps {
  text: String;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  active?: true | boolean;
}

export function BigButton({ text, onPress, active }: BigButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? ColorPalette.PrimaryFaded
            : ColorPalette.Primary,
        },
        styles.button,
      ]}
      hitSlop={{
        bottom: 5,
        left: 5,
        right: 5,
        top: 5,
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    width: 280,
    margin: 5,
  },

  text: {
    userSelect: "none",
    color: "#fff",
  },
});
