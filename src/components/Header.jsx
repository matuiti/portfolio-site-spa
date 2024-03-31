import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="cursor-pointer w-full pt-1 pb-2 px-4 text-md tracking-wide text-neutral-400 items-center bg-gray-700 shadow-sm">
      <Link to="/">Portfolio</Link>
    </header>
  )
}

export default Header
