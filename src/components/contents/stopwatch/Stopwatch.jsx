import { useState, useRef } from "react"
import StartStopButton from "./ui/StartStopButton"
import ResetButton from "./ui/ResetButton"

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current)
    } else {
      const startTime = Date.now() - time
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime)
      }, 10)
    }
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    clearInterval(intervalRef.current)
    setTime(0)
    setIsRunning(false)
  }

  const formatTime = (time) => {
    const ms = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, "0")
    const seconds = Math.floor((time / 1000) % 60)
      .toString()
      .padStart(2, "0")
    const minutes = Math.floor((time / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0")
    const hours = Math.floor(time / 1000 / 60 / 60)
      .toString()
      .padStart(2, "0")

    if (hours === "00") {
      return `${minutes}:${seconds}.${ms}`
    }
    return `${hours}:${minutes}:${seconds}.${ms}`
  }

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Stopwatch App</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl">{formatTime(time)}</div>
        <div className="flex mt-9">
          <StartStopButton
            isRunning={isRunning}
            handleStartStop={handleStartStop}
          />
          <ResetButton handleReset={handleReset} />
        </div>
      </div>
    </div>
  )
}

export default Stopwatch
