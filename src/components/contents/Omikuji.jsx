import { useState } from "react";

const Omikuji = () => {
  const omikujiList = [
    "大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"
  ];

  const [currentOmikuji, setCurrentOmikuji] = useState("");

  const handleClick = () => {
    const min = 0;
    const max = omikujiList.length - 1;
    const rand = Math.floor(Math.random() * (max + 1 - min)) + min;
    setCurrentOmikuji(omikujiList[rand]);
  }

  return (
    <div className={`text-center flex flex-col gap-6 bg-pink-300 p-8`}>
      <h1 className={`font-bold text-3xl`}>おみくじ!</h1>
      <p className={`bg-yellow-200 m-auto p-10`}>{currentOmikuji}</p>
      <button className={`pt-1 pb-1 pl-4 pr-4 m-auto bg-slate-800 text-white hover:cursor-pointer hover:opacity-40 hover:transition-all rounded-md`} onClick={handleClick}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;
