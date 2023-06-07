import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Card, CardProps } from "./Card";

interface Props { 
  cards? : CardProps[]
};

export const CardsScroll = ({cards}: Props) => {
  return (
    <FlatList
      data={cards}
      style={styles.productView}
      numColumns={2}
      ItemSeparatorComponent={() => <View style={{ width: 10, height:10 }} />}
      renderItem={({ item, index }) => {
        return (
          <View
            style={[
              {
                flexGrow: 1,
                width: "50%",
                position: "relative",
              },
              index % 2 === 0
                ? {
                    paddingRight: 5,
                  }
                : {
                    paddingLeft: 5,
                  },
            ]}
          >
            <Card
              name={item.name}
              distance={item.distance}
              price={item.price}
              imageSrc={item.imageSrc}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  productView: {
    flex: 1,
  },
});
