import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { MapContainer } from "./MapMain.styles";
import { StyleSheet } from "react-native";

const MapUI = () => {
  const [initialRegion, setInitialRegion] = useState("");
  const Markers = [
    {
      latitude: 37.5172,
      longitude: 127.0473,
      title: "강남구청",
      description: "1",
      foodtype: "한식",
    },
    {
      latitude: 37.5167,
      longitude: 127.0402,
      title: "강남구청역",
      description: "1",
      foodtype: "일식",
    },
    {
      latitude: 37.5103,
      longitude: 127.0438,
      title: "선정릉역",
      description: "1",
      foodtype: "중식",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5172,
          longitude: 127.0473,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
      >
        {Markers.map((data, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: data.latitude, longitude: data.longitude }}
            title={data.title}
            description={data.description}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapUI;
