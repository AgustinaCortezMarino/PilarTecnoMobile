import React, { Component, useCallback } from "react";
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
import { actions } from "../../store/actions";
import { useDispatch } from "react-redux";

export default Profile = () => {
  const dispatch = useDispatch();

  const _signOut = async () => {
    try {
      await AsyncStorage.delItem("user", JSON.stringify(false));
    } catch (e) {
      // saving error
    }
    dispatch(actions.user.setUser(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/Pastel07.jpg")}
      >
        <Text>Perfil</Text>
        <View style={{ alignItems: "center", width: "90%" }}>
          <Button
            title="Salir"
            onPress={() => _signOut()}
            containerStyle={{ width: "90%" }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
