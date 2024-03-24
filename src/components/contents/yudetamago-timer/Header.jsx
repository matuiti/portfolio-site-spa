import TipsButton from "./components/TipsButton"

const Header = () => {
  return (
    <header className="flex">
      <h1
        style={{
          backgroundColor: "#492C15",
          fontSize: "25px",
          letterSpacing: "0.5px",
        }}
        className="flex grow text-white justify-center items-center pt-5 pb-6"
      >
        ゆでたまごタイマー
      </h1>
      <TipsButton />
    </header>
  )
}

export default Header
