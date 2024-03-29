import { useState } from "react"
import Start from "./Start"
import Waiting from "./Waiting"
import Result  from "./Result"

function Omikuji() {
  const [ currentScene, setCurrentScene ] = useState("start")// start, waiting, result, stand-by の4種類

  const changeScene = (scene) => {
    switch (scene) {

      case "start":
        return <Start setCurrentScene={setCurrentScene} />
      case "waiting":
        return <Waiting setCurrentScene={setCurrentScene} />
      case "result":
        return <Result setCurrentScene={setCurrentScene} />
      default:
        break;
    }
  }
  return (
    <div>{changeScene(currentScene)}</div>
  )
}

export default Omikuji