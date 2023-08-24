import { cookData } from "./cookData"

const timerConstructor = (steaks) => {
  const cookTimes = {}
  steaks.forEach(steak => {
    const temp = steak.temperature
    const thick = steak.thickness
    const name = steak.name
    const cookTime = cookData[temp][thick]

    cookTimes[name] = cookTime
  })
  return cookTimes
}