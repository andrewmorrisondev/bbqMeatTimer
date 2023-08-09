import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

function SteakList({ steaks, setSteaks }) {
  return (
    <View>
      <View style={styles.steakList}>
        {steaks.map((steak) => <Text key={steak}>{steak}</Text>)}
      </View>
    </View>
  );
}

export default SteakList;

const styles = StyleSheet.create({});