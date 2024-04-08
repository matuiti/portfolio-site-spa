import { createContext, useContext, useState } from "react"
import Start from "./Start"
import Play from "./Play"
import Clear from "./Clear"
import GameOver from "./GameOver"

export const SceneContext = createContext()
export const SoundContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const useSoundContext = () => useContext(SoundContext)

function SaruGame() {
  const [scene, setScene] = useState("start")
  const [isSoundOn, setIsSoundOn] = useState(true)
  const toggleSound = () => {
    setIsSoundOn((prevState) => !prevState)
  }

  let currentScene
  switch (scene) {
    case "start":
      currentScene = <Start />
      break
    case "play":
      currentScene = <Play />
      break
    case "clear":
      currentScene = <Clear />
      break
    case "over":
      currentScene = <GameOver />
      break
    default:
      currentScene = null
      break
  }

  return (
    <SceneContext.Provider value={{ scene, setScene }}>
      <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
        {currentScene}
      </SoundContext.Provider>
    </SceneContext.Provider>
  )
}

export default SaruGame
