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
    <div className={`text-center flex flex-col gap-20 pb-6 bg-gray-300 m-auto shadow-md md:w-1/2`}>
      <h1 className={`font-bold text-3xl bg-blue-500 py-4 shadow-md`}>運勢を占う</h1>
      <p className={`${currentOmikuji === "大吉" ? "text-red-600 font-bold" : "text-black"} bg-yellow-200 m-auto py-10 px-10 text-6xl shadow-md`}>{currentOmikuji ? currentOmikuji : "^=^b"}</p>
      <button className={`shadow-md pt-1 pb-1 pl-4 pr-4 mx-auto -mt-8 bg-green-700 text-white hover:cursor-pointer hover:transition-all rounded-md`} onClick={handleClick}>おみくじを引く</button>
    </div>
  );
}

export default Omikuji;
