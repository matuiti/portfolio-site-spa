import { useState } from "react"
import Start from "./Start"
import Waiting from "./Waiting"
import Result from "./Result"

function Omikuji() {
  const [currentScene, setCurrentScene] = useState("start") // start, waiting, result, stand-by の4種類
  const omikujiList = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"]
  const resultPath = (kuji) => {
    switch (kuji) {
      case "大吉":
        return "daikiti.gif"
      case "吉":
        return "kiti.png"
      case "中吉":
        return "cyukiti.gif"
      case "小吉":
        return "syokiti.gif"
      case "末吉":
        return "suekiti.gif"
      case "凶":
        return "kyo.png"
      case "大凶":
        return "daikyo.gif"

      default:
        break
    }
  }
  const outputResult = () => {
    const min = 0
    const max = omikujiList.length - 1
    const rand = Math.floor(Math.random() * (max + 1 - min)) + min
    const result = resultPath(omikujiList[rand])
    return result
  }
  const result = outputResult()
  const changeScene = (scene) => {
    switch (scene) {
      case "start":
        return <Start setCurrentScene={setCurrentScene} />
      case "waiting":
        return <Waiting setCurrentScene={setCurrentScene} />
      case "result":
        return <Result setCurrentScene={setCurrentScene} result={result} />
      default:
        break
    }
  }


  return <div style={{width:"200px"}}>{changeScene(currentScene)}</div>
}

export default Omikuji
