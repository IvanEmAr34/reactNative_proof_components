import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Lists from "./components/Lists";
import PickerExample from "./components/PickerExample";
import Loader from "./components/Loader";
import AlertExample from "./components/AlertExample";
import ModalExample from "./components/ModalExample";
import Images from "./components/Images";
import AsyncStorageExample from "./components/AsyncStorageExample";
import Geolocalizacion from "./components/hardware/Geolocalizacion";
import Camara from "./components/hardware/Camara";
import Map from "./components/hardware/Map";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Loader /> */}
      {/* hardware */}
      <Map />
      {/* <Camara /> */}
      {/* <Geolocalizacion /> */}

      {/* basicos */}

      {/* <AsyncStorageExample /> */}
      {/* <Images /> */}
      {/* <ModalExample /> */}
      {/* <AlertExample /> */}
      {/* <PickerExample /> */}
      {/* <Lists /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
