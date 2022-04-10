import React, { Component } from "react";
import { SafeAreaView, Dimensions, StyleSheet, Text, View } from "react-native";
import { Image, Icon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { hasLocationPermission } from "../../../LocationPermission";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.00422;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }
  onRegionChange = (region) => {
    this.setState({
      region,
    });
  };
  componentDidMount = () => {
    await hasLocationPermission();
  };
  _getLocation = async () => {
    await Geolocation.getCurrentPosition(
      async (posicion) => {
        const longitude = posicion.coords.longitude;
        const latitude = posicion.coords.latitude;
        this.mapRef.animateToRegion(
          {
            latitude,
            longitude,
            latitudeDelta: this.state.region.latitudeDelta,
            longitudeDelta: this.state.region.longitudeDelta,
          },
          1000
        );
        this.setState({
          region: { ...this.state.region, longitude, latitude },
        });
        console.log(
          "posicion actual... Latitud: " +
            `${JSON.stringify(longitude)}` +
            "latitud: " +
            `${JSON.stringify(latitude)}`
        );
      },
      (error) => {
        console.log("");
        console.log("");
        console.log("");
        console.log("");
        console.log(error.code, error.message);
      },
      {
        accuracy: {
          android: "high",
          ios: "best",
        },
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: true,
      }
    );
  };
  async fitCoordinates() {
    console.log("centrando mapa");
    this._getLocation();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          ref={(map) => {
            this.mapRef = map;
          }}
          mapType="standard"
          style={styles.map}
          initialRegion={this.state.region}
          // region={this.state.region}
          onRegionChangeComplete={this.onRegionChange}
        />
        <View
          style={{
            position: "absolute",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: 100,
            width: width / 10,
            alignSelf: "flex-end",
            margin: 20,
            marginRight: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="crosshairs"
            type="font-awesome"
            color="#8d2d84"
            size={width / 10}
            onPress={() => this.fitCoordinates()}
          />
        </View>
        <View style={styles.markerFixed}>
          <Image
            style={styles.marker}
            source={require("../assets/images/pin.png")}
          />
        </View>
        <SafeAreaView style={styles.footer}>
          <Text style={styles.region}>
            longitud:
            {JSON.stringify(this.state.region.longitude)}
            {"\n"}latitud:
            {JSON.stringify(this.state.region.latitude)}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}
