import { useEffect, useState } from "react";
import { Button, Image, Text, View, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = (props) => {
  const [imageUrlStorage, setImageUrlStorage] = useState("");

  leerStorage = async () => {
    const url = await AsyncStorage.getItem("imageUrl");
    Alert.alert("URL SAVED: ", url);
    setImageUrlStorage(url);
  };

  useEffect(() => {
    leerStorage();
  }, []);

  const setImageUrl = async () => {
    let urlValue =
      "https://www.elsoldetampico.com.mx/incoming/vqy0nd-el-capibara/ALTERNATES/LANDSCAPE_768/El%20capibara";
    await AsyncStorage.setItem("imageUrl", urlValue);
    setImageUrlStorage(urlValue);
   };

  return (
    <View>
      {imageUrlStorage && imageUrlStorage !== "" && (
        <Image
          source={{
            uri: imageUrlStorage,
          }}
          style={{
            width: 300,
            height: 300,
          }}
        />
      )}
      <Button title="set url Image" onPress={() => setImageUrl()} />
    </View>
  );
};

export default AsyncStorageExample;
