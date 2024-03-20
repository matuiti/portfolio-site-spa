import { useState,useContext } from "react"
import SectionHeader from "@/components/SectionHeader"
import ReturnButton from "@/components/ui/returnButton"
import { modeContext,handleChangeModeContext } from "@/App"

const title = "Contents"
const description = `現在開発中です！`
const contents = [
  { name: "SaruGame" },
  { name: "YakinikuTetris" },
  { name: "YudetamagoTimer" },
  { name: "nanndemoii1" },
  { name: "nanndemoii2" },
  { name: "nanndemoii3" },
  { name: "nanndemoii4" },
  { name: "nanndemoii5" },
  { name: "nanndemoii6" },
]

const Contents = () => {
  const [current, setCurrent] = useState("")
  const mode = useContext(modeContext)
  const changeMode = useContext(handleChangeModeContext)
  const handleClick = (e) => {
    setCurrent(e.target.textContent)
    changeMode("contents")
  }

  const contentsOutput = contents.map((content) => (
    <li
      key={content.name}
      onClick={handleClick}
      className="border border-solid border-green-700"
    >
      {content.name}
    </li>
  ))
  const renderSections = () => {
    if (mode === "home") {
      console.log("if home");
      return (
        <>
          <SectionHeader title={title} description={description} />
          <ul className="w-full py-32 px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:container gap-1">
            {contentsOutput}
          </ul>
        </>
      )
    } else if (mode === "contents") {
      console.log("if contents");

      return (
        <>
          <ul className="w-full py-32 px-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:container gap-1">
            {contentsOutput}
          </ul>
          <ReturnButton />
        </>
      )
    }
  }

  return <section className="m-auto text-center">{renderSections()}</section>
}

export default Contents
