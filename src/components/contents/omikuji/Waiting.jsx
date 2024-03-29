import { useEffect } from "react";

function Waiting({ setCurrentScene }) {
  useEffect(() => {
    // GIF画像の再生時間をミリ秒単位で設定する
    const gifDuration = 3000;

    // GIF画像の再生時間が経過した後に処理を実行する
    const timer = setTimeout(() => {
      setCurrentScene("result");
    }, gifDuration);

    // コンポーネントがアンマウントされたときにタイマーをクリアする
    return () => clearTimeout(timer);
  }, [setCurrentScene]);


  return (
    <div className="relative flex justify-center items-center">
      <img src="/images/omikuji/waiting.gif" />
    </div>
  );
}

export default Waiting;
