import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'

function ThicknessRadio({checkedThickness, setCheckedThickness}) {

  return (
    <Picker
      selectedValue={checkedThickness}
      onValueChange={setCheckedThickness}
    >
      <Picker.Item label='0.75"' value={0.75} />
      <Picker.Item label='1"' value={1} />
      <Picker.Item label='1.25"' value={1.25} />
      <Picker.Item label='1.5"' value={1.5} />
      <Picker.Item label='1.75"' value={1.75} />
    </Picker>
  )
}

export default ThicknessRadio;

const styles = StyleSheet.create({});