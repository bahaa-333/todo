import { StatusBar } from 'expo-status-bar';
import { 
  Modal, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Image 
} from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';




export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [TaskInput, setTaskInput] = useState(''); 
  
  const AddTask = (newTaskText) => {
    if (!newTaskText) {
      setIsModalVisible(false);
      return; 
    }
    setTasks(currentTasks => [
      ...currentTasks, 
      { text: newTaskText, id: Math.random().toString() }
    ]);
    setTaskInput('');
    setIsModalVisible(false);
  };

  useEffect(() => {}, [tasks]);
  useEffect(() => {}, [isModalVisible]);
  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.Modalcontainer}>
          <Image source={require('../assets/target_img.png')} style={styles.image} />
            <TodoInput />
          <View style={styles.buttonContainer}>
            <Button title="CANCEL" onPress={() => setIsModalVisible(false)} color="#f95026b2" />
            <Button title="ADD GOAL" onPress={() => AddTask(TaskInput)} color="#6bae9ae8" />
          </View>
        </View>
      </Modal>
    <View style={styles.addbutton}>
        <Button title="ADD NEW GOAL"  onPress={() => setIsModalVisible(true)} color="#38003D" />
    </View>
      {
      tasks.map((task) => (
        <TodoItem key={task.id} text={task.text} />
      ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
    addbutton: {
      marginTop: 2,
      width: '94%', 
    },
  container: {
    flex: 1,
    backgroundColor: '#A8BEF7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50, 
  },
  Modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a28a9eff',
  },
  image: { 
    width: 150,
    height: 150,
  },
  Goalinput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '55%',
  }
});