import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Modal } from 'react-native';
import TemperatureRadio from './TemperatureRadio';
import ThicknessRadio from './ThicknessRadio';

function SteakInput({ setSteaks, visible, endAddSteakHandler }) {
  const [enteredSteakText, setEnteredSteakText] = useState('')
  const [checkedThickness, setCheckedThickness] = useState('')
  const [checkedTemperature, setCheckedTemperature] = useState('')

  function steakInputHandler(enteredText) {
    setEnteredSteakText(enteredText);
  }
  function addSteakHandler() {
    const steakData = {
      name: enteredSteakText,
      temperature: checkedTemperature,
      thickness: checkedThickness,
    }

    setSteaks(currentSteaks => [...currentSteaks, steakData])
    console.log(steakData)
    endAddSteakHandler();
  }

  return (
    <Modal visible={visible} animationType='slide'>
    <View style={styles.modal}>
      <TextInput
        placeholder='Steak Eater'
        onChangeText={steakInputHandler}
      />
      <TemperatureRadio 
        checkedTemperature={checkedTemperature} 
        setCheckedTemperature={setCheckedTemperature}
      />
      <ThicknessRadio 
        checkedThickness={checkedThickness} 
        setCheckedThickness={setCheckedThickness}
      />
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