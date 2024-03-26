import { useState, useContext } from "react"
import SectionHeader from "@/components/SectionHeader"
// import ReturnButton from "@/components/ui/returnButton"
import { modeContext, handleChangeModeContext } from "@/App"
import Omikuji from "./contents/omikuji/Omikuji"
import Stopwatch from "./contents/stopwatch/Stopwatch"
import YudetamagoTimer from "./contents/yudetamago-timer/YudetamagoTimer"

const title = "Contents"
const description = `現在開発中です！`
const contents = [
  { name: "ゆでたまごタイマー" },
  { name: "おみくじ" },
  { name: "ストップウォッチ" },
  // { name: "SaruGame" },
  // { name: "YakinikuTetris" },
]

const Contents = () => {
  const [current, setCurrent] = useState("")
  const mode = useContext(modeContext)
  const changeMode = useContext(handleChangeModeContext)
  const handleClick = (e) => {
    setCurrent(e.target.textContent)
    changeMode("contents")
  }

  const contentOutput = (current) => {
    switch (current) {
      case "ゆでたまごタイマー":
        return <YudetamagoTimer />
      case "ストップウォッチ":
        return <Stopwatch />
      case "おみくじ":
        return <Omikuji />
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
    if (mode === "home") {
      return (
        <div>
          <SectionHeader title={title} description={description} />
          <ul className="w-4/5 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:container gap-1">
            {contentsOutput}
          </ul>
        </div>
      )
    } else if (mode === "contents") {
      return (
        <>
          {contentOutput(current)}
        </>
      )
    }
  }

  return <section className="container text-center">{renderSections()}</section>
}

export default Contents
