import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { BigButton, Card, SearchBox } from "../Elements/Interface";
import { Header } from "../Elements/TextStyles";
import { useState } from "react";

interface Props {}

export function MainClientPage({}: Props) {
  let [selectedTab, setSelectedTab] = useState("marmitas")

  return (
    <View style={styles.container}>
      {/* TODO: Barra de navegação lateral, botão do mapa */}
      <Header>Escolha sua próxima broca</Header>
      <SearchBox />
      <View style={styles.typeSelector}>
        <BigButton text="marmitas" style={[{flex:1}]} />
        <BigButton text="bebidas" style={[{flex:1}]} />
      </View>
      <ScrollView
        style={[styles.scrollStyle]}
      >
        <View style={styles.productView}>
          <Card
            name="Salada"
            distance="200 m"
            price="20,00"
            imageSrc="https://reactnative.dev/img/tiny_logo.png"
          />
          <Card
            name="Leite"
            distance="200 m"
            price="20,00"
            imageSrc="https://reactnative.dev/img/tiny_logo.png"
          />
          <Card
            name="Leite"
            distance="200 m"
            price="20,00"
            imageSrc="https://reactnative.dev/img/tiny_logo.png"
          />
          <Card
            name="Leite"
            distance="200 m"
            price="20,00"
            imageSrc="https://reactnative.dev/img/tiny_logo.png"
          />
          <Card
            name="Leite"
            distance="200 m"
            price="20,00"
            imageSrc="https://reactnative.dev/img/tiny_logo.png"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    rowGap: 10,
    marginBottom: 5,
    paddingHorizontal: 20,
  },

  searchBar: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },

  typeSelector: {
    flexDirection: "row"
  },

  scrollStyle: {
  },

  productView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 10,
  },
});
