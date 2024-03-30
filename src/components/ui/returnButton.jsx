import { Button } from "@/components/ui/button"

function ReturnButton({setMode}) {
  const handleClick = () => {
    setMode("home")
  }
  return (
    <Button className="tracking-widest bg-transparent" onClick={handleClick}>
      TOPへもどる
    </Button>
  )
}

export default ReturnButton
