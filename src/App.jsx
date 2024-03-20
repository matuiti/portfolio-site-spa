import "./App.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContentsArea from "./components/ContentsArea"
import AnimationsArea from "./components/AnimationsArea"
import { useState } from "react"

function App() {
  const [mode, setMode] = useState("home")
  const handleChangeMode = (newMode) => setMode(newMode)

  const renderSections = () => {
    if (mode === "home") {
      return (
        <>
          <Header />
          <ContentsArea />
          <AnimationsArea />
          <Footer />
        </>
      )
    } else if (mode === "contents") {
      return (
        <>
          <ContentsArea />
        </>
      )
    }
  }

  return <>{renderSections()}</>
}
export default App
