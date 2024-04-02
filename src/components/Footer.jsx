import ReturnLink from "./ui/returnLink"

const Footer = () => {
  return (
    <footer className="bg-gray-700  w-full min-h-10 flex justify-center items-center gap-x-12 text-center">
      <small className="text-gray-500">© Matuiti</small>
      <ReturnLink />
    </footer>
  )
}

export default Footer
