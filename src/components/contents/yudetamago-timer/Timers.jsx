import Hannjuku from "./components/Hannjuku"
import Katayude from "./components/Katayude"
import Onnsenn from "./components/Onnsenn"

const Timers = () => {

  const initialTimers = {
    katayude: 720, // 硬ゆで（12分）
    hannjuku: 480, // 半熟  （8分）
    onnsenn:  720, // 温泉卵（12分）
  }
  const zeroPad = (num) => (num < 10 ? "0" + num : num)
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${zeroPad(minutes)}:${zeroPad(remainingSeconds)}`
  }

  return (
    <ul style={{ display: "flex", flexDirection: "column",rowGap:"36px",padding:"50px 0"}}>
      <Katayude initialTime={initialTimers.katayude} formatTime={formatTime} />
      <Hannjuku initialTime={initialTimers.hannjuku} formatTime={formatTime} />
      <Onnsenn  initialTime={initialTimers.onnsenn } formatTime={formatTime} />
    </ul>
  )
}

export default Timers
