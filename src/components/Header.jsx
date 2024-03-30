import { useContext } from "react"
import { changeModeContext } from "../App"

const Header = () => {
  const changeMode = useContext(changeModeContext)
  const handleClick = () => {
    changeMode("home")
  }
  return (
    <header
      className="cursor-pointer w-full pt-1 pb-2 px-4 text-md tracking-wide text-neutral-400 items-center bg-gray-700 shadow-sm"
      onClick={handleClick}
    >
      Portfolio
    </header>
  )
}

export default Header
