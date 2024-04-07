import { createContext, useState } from "react"
import Header from "./Header"
import Timers from "./Timers"
import Tips from "./Tips"

// eslint-disable-next-line react-refresh/only-export-components
export const IsTipsContext = createContext()

function YudetamagoTimer() {
  const [isTips, setIsTips] = useState(false)

  return (
    <div
      style={{
        maxWidth: "360px",
        letterSpacing: "0px",
      }}
      className={"w-full bg-white font-MochiyPopOne m-auto"}
    >
      <IsTipsContext.Provider value={[isTips, setIsTips]}>
        <Header />
      </IsTipsContext.Provider>
      {isTips ? <Tips /> : <Timers />}
    </div>
  )
}

export default YudetamagoTimer
