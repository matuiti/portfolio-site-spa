import { useContext } from "react"
import { IsTipsContext } from "../YudetamagoTimer"

const TipsButton = () => {
  const [isTips, setIsTips] = useContext(IsTipsContext)
  const handleTips = () => setIsTips((prev) => !prev)

  return (
    <div onClick={handleTips} className="cursor-pointer">
      <img
        src={`/images/yudetamago-timer/${isTips ? "close-btn@2x.png" : "tips-btn@2x.png"}`}
        style={{ width: "96px", height: "96px" }}
      />
    </div>
  )
}

export default TipsButton
