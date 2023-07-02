import { FlatList } from "react-native";

import { styles } from "./styles";

const CustomList = ({ tasks, renderItem }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default CustomList;
