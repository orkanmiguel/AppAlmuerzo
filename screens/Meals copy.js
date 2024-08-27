import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../component/ListItem";

//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  list: {
    alignSelf: "stretch",
  },
});

const data = [{ _id: "lala", name: "Churrasco", desc: "Plato Tipico!, palta" }];

const Meals = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Almuerzo</Text>
    </View>
  );
};

Meals.navigationOptions = {
  title: "Comidas",
};

export default Meals;
