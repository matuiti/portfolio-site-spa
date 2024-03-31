import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function ReturnButton() {
  return (
    <Button className="tracking-widest bg-transparent">
      <Link to="/">TOPへもどる</Link>
    </Button>
  )
}

export default ReturnButton
