import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

function SteakList({ steaks, setSteaks }) {
  return (
    <View>
      <View style={styles.steakList}>
        {steaks.map((steak, index) => 
          <View style={styles.steakShow} key={index}>
            <Text>Name: {steak.name}, Temperature: {steak.temperature}, Thickness: {steak.thickness}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default SteakList;

const styles = StyleSheet.create({

});