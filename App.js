import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SteakInput from './components/SteakInput';
import SteakList from './components/SteakList';

export default function App() {
  const [modalIsVisible, setModalIsVisable] = useState(false);
  const [steaks, setSteaks] = useState([]);

  function startAddSteakHandler() {
    setModalIsVisable(true);
  }

  function endAddSteakHandler() {
    setModalIsVisable(false);
    console.log(steaks)
  }

  return (
    <View style={styles.appContainer}>
      {modalIsVisible && 
        <SteakInput 
          setSteaks={setSteaks}
          visible={modalIsVisible}
          endAddSteakHandler={endAddSteakHandler}
        >
        </SteakInput>
      }
      <SteakList 
        steaks={steaks}
        setSteaks={setSteaks}
      >
      </SteakList>
      <Button title='Add New Steak' onPress={startAddSteakHandler}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justiufyContent: 'space-between',
  }
});
