import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from './components/Button';
import { use } from 'react';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  
  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.Modalcontainer}>
          <Image source={require('./assets/images/target_img.jpg')} />
          <TextInput style={styles.Goalinput} placeholder='Your Course Goal' value='goal'/>
          <Button title="Cancel" onPressed={() => setIsModalVisible(false)} color="#e8043dff" />
          <Button title="Add Goal" onPressed={() => AddTask()} color="#7432f7ff" />
        </View>
      </Modal>
      <Button title="Add Task" onPress={() => setIsModalVisible(true)} color="#d31d96ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8F99FB',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b46ae9ff',
    padding: 16,
  },
  Goalinput: {
    
  }
});
