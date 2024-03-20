const SectionHeader = ({ title, description }) => {
  return (
    <div>
      <h2 className="font-bold text-5xl font-serif">{title}</h2>
      <p className="mt-16">{description}</p>
    </div>
  )
}

export default SectionHeader
