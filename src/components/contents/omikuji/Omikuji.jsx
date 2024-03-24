import { useState, useEffect, useRef } from 'react';

const Omikuji = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [omikujiResult, setOmikujiResult] = useState(null);
  const videoRef = useRef(null); // ビデオ要素の参照

  useEffect(() => {
    if (isDrawing) {
      // 待ち動画の再生が終了したらおみくじの結果を決定
      const waitingVideo = videoRef.current;
      if (waitingVideo) {
        waitingVideo.play();
        waitingVideo.onended = () => {
          const min = 1; // waiting.mp4を除外するために1から始める
          const max = 2; // ビデオファイル名の数
          const rand = Math.floor(Math.random() * (max - min + 1)) + min;
          if (rand === 1) {
            setOmikujiResult("daikiti.mp4");
          } else {
            setOmikujiResult("daikyo.mp4");
          }
          setIsDrawing(false); // おみくじ結果の表示後にisDrawingをfalseに設定
        };
      }
    }
  }, [isDrawing]);

  const handleClick = () => {
    setIsDrawing(true);
  };

  return (
    <div className="container">
      <h1>おみくじアプリ</h1>
      <button onClick={handleClick} disabled={isDrawing}>
        おみくじを引く
      </button>
      <div className="media-container">
        {isDrawing && (
          <video autoPlay muted ref={videoRef}>
            <source src="public/images/omikuji/waiting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {omikujiResult && !isDrawing && (
          <video autoPlay muted>
            <source src={`public/images/omikuji/${omikujiResult}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {/* 画像の場合 */}
        {/* {omikujiResult && !isDrawing && (
          <img src={`public/images/omikuji/${omikujiResult}`} alt="omikuji result" />
        )} */}
      </div>
      {omikujiResult && (
        <h2>結果: {omikujiResult}</h2>
      )}
    </div>
  );
};

export default Omikuji;
