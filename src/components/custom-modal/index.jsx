import { Button, View, Text, Modal } from "react-native";

import { styles } from "./styles";

const CustomModal = ({ onHandleDelete, isVisible, setIsVisible, selectedTask }) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Task Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>Are you sure you want to delete this item?</Text>
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />

          <Button title="Ok" color="#424D9E" onPress={() => onHandleDelete(selectedTask?.id)} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
