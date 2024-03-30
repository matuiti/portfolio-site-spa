import { useState } from "react"
import SectionHeader from "@/components/SectionHeader"
import Omikuji from "./contents/omikuji/Omikuji"
import Stopwatch from "./contents/stopwatch/Stopwatch"
import YudetamagoTimer from "./contents/yudetamago-timer/YudetamagoTimer"
import SaruGame from "./contents/sarugame/SaruGame"

const title = "Contents"
const description = `現在開発中です！`
const contents = [
  { name: "ゆでたまごタイマー" },
  { name: "おみくじ" },
  { name: "ストップウォッチ" },
  { name: "サルゲーム" },
  // { name: "YakinikuTetris" },
]

const Contents = ({currentMode,setMode}) => {
  const [current, setCurrent] = useState("")
  const handleClick = (e) => {
    setCurrent(e.target.textContent)
    setMode("contents")
  }

  const contentOutput = (current) => {
    switch (current) {
      case "ゆでたまごタイマー":
        return <YudetamagoTimer />
      case "ストップウォッチ":
        return <Stopwatch />
      case "おみくじ":
        return <Omikuji />
      case "サルゲーム":
        return <SaruGame />
      default:
        break
    }
  }
  const contentsOutput = contents.map((content) => (
    <li
      key={content.name}
      onClick={handleClick}
      className="border border-solid border-green-700 cursor-pointer"
    >
      {content.name}
    </li>
  ))
  const renderSections = () => {
    if (currentMode === "home") {
      return (
        <div className="containe text-center">
          <SectionHeader title={title} description={description} />
          <ul className="w-4/5 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:container gap-1">
            {contentsOutput}
          </ul>
        </div>
      )
    } else if (currentMode === "contents") {
      return <>{contentOutput(current)}</>
    }
  }

  return <section className="w-full">{renderSections()}</section>
}

export default Contents
