import { useContext } from "react"
import { handleChangeModeContext } from "../App"

const Header = () => {
  const changeMode = useContext(handleChangeModeContext)
  const handleClick = () => {
    changeMode("home")
  }
  return (
    <header className="cursor-pointer mb-10 pt-1 pb-2 px-4 text-md tracking-wide text-neutral-400 items-center bg-gray-700 shadow-sm" onClick={handleClick}>Portfolio</header>
  )
}

export default Header