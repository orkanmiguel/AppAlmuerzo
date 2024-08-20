import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem from "../component/ListItem";
import useFecth from "../hooks/useFetch";

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

/* const data = [{ _id: "lala", name: "Churrasco", desc: "Plato Tipico!, palta" }]; */

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFecth("http://192.168.1.87:3001/Meals");

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <FlatList
          style={styles.list}
          data={meals}
          keyExtractor={(x) => String(x.id)}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate("Modal", { id: item.id })}
              name={item.name}
            />
          )}
        />
      )}
    </View>
  );
};

Meals.navigationOptions = {
  title: "Comidas",
};

export default Meals;
