import { Button } from "@/components/ui/button"

function ReturnButton() {
  const handleClick = () => {
  }
  return (
    <Button className="tracking-widest bg-transparent" onClick={handleClick}>
      TOPへもどる
    </Button>
  )
}

export default ReturnButton
