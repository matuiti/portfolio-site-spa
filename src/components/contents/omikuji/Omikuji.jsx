import { useState } from "react";

const Omikuji = () => {
  const omikujiList = [
    "『 大吉 』", "『 吉 』", "『 中吉 』", "『 小吉 』", "『 末吉 』", "『 凶 』", "『 大凶 』"
  ];

  const [currentOmikuji, setCurrentOmikuji] = useState("");

  const handleClick = () => {
    const min = 0;
    const max = omikujiList.length - 1;
    const rand = Math.floor(Math.random() * (max + 1 - min)) + min;
    setCurrentOmikuji(omikujiList[rand]);
  }

  return (
    <div className={`text-center flex flex-col gap-6 pb-6 bg-gray-300`}>
      <h1 className={`font-bold text-3xl bg-blue-500 py-1`}>おみくじ!</h1>
      <p className={`bg-yellow-200 m-auto py-10 px-10 w-96`}>{currentOmikuji}</p>
      <button className={`pt-1 pb-1 pl-4 pr-4 mx-auto mt-4 bg-green-700 text-white hover:cursor-pointer hover:opacity-40 hover:transition-all rounded-md`} onClick={handleClick}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;
