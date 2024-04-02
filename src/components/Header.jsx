import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between cursor-pointer w-full pt-1 pb-2 px-4 text-md tracking-wide text-neutral-400 items-center bg-gray-700 shadow-sm">
      <Link to="/"><h1 className="italic text-gray-400 mr-4 hover:text-white">Portfolio</h1></Link>
      <nav>
        <ul className="flex justify-end flex-wrap gap-x-3 gap-y-2 text-sm">
          <Link to="/sarugame"><li className="hover:text-white">サルゲーム</li></Link>
          <Link to="/stopwatch"><li className="hover:text-white">ストップウォッチ</li></Link>
          <Link to="/omikuji"><li className="hover:text-white">猫みくじ</li></Link>
          <Link to="/yudetamagotimer"><li className="hover:text-white">ゆでたまごタイマー</li></Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
