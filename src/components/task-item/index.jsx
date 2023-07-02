import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const TaskItem = ({ onPressItem, item }) => {
  const day = item.classDate.getDate();
  const month = item.classDate.getMonth();
  const year = item.classDate.getFullYear();

  return (
    <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.listItem}>{`${day} / ${month} / ${year}`}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
