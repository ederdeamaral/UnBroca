import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { SearchBox, CardsScroll } from "../../Elements/Interface";
import { Header } from "../../Elements/TextStyles";
import { useState } from "react";


const dummyCards = Array.from({ length: 30 }).map((_, i) => {
  return {
    name: `This is the title! ${i + 1}`,
    distance: `${(i + 1)*100}m`,
    price: `${((i + 1)%10)*10}`,
    imageSrc: `https://picsum.photos/1440/2842?random=${i}`,
  };
});

interface Props {}

export function MainClientPage({}: Props) {
  let [selectedTab, setSelectedTab] = useState("marmitas")

  return (
    <View style={styles.container}>
      {/* TODO: Barra de navegação lateral, botão do mapa */}
      <Header>Escolha sua próxima broca</Header>
      <SearchBox />
      <CardsScroll cards={dummyCards}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    rowGap: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },

  typeSelector: {
    flexDirection: "row"
  },

});
