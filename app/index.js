import { StatusBar } from 'expo-status-bar';
import { 
  Modal, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Image 
} from 'react-native';
import { useState } from 'react';
import Button from '../components/Button';
import TodoInput from '../components/TodoInput';




export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  // You also need state for the TextInput value if you want to capture the goal
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

  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.Modalcontainer}>
          <Image 
            source={require('../assets/target_img.jpg')} style={styles.image} />
            <TodoInput />
          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => setIsModalVisible(false)} color="#e8043dff" />
            <Button title="Add Goal" onPress={() => AddTask(TaskInput)} color="#7432f7ff" />
          </View>
        </View>
      </Modal>
    <View style={styles.addbutton}>
        <Button title="Add Task"  onPress={() => setIsModalVisible(true)} color="#38003D" />
    </View>
      
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
    paddingTop: 50, // Added padding to separate button from top edge
  },
  Modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b46ae9ff',
    padding: 16,
  },
  image: { // <-- ADDED: Style for the Image component
    width: 100,
    height: 100,
    marginBottom: 20,
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
      justifyContent: 'space-between',
      width: '60%',
  }
});