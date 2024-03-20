import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { handleChangeModeContext } from "../../App"

function ReturnButton() {
  const changeMode = useContext(handleChangeModeContext)
  const handleClick = () => {
    changeMode("home") // クリックされたときに changeMode を実行する関数を定義
  }
  return (
    <Button
      className="tracking-widest mt-40 ml-auto flex"
      onClick={handleClick} // handleClick 関数を onClick ハンドラーに渡す
    >
      TOPへもどる
    </Button>
  )
}

export default ReturnButton
