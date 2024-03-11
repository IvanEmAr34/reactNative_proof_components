import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

const Camara = (props) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const takePicture = async () => {
    
    // const image = await Camera.takePictureAsync({});
    // console.log("image: ", image);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>take picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
  //   return (
  //     <View>
  //       <Text>holi camara</Text>
  //       <Button onPress={() => requestPermission()} title="ask for camera" />
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  camera: {
    height: "85%",
    width: "100%",
  },
  buttonContainer: {
    height: 100,
    width: 100,
  },
  button: {
    height: 100,
    width: 100,
  },
  text: {
    height: 100,
    width: 100,
  },
});

export default Camara;
