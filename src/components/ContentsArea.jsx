import SectionHeader from "@/components/SectionHeader"
import { Link } from "react-router-dom"

const title = "Contents"
const description = `現在開発中です！`
const contents = [
  { name: "yudetamagotimer", nameJapanese: "ゆでたまごタイマー", path: "/yudetamagotimer", },
  { name: "omikuji", nameJapanese: "猫みくじ", path: "/omikuji" },
  { name: "stopwatch", nameJapanese: "ストップウォッチ", path: "/stopwatch" },
  { name: "sarugame", nameJapanese: "サルゲーム", path: "/sarugame" },
  // { name: "YakinikuTetris" },
]

const Contents = () => {
  const contentsOutput = contents.map((content) => (
    <Link to={content.path} key={content.name}>
      <li className="border border-solid border-green-700 cursor-pointer">
        {content.nameJapanese}
      </li>
    </Link>
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
