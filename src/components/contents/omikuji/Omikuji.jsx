import { useState } from "react"
import Start from "./Start"
import Waiting from "./Waiting"
import { Result } from "postcss"
import StandBy from "./StandBy"

function Omikuji() {
  const [ currentScene, setCurrentScene ] = useState("start")// start, waiting, result, stand-by の4種類

  const changeScene = (scene) => {
    switch (scene) {

      case "start":
        return <Start />
      case "waiting":
        return <Waiting />
      case "result":
        return <Result />
      case "standBy":
        return <StandBy />
      default:
        break;
    }
  }
  return (
    <div>{changeScene(currentScene)}</div>
  )
}

export default Omikuji