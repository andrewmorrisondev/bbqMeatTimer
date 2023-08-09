import { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, Button, Text, TextInput, View, Modal } from 'react-native';

function SteakInput({ setSteaks, visible, endAddSteakHandler }) {
  const [enteredSteakText, setEnteredSteakText] = useState('');
  const [checked, setChecked] = useState('')

  function steakInputHandler(enteredText) {
    setEnteredSteakText(enteredText);
  }
  function addSteakHandler() {
    setSteaks(currentSteaks => [...currentSteaks, enteredSteakText])
    endAddSteakHandler();
  }

  return (
    <Modal visible={visible} animationType='slide'>
    <View style={styles.modal}>
      <TextInput
        placeholder='Steak Eater'
        onChangeText={steakInputHandler}
      />
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButton}>
          <RadioButton
            value="rare"
            status={checked === 'rare' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('rare')}
            />
            <Text style={styles.text}>Rare</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="medium"
            status={checked === 'medium' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('medium')}
            />
            <Text style={styles.text}>Medium</Text>
        </View>
        <View style={styles.radioButton}>
          <RadioButton
            value="well"
            status={checked === 'well' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('well')}
            />
            <Text style={styles.text}>Well Done</Text>
        </View>
      </View>
      <Button title='Add Steak' onPress={addSteakHandler} />
    </View>
  </Modal>
  );
}

export default SteakInput;

const styles = StyleSheet.create({
  modal: {
    padding: 50,
  },
  radioButton: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  text: {
    paddingTop: 3,
    marginLeft: 10,
  },
});