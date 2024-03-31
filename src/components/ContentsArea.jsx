import SectionHeader from "@/components/SectionHeader"

const title = "Contents"
const description = `現在開発中です！`
const contents = [
  { name: "yudetamagotimer",nameJapanese:"ゆでたまごタイマー" },
  { name: "omikuji",nameJapanese:"猫みくじ" },
  { name: "stopwatch",nameJapanese:"ストップウォッチ" },
  { name: "sarugame",nameJapanese:"サルゲーム" },
  // { name: "YakinikuTetris" },
]

const Contents = () => {

  const contentsOutput = contents.map((content) => (
    <li
      key={content.name}
      className="border border-solid border-green-700 cursor-pointer"
    >
      {content.nameJapanese}
    </li>
  ))
  return (
    <section className="w-full">
      <div className="containe text-center">
        <SectionHeader title={title} description={description} />
        <ul className="w-4/5 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:container gap-1">
          {contentsOutput}
        </ul>
      </div>
    </section>
  )
}

export default Contents
