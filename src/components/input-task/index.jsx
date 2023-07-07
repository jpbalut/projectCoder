import { Button, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

const InputTask = ({
  borderColor,
  onHandlerFocus,
  onHanderBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTasks
}) => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputContainer, marginBottom: 10 }}>
        <Text style={styles.inputHeaderText}>Task Name:</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderColor, marginRight: 10 }]}
          placeholder="Add New Task"
          autoCapitalize="none"
          autoCorrect={false}
          cursorColor="#424D9E"
          selectionColor="#D4D7ED"
          placeholderTextColor="#C5C9E7"
          onFocus={onHandlerFocus}
          onBlur={onHanderBlur}
          onChangeText={onHandlerChangeText}
          value={task}
        />
      </View>
      <Button
        title="Create"
        color="#424D9E"
        onPress={onHandlerCreateTasks}
        disabled={task.length === 0}
      />
    </View>
  );
};

export default InputTask;
