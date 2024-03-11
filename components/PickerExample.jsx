import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const PickerExample = (props) => {
  const [value, setValue] = useState("id_1");

  return (
    <View>
      <Picker
        selectedValue={value}
        style={{ height: 80, width: 150 }}
        onValueChange={(value, idx) => {
          console.log("value change: ", value, idx);
          setValue(value);
        }}
      >
        <Picker.Item label="wpo" value="id_1" />
        <Picker.Item label="wpo2" value="id_2" />
        <Picker.Item label="wpo3" value="id_3" />
      </Picker>
    </View>
  );
};

export default PickerExample;
