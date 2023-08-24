import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SteakInput from './components/SteakInput';
import SteakList from './components/SteakList';
import TimerScreen from './components/TimerScreen';

import { cookData } from './helpers/cookData';

export default function App() {
  const [inputModalIsVisible, setInputModalIsVisible] = useState(false)
  const [timerModalIsVisible, setTimerModalIsVisible] = useState(false)
  const [steaks, setSteaks] = useState([])
  const [totalDuration, setTotalDuration] = useState(0)

  function startAddSteakHandler() {
    setInputModalIsVisible(true)
  }

  function endAddSteakHandler() {
    setInputModalIsVisible(false)
  }
  
  function deleteSteakHandler() {
    setSteaks([])
  }

  function setTimer() {
    if (steaks.length === 0) {
      console.log("No steaks added.")
      return
    }

    const selectedSteak = steaks[0]
    const temperatureKey = selectedSteak.temperature
    const thicknessKey = selectedSteak.thickness

    if (!(temperatureKey in cookData) || !(thicknessKey in cookData[temperatureKey])) {
      console.log("Cook data not found for selected steak.")
      return;
    }

    const [firstCook, secondCook] = cookData[temperatureKey][thicknessKey]
    const totalTime = (firstCook + secondCook) * 60
    setTotalDuration(totalTime)
    setTimerModalIsVisible(true)
  }

  function timerConstructor(steaks) {
    const cookTimes = {}
    steaks.forEach(steak => {
      const temp = steak.temperature
      const thick = steak.thickness
      const name = steak.name
      const cookTime = cookData[temp][thick]
  
      cookTimes[name] = cookTime
    })
    console.log(cookTimes)
  }

  function beginTimerHandler() {
    timerConstructor(steaks)
    setTimer()
    setTimerModalIsVisible(true)
  }

  function endTimerHandler() {
    setTimerModalIsVisible(false)
  }

  return (
    <View style={styles.appContainer}>
      {inputModalIsVisible && 
        <SteakInput 
          setSteaks={setSteaks}
          visible={inputModalIsVisible}
          endAddSteakHandler={endAddSteakHandler}
        >
        </SteakInput>
      }
      {timerModalIsVisible && 
        <TimerScreen
          visible={timerModalIsVisible}
          endTimerHandler={endTimerHandler}
          totalDuration={totalDuration}
        >
        </TimerScreen>
      }
      <SteakList 
        steaks={steaks}
        setSteaks={setSteaks}
      >
      </SteakList>
      <Button title='Add New Steak' onPress={startAddSteakHandler}></Button>
      <Button title='Begin Timer' onPress={beginTimerHandler}></Button>
      <View style={styles.deleteButtonContainer}>
        <Button
          title='Cancel'
          onPress={deleteSteakHandler}
          color='red'
        />
      </View>
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
  },
  deleteButtonContainer: {
    color: 'red',
    marginTop: 10,
  }
})
