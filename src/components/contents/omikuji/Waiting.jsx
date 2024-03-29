import { useEffect } from "react";

function Waiting({ setCurrentScene }) {
  useEffect(() => {
    // GIF画像の再生時間をミリ秒単位で設定する
    const gifDuration = 3000; // 例：3秒（3000ミリ秒）

    // GIF画像の再生時間が経過した後に処理を実行する
    const timer = setTimeout(() => {
      handleGifEnd();
    }, gifDuration);

    // コンポーネントがアンマウントされたときにタイマーをクリアする
    return () => clearTimeout(timer);
  }, []);

  const handleGifEnd = () => {
    // GIF画像の再生時間が経過した後の処理をここに記述する
    setCurrentScene("result");
  };

  return (
    <div className="relative flex justify-center items-center">
      <img src="/images/omikuji/waiting.gif" alt="waiting" />
    </div>
  );
}

export default Waiting;
