import React, { Component, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { Card, List } from "react-native-paper";
import { styles } from "./styles";

export default List = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/Pastel07.jpg")}
      >
        <View style={styles.rowContent}>
          <Card>
            <Text style={styles.tittle}>List</Text>
          </Card>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
