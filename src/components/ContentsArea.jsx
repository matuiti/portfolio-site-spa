import Contents from "./Contents"
import SectionHeader from "./SectionHeader"

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas iste minus deleniti veritatis expedita est aliquam recusandae. Dolores, veritatis.`

const ContentsArea = () => {
  return (
    <section className="m-auto container text-center">
      <SectionHeader title="Contents" description={description} />
      <Contents />
    </section>
  )
}

export default ContentsArea
