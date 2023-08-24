import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'

function TimerScreen({visible, endTimerHandler, totalDuration}) {
  const initialDuration = totalDuration
  const [timer, setTimer] = useState(initialDuration)

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1)
      } else {
        clearInterval(interval)
        endTimerHandler()
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.container}>
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
      </View>
    </Modal>
  )
}

export default TimerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
  },
});