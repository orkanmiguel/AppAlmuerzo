import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useFecth from "../hooks/useFetch";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ({ route, navigation }) => {
  const id = route.params.id;
  const { loading, data } = useFecth(`http://192.168.1.87:3001/Meals/${id}`);
  console.log(data);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Cargando...</Text>
      ) : (
        <>
          <Text>{data.id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.desc}</Text>
          <Button
            title="Aceptar"
            onPress={() => {
              fetch("http://192.168.1.87:3001/Orders", {
                method: "POST",
                headers: {
                  "Content-Type": "aplication/json",
                },
                body: JSON.stringify({
                  meal_id: id,
                  user_id: "lele",
                }),
              }).then(() => {
                alert("order fue generada con exito");
                navigation.navigate("Meals");
              });
            }}
          />
          <Button
            title="Cancelar"
            onPress={() => navigation.navigate("Meals")}
          />
        </>
      )}
    </View>
  );
};
