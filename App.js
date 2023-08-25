import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import SteakInput from './components/SteakInput';
import SteakList from './components/SteakList';
import TimerScreen from './components/TimerScreen';

import { cookData } from './helpers/cookData';

export default function App() {
  const [inputModalIsVisible, setInputModalIsVisible] = useState(false)
  const [timerModalIsVisible, setTimerModalIsVisible] = useState(false)
  const [steaks, setSteaks] = useState([])
  const [totalDuration, setTotalDuration] = useState(0)

  const cookTimes = {}
  const landmarks = {}
  let longestTime = 0

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
    cookTimeConstructor(steaks)
    landmarkConstructor(cookTimes)
    setTimerModalIsVisible(true)
  }

  function cookTimeConstructor(steaks) {
    steaks.forEach(steak => {
      const temp = steak.temperature
      const thick = steak.thickness
      const name = steak.name
      const cookTime = cookData[temp][thick]
      cookTimes[name] = cookTime
    })
    for (const key in cookTimes) {
      if (longestTime < cookTimes[key][0] + cookTimes[key][1]) {
        longestTime = cookTimes[key][0] + cookTimes[key][1]
      }
    }
    setTotalDuration(longestTime * 60)
  }

  function landmarkConstructor(cookTimes) {
    for (const key in cookTimes) {
      landmarks[key + 'On'] = (longestTime - cookTimes[key][0] - cookTimes[key][1])
      landmarks[key + 'Flip'] = (longestTime - cookTimes[key][1])
    }
  }

  function beginTimerHandler() {
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
          landmarks={landmarks}
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
