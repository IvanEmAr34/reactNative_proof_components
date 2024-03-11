import { useState } from "react";
import { View, Alert, Button, Text } from "react-native";
const ACCEPT_OPTION = "ACCEPT";
const REJECT_OPTION = "REJECT";
const I_DONT_KNOW_OPTION = "I_DONT_KNOW_OPTION";

const AlertExample = (props) => {
  const [optionSelected, setOptionSelected] = useState("");
  const openAlert = () => {
    Alert.alert("Arre your shure??", "Body de la alerta", [
      {
        text: "Accept",
        onPress: () => setOptionSelected(ACCEPT_OPTION),
      },
      {
        text: "REJECT",
        onPress: () => setOptionSelected(REJECT_OPTION),
      },
      {
        text: "I_DONT_KNOW_OPTION",
        onPress: () => setOptionSelected(I_DONT_KNOW_OPTION),
      },
    ]);
  };

  return (
    <View>
      <Button title="show alert" onPress={openAlert} />
      {optionSelected === ACCEPT_OPTION && <Text>accepted</Text>}
      {optionSelected === REJECT_OPTION && <Text>rejected</Text>}
      {optionSelected === I_DONT_KNOW_OPTION && <Text>try again</Text>}
    </View>
  );
};

export default AlertExample;
