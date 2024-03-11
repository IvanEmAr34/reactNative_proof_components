import { Image, Text, View } from "react-native";

const Images = (props) => {
  return (
    <View>
      {/* <Image source={require("../assets/icon.png")} /> */}
      <Image
        source={{
          uri: "https://www.elsoldetampico.com.mx/incoming/vqy0nd-el-capibara/ALTERNATES/LANDSCAPE_768/El%20capibara",
        }}
        style={{
          width: 300,
          height: 300,
        }}
      />
      <Text>images test</Text>
    </View>
  );
};

export default Images;
