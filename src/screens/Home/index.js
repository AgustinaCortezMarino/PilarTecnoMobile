import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "./styles";

export default Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/Pastel07.jpg")}
      >
        <View style={styles.rowContent}>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "#fbcfe8" }]}
            onPress={() => console.log("Boton 1")}
          >
            <Text style={styles.tittle}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "#a7f3d0" }]}
            onPress={() => console.log("Boton 2")}
          >
            <Text style={styles.tittle}>Perfil</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "#a5f3fc" }]}
            onPress={() => console.log("Boton 3")}
          >
            <Text style={styles.tittle}>Lista</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonContent, { backgroundColor: "#fda4af" }]}
            onPress={() => console.log("Boton 4")}
          >
            <Text style={styles.tittle}>Mapa</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
