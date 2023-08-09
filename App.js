import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SteakInput from './components/SteakInput';
import SteakList from './components/SteakList';

export default function App() {
  const [steaks, setSteaks] = useState([]);

  return (
    <View style={styles.appContainer}>
      <SteakInput
        setSteaks={setSteaks}
      >
      </SteakInput>
      <SteakList 
        steaks={steaks}
        setSteaks={setSteaks}
      >
      </SteakList>
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
