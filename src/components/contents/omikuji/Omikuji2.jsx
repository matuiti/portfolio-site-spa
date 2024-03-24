import { useState } from 'react';

const OmikujiApp = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [omikujiResult, setOmikujiResult] = useState(null);

  const omikujiList = [
    { result: '大吉', media: 'public/images/omikuji/daikiti.mp4' },
    // { result: '吉'  , media: 'good-luck.mp4' },
    // { result: '中吉', media: 'bad-luck.mp4' },
    // { result: '小吉', media: 'bad-luck.mp4' },
    // { result: '末吉', media: 'bad-luck.mp4' },
    // { result: '凶'  , media: 'bad-luck.mp4' },
    { result: '大凶', media: 'public/images/omikuji/daikyo.mp4' },
  ];

  const handleClick = () => {
    setIsDrawing(true);
    // 待ち時間用の動画を再生する処理
    setTimeout(() => {
      const min = 0;
      const max = omikujiList.length - 1;
      const rand = Math.floor(Math.random() * (max + 1 - min)) + min;
      setOmikujiResult(omikujiList[rand]);
      setIsDrawing(false);
    }, 5000);
  };

  return (
    <div className="container">
      <h1>おみくじアプリ</h1>
      <button onClick={handleClick} disabled={isDrawing}>
        おみくじを引く
      </button>
      {isDrawing && (
        <div>
          <p>おみくじを引いています...</p>
          <video autoPlay muted loop>
            <source src="public/images/omikuji/waiting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {omikujiResult && (
        <>
          <h2>結果: {omikujiResult.result}</h2>
          {omikujiResult.media.endsWith('.mp4') ? (
            <video controls>
              <source src={`videos/${omikujiResult.media}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={`images/${omikujiResult.media}`} alt="omikuji result" />
          )}
        </>
      )}
    </div>
  );
};

export default OmikujiApp;
