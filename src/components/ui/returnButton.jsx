import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { changeModeContext } from "../../App"

function ReturnButton() {
  const changeMode = useContext(changeModeContext)
  const handleClick = () => {
    changeMode("home")
  }
  return (
    <Button className="tracking-widest bg-transparent" onClick={handleClick}>
      TOPへもどる
    </Button>
  )
}

export default ReturnButton
