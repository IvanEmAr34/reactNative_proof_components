import { useState } from "react";
import { StyleSheet, Button, Modal, View, Text } from "react-native";

const ModalExample = (props) => {
  const [openModal, setOpenMOdal] = useState(true);
  return (
    <View style={[styles.container, styles.baseColor]}>
      <Modal animationType="slide" visible={openModal} transparent={true}>
        <View style={[styles.container, styles.modalBase]}>
          <Button title="Cerrar Modal" onPress={() => setOpenMOdal(false)} />
        </View>
      </Modal>
      <Button title="Show Modal" onPress={() => setOpenMOdal(true)} />
    </View>
  );
};

export default ModalExample;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  baseColor: {
    backgroundColor: "orange",
    width: "100%",
  },
  modalBase: {
    backgroundColor: "#ccc",
    margin: 5,
    marginTop: "50%",
    marginBottom: 0,
    borderRadius: 25,
  },
});
