import { View, Text, ScrollView, StyleSheet} from 'react-native'
import { Card } from '../Elements/Interface'

interface Props {}

export function MainClientPage({}: Props) {
  return (
    <View>
        <Text>Escolha sua próxima broca</Text>
          <ScrollView style={styles.scrollStyle}>
            <View style={styles.container}>
              <Card name="Salada" distance="200 m" price="20,00" imageSrc="https://reactnative.dev/img/tiny_logo.png"/>
              <Card name="Leite" distance="200 m"  price="20,00" imageSrc="https://reactnative.dev/img/tiny_logo.png"/>
              <Card name="Leite" distance="200 m"  price="20,00" imageSrc="https://reactnative.dev/img/tiny_logo.png"/>
              <Card name="Leite" distance="200 m"  price="20,00" imageSrc="https://reactnative.dev/img/tiny_logo.png"/>
              <Card name="Leite" distance="200 m"  price="20,00" imageSrc="https://reactnative.dev/img/tiny_logo.png"/>
            </View>
          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    scrollStyle: {
      paddingHorizontal: 20,
    },
  
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      rowGap: 10,
    },
  });
  