const SectionHeader = ({ title, description }) => {
  return (
    <div>
      <h2 className="font-bold text-3xl">{title}</h2>
      <p className="mt-10 mb-20">{description}</p>
    </div>
  )
}

export default SectionHeader
