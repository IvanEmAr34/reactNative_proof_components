import { useEffect, useState } from "react";
import { Alert, Button, Text, View } from "react-native";
// import { Location, Permissions } from "expo";
import * as Location from "expo-location";

const Geolocalizacion = (props) => {
  const [componentState, setComponentState] = useState({
    location: null,
    errorMessage: null,
  });

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    Alert.alert("status", status);
    if (status !== "granted") {
      setComponentState((prev) => ({
        ...prev,
        errorMessage: "Permission to access location was denied",
      }));

      return;
    }

    const location = await Location.getCurrentPositionAsync();
    console.log("location:", location);
    setComponentState((prev) => ({
      ...prev,
      location,
    }));
  };

  return (
    <View>
      {componentState?.location?.coords?.latitude &&
        componentState?.location?.coords?.longitude && (
          <Text>
            {componentState?.location?.coords?.latitude},
            {componentState?.location?.coords?.longitude}
          </Text>
        )}
      <Button onPress={() => getLocation()} title="Read Location" />
    </View>
  );
};

export default Geolocalizacion;
