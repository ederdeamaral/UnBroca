import { FlatList, Text, StyleSheet, View } from "react-native";
import { Card, CardProps } from "./Card";
import { ColorPalette } from "../../../assets/Globals";

interface Props {
  cards?: CardProps[];
}

const renderer = (item: CardProps, index: number) => {
  return (
      <Card
        name     = {item.name}
        distance = {item.distance}
        price    = {item.price}
        imageSrc = {item.imageSrc}
        style    = {{ flex:1/2, margin: 5}}
      />
  );
};

export function CardsScroll({ cards }: Props) {
  return (
    <FlatList
      data={cards}
      style={styles.productView}
      numColumns={2}
      renderItem={({ item, index }) => {
        return renderer(item, index);
      }}
      ListEmptyComponent={
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center",
            color: ColorPalette.Gray2,
          }}
        >
          Sem items para mostrar!
        </Text>
      }
    />
  );
}

const styles = StyleSheet.create({
  productView: {
    flex: 1,
    alignContent: "space-around",
  },
});
