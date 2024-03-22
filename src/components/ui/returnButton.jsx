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
      className="tracking-widest  mr-8 fixed bottom-10 right-8"
      onClick={handleClick}
    >
      TOPへもどる
    </Button>
  )
}

export default ReturnButton
