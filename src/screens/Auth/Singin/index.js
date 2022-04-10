import React, { useState, Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";
import { Input, Icon, Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { actions } from "../../../store/actions";
import { useDispatch } from "react-redux";

export default SignIn = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const dispatch = useDispatch();
  const onChangeEmail = (value) => {
    setEmail(value);
  };
  const onChangePw = (value) => {
    setPw(value);
  };

  const _signIn = async () => {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem("user", JSON.stringify(true));
      } catch (e) {
        // saving error
      }
      dispatch(actions.user.setUser(true));
    };
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column", width }}>
        <View style={{ marginVertical: "10%" }}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}
          >
            Ingresar a PilarTecno
          </Text>
        </View>
        <Input
          placeholder="Correo Electronico"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => onChangeEmail(value)}
        />
        <Input
          placeholder="Contraseña"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(value) => onChangePw(value)}
          secureTextEntry={true}
        />
        <View style={{ alignItems: "center" }}>
          <Button
            title="Ingresar"
            onPress={() => _signIn()}
            containerStyle={{ width: "90%" }}
          />
        </View>
      </View>
    </View>
  );
};
