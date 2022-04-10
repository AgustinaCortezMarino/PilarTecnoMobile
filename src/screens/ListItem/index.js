import React, { Component, useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Image, Divider } from "react-native-elements";
import { styles } from "./styles";
import { getPokemon, getPokemonList } from "../../api";
import { getPokemonImgId } from "../../../utils";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

export default Listitem = (props) => {
  const { url } = props.route.params.item;
  const { id } = props.route.params.id;

  const [pokemon, setPokemon] = useState();
  const [imgId, setImgId] = useState();
  const [isCollapsed, setIsCollapsed] = useState();
  useEffect(() => {
    console.log(JSON.stringify(props));
    getPokemon(url).then((data) => {
      const path = url.split("/");
      setPokemon(data.results);
      setImgId(getPokemonImgId(path[6]));
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainContent}
        source={require("../../assets/patterns/Pastel07.jpg")}
      >
        <ScrollView
          contentContainerStyle={{ marginTop: height / 8, flex: 1, width }}
        >
          <View
            style={{
              height: 100,
              width: 100,
              zIndex: 2,
              opacity: 0.8,
              borderRadius: 100,
              right: 10,
              top: 10,
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000000",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              {imgId}
            </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <Image
              source={{ uri: `${IMG_URL}${imgId}.png` }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View style={{ height: 0.5, width, backgroundColor: "#646464" }} />
          <View
            style={{
              flex: 2,
              backgroundColor: "#ffffff",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: height / 3,
                width: width / 1.1,
                opacity: 0.8,
                borderRadius: 0.8,
                backgroundColor: "#000000",
                marginTop: "5%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 14, color: "white" }}>
                  <Text style={{ fontSize: 14, color: "white" }}>Peso:</Text>
                  {pokemon?.weight}
                </Text>
                <Text style={{ fontSize: 14, color: "white" }}>
                  <Text style={{ fontSize: 14, color: "white" }}>Altura:</Text>
                  {pokemon?.height}
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: 14, color: "white" }}>Tipos:</Text>
                {pokemon?.types.map((type) => {
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {type.type.name}
                  </Text>;
                })}
              </View>
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    Habilidades:
                  </Text>
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed}>
                  {pokemon?.abilities.map((a) => {
                    <>
                      <Text>
                        <Text style={{ fontSize: 14, color: "white" }}>
                          {a.ability.name}
                        </Text>
                        ;
                      </Text>
                    </>;
                  })}
                </Collapsible>
              </View>
            </View>
          </View>
        </ScrollView>
        <Text>ListItem</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};
