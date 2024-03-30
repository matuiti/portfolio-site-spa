import "@/App.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContentsArea from "@/components/ContentsArea"
import AnimationsArea from "@/components/AnimationsArea"
import { useState, createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const changeModeContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const currentModeContext = createContext()

function App() {
  const [currentMode, setMode] = useState("home")
  const changeMode = (newMode) => setMode(newMode)

  const renderSections = () => {
    if (currentMode === "home") {
      return (
        <>
          <Header />
          <ContentsArea />
          <AnimationsArea />
          <Footer />
        </>
      )
    } else if (currentMode === "contents") {
      return (
        <>
          <Header />
          <ContentsArea />
          <Footer />
        </>
      )
    }
  }

  return (
    <changeModeContext.Provider value={changeMode}>
      <currentModeContext.Provider value={currentMode}>
        {renderSections()}
      </currentModeContext.Provider>
    </changeModeContext.Provider>
  )
}

export default App
