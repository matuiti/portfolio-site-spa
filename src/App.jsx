import "@/App.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContentsArea from "@/components/ContentsArea"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SaruGame from "./components/contents/sarugame/SaruGame"
import YudetamagoTimer from "./components/contents/yudetamago-timer/YudetamagoTimer"
import Omikuji from "./components/contents/omikuji/Omikuji"
import Stopwatch from "./components/contents/stopwatch/Stopwatch"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContentsArea />} />
        <Route path="/omikuji" element={ <Omikuji />} />
        <Route path="/sarugame" element={ <SaruGame />} />
        <Route path="/stopwatch" element={ <Stopwatch />} />
        <Route path="/yudetamagotimer" element={ <YudetamagoTimer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
