import { useState, useEffect, useRef } from 'react';

const Omikuji = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [omikujiResult, setOmikujiResult] = useState(null);
  const [isResultPlaying, setIsResultPlaying] = useState(false); // おみくじの結果の再生状態
  const videoRef = useRef(null); // ビデオ要素の参照

  useEffect(() => {
    if (isDrawing && !isResultPlaying) {
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
          setIsResultPlaying(true); // おみくじ結果の再生状態をtrueに設定
          setIsDrawing(false); // おみくじ結果の表示後にisDrawingをfalseに設定
        };
      }
    }
  }, [isDrawing, isResultPlaying]);

  const handleClick = () => {
    if (!omikujiResult && !isResultPlaying) { // おみくじ結果が表示されていないかつ待ち動画が再生中でない場合のみ処理を実行
      setIsDrawing(true);
    } else if (omikujiResult) { // おみくじ結果が表示されている場合は再度おみくじを引く
      setOmikujiResult(null);
      setIsResultPlaying(false);
    }
  };

  return (
    <div className={`text-center flex flex-col gap-20 pb-6 bg-gray-300 m-auto shadow-md md:w-1/2`}>
      <h1 className={`font-bold text-3xl bg-blue-500 py-4 shadow-md`}>運勢を占う</h1>
      <button onClick={handleClick} disabled={isDrawing || isResultPlaying}> {/* 待ち動画が再生中かつおみくじの結果が表示されていない場合はボタンを無効に */}
        {omikujiResult ? "もう一度引く" : "おみくじを引く"}
      </button>
      <div className="media-container">
        {isDrawing && (
          <video autoPlay ref={videoRef}>
            <source src="public/images/omikuji/waiting.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {omikujiResult && !isDrawing && (
          <video autoPlay onEnded={() => setIsResultPlaying(false)}> {/* おみくじの結果の再生が終了したらisResultPlayingをfalseに設定 */}
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
