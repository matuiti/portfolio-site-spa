import ReturnButton from "./ui/returnButton"

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center gap-x-12 text-center text-xl border-t-2">
      <small className="text-gray-500">© Matuiti</small>
      <ReturnButton />
      </footer>
  )
}

export default Footer