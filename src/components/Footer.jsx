import ReturnButton from "./ui/returnButton"

const Footer = () => {
  return (
    <footer className="bg-gray-700  w-full flex justify-center items-center gap-x-12 text-center">
      <small className="text-gray-500">© Matuiti</small>
      <ReturnButton />
      </footer>
  )
}

export default Footer