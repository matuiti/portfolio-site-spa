import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { handleChangeModeContext } from "../../App"

function ReturnButton() {
  const changeMode = useContext(handleChangeModeContext)
  const handleClick = () => {
    changeMode("home")
  }
  return (
    <Button
      className="tracking-widest mt-40 m-auto flex"
      onClick={handleClick}
    >
      TOPへもどる
    </Button>
  )
}

export default ReturnButton