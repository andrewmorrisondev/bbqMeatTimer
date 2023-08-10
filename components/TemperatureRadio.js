import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

function TemperatureRadio({checkedTemperature, setCheckedTemperature}) {

  return (
    <Picker
      selectedValue={checkedTemperature}
      onValueChange={setCheckedTemperature}
    >
      <Picker.Item label="rare" value="rare" />
      <Picker.Item label="medium rare" value="mediumRare" />
      <Picker.Item label="medium" value="medium" />
      <Picker.Item label="medium well" value="mediumWell" />
      <Picker.Item label="well" value="well" />
    </Picker>
  )
}

export default TemperatureRadio;

const styles = StyleSheet.create({});