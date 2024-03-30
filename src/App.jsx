import "@/App.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContentsArea from "@/components/ContentsArea"
import AnimationsArea from "@/components/AnimationsArea"
import { useState } from "react"


function App() {
  const [currentMode, setMode] = useState("home")

  return (
    <>
      <Header currentMode={currentMode} setMode={setMode} />
      <ContentsArea currentMode={currentMode} setMode={setMode} />
      {currentMode==="home" && <AnimationsArea />}
      <Footer currentMode={currentMode} setMode={setMode} />
    </>
  )
}

export default App
