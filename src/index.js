import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { CustomList, CustomModal, InputTask, TaskItem } from "./components";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [borderColor, setBorderColor] = useState("#C5C9E7");
  const [dateClass, setDateClass] = useState(new Date());

  const onHandlerFocus = () => {
    setBorderColor("#424D9E");
  };
  const onHanderBlur = () => {
    setBorderColor("#C5C9E7");
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTasks = () => {
    setDateClass(dateClass);
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
        classDate: dateClass,
      },
    ]);
    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    setIsVisible(false);
  };

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <InputTask
          borderColor={borderColor}
          onHanderBlur={onHanderBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerCreateTasks={onHandlerCreateTasks}
          task={task}
          onHandlerFocus={onHandlerFocus}
          dateClass={dateClass}
        />
        <CustomList renderItem={renderItem} tasks={tasks} />
      </View>
      <CustomModal
        isVisible={isVisible}
        onHandleDelete={onHandleDelete}
        selectedTask={selectedTask}
        setIsVisible={setIsVisible}
      />
    </SafeAreaView>
  );
}
