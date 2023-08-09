import { useState } from 'react';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

function SteakInput({ setSteaks }) {
  const [enteredSteakText, setEnteredSteakText] = useState('');

  function steakInputHandler(enteredText) {
    setEnteredSteakText(enteredText);
  }
  function addSteakHandler() {
    setSteaks(currentSteaks => [...currentSteaks, enteredSteakText])
  }

  return (
    <View>
      <Button title="Add Steak" onPress={addSteakHandler}></Button>
      <TextInput
        placeholder='Steak Eater'
        onChangeText={steakInputHandler}
      />
    </View>
  );
}

export default SteakInput;

const styles = StyleSheet.create({

});