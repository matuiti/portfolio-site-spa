import { createContext, useState } from "react"
import Start from "./Start"
import Play from "./Play"
import Clear from "./Clear"
import GameOver from "./GameOver"

export const SceneContext = createContext()

function SaruGame() {
  const [scene, setScene] = useState("start")

  let currentScene;
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
      {currentScene}
    </SceneContext.Provider>
  )
}

export default SaruGame
