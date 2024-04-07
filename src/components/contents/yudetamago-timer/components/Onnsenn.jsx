import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const Onnsenn = ({ initialTime, formatTime }) => {
  const [timer, setTimer] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)
  const [isStartButtonVisible, setIsStartButtonVisible] = useState(true)

  // タイマーが動作中の場合、1秒ごとにカウントダウン関数を呼び出す
  useEffect(() => {
    const countdown = () => {
      if (timer > 0) {
        setTimer(timer - 1)
      } else {
        // タイマーが0になったら音を鳴らしてカウントを初期値に戻す
        new Audio("/bell.mp3").play()
        setTimer(initialTime)
        setIsRunning(false)
        setIsStartButtonVisible(true) // リセット時にスタートボタンを表示
      }
    }
    let timerId
    if (isRunning) {
      timerId = setInterval(countdown, 1000)
      setIsStartButtonVisible(false) // タイマーが開始されたらスタートボタンを非表示
    } else {
      clearInterval(timerId)
    }
    return () => clearInterval(timerId)
  }, [isRunning, timer, initialTime])

  // スタート/リセットボタンを切り替える関数
  const toggleButton = () => {
    if (!isRunning) {
      setIsRunning(true)
    } else {
      setTimer(initialTime)
      setIsRunning(false)
      setIsStartButtonVisible(true) // リセット時にスタートボタンを表示
    }
  }

  return (
    <li style={{ backgroundColor: "#FFF3CE", padding: "20px 8px 16px",marginTop:"-14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "12px",
          }}
        >
          <img
            src="\images\yudetamago-timer\onnsenn@2x.png"
            style={{ width: "81px", height: "55px" }}
          />
        </div>
        <div
          style={{
            color: "#492C15",
            fontSize: "50px",
            marginLeft: "-10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {formatTime(timer)}
        </div>
        <div style={{ display: "flex" }}>
          <button
            style={{
              margin: "auto",
              width: "70px",
              height: "70px",
              backgroundColor: isRunning ? "#4ED0FF" : "#FF774E",
              borderRadius: "50%",
              fontSize: "14px",
              color: "#FFFFFF",
            }}
            onClick={toggleButton}
            disabled={timer <= 0 && !isRunning}
          >
            {isStartButtonVisible ? "スタート" : "リセット"}
          </button>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          paddingTop: "22px",
          paddingBottom: ".5em",
        }}
      >
        温泉卵は、
        <span style={{ color: "#FF774E" }}>お湯にいれ火を止めてから</span>
        <br />
        スタートを押してね！
      </p>
    </li>
  )
}

export default Onnsenn
