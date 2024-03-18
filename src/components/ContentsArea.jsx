import Contents from "./Contents";
import SectionHead from "./SectionHead"

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas iste minus deleniti veritatis expedita est aliquam recusandae. Dolores, veritatis.`;

const ContentsArea = () => {
  return (
    <main className="m-auto container text-center">
      <SectionHead title="Contents" description={description} />
      <Contents />
      </main>
  )
}

export default ContentsArea