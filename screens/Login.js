import React from "react";
import useForm from "../hooks/useForm";

import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    alignSelf: "stretch", //ocupar todo el ancho de la pantalla
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});

export default ({ navigation }) => {
  const initialState = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    fetch("http://localhost:3001/Login", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(values),
    })
      .then((x) => x.text())
      .then((x) => {
        try {
          return JSON.parse(x);
        } catch {
          throw x;
        }
      })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);
  /*   console.log("cargando console.", inputs); */
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        autoCapitalize="none"
        value={inputs.email}
        onChangeText={subscribe("email")}
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        autoCapitalize="none"
        value={inputs.password}
        onChangeText={subscribe("password")}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="iniciar sesion" onPress={handleSubmit} />
      <Button
        title="Registrarse"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
};
