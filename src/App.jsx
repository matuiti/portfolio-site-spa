import "@/App.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContentsArea from "@/components/ContentsArea"
import AnimationsArea from "@/components/AnimationsArea"
import { useState, createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const handleChangeModeContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const modeContext = createContext()

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
          <Header />
          <ContentsArea />
          <Footer />
        </>
      )
    }
  }

  return (
    <handleChangeModeContext.Provider value={handleChangeMode}>
      <modeContext.Provider value={mode}>
        {renderSections()}
      </modeContext.Provider>
    </handleChangeModeContext.Provider>
  )
}

export default App
