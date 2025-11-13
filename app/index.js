import { StatusBar } from 'expo-status-bar';
import { 
  Modal, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  Image, 
  Alert
} from 'react-native';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import TodoInput from '../components/TodoInput';
import TodoItem from '../components/TodoItem';




export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  const [TaskInput, setTaskInput] = useState(''); 
  
  const addTodoHandler = () => {
  if (!TaskInput.trim()) {
    setIsModalVisible(false);
    setTaskInput('');
    return; 
  }
  setTasks(currentTasks => [
    ...currentTasks, 
    { text: TaskInput, id: Math.random().toString() }
  ]);
  setTaskInput('');
  setIsModalVisible(false);
};

  const deleteTodoHandler = (taskId) => {
    Alert.alert(' ', 'Are you sure?',
        [{text: 'No', style: 'cancel'},
            {text: 'Yes', onPress: () => setTasks(tasks.filter(task => task.id !== taskId))}
        ]
    );
  };


  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.Modalcontainer}>
          <Image source={require('../assets/target_img.png')} style={styles.image} />
            <TodoInput value={TaskInput} onChangeText={setTaskInput} />
          <View style={styles.buttonContainer}>
            <Button title="CANCEL" onPress={() => {setTaskInput(''); setIsModalVisible(false)}} color="#ed6b00d5" />
            <Button title="ADD GOAL" onPress={addTodoHandler} color="#30a61292" />
          </View>
        </View>
      </Modal>
    <View style={styles.addbutton}>
        <Button title="ADD NEW GOAL"  onPress={() => setIsModalVisible(true)} color="#38003D" />
    </View>
      {
      tasks.map((task) => (
        <TodoItem key={task.id} text={task.text} onPress={() => deleteTodoHandler(task.id)} />
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
    backgroundColor: '#3d95ad8f',
  },
  image: { 
    width: 100,
    height: 100,
    marginBottom: 40,
  },
  buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '55%',
  }
});