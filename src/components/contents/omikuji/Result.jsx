import { useEffect, useState } from "react"

function Result({ setCurrentScene,result }) {
  const [isTime, setIsTime] = useState(false)

  useEffect(() => {
    // GIF画像の再生時間をミリ秒単位で設定する
    const gifDuration = 1000

    // GIF画像の再生時間が経過した後に処理を実行する
    const timer = setTimeout(() => {
      setIsTime(true)
    }, gifDuration)

    // コンポーネントがアンマウントされたときにタイマーをクリアする
    return () => clearTimeout(timer)
  }, [setCurrentScene])

  const handleRetry = () => {
    setCurrentScene("waiting")
  }
  const handleToTop = () => {
    setCurrentScene("start")
  }

  return (
    <div className="relative flex justify-center items-center">
      <img src={`/images/omikuji/${result}`} />
      {isTime && (
        <>
          <button
            onClick={handleRetry}
            style={{
              top: "68%",
              fontSize: "1.2rem",
              width: "76%",
              height: "10%",
            }}
            className="bg-black none absolute flex justify-center items-center text-white font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            もう一度引く
            <svg
              style={{
                marginLeft: "8px",
                marginTop: "7px",
                width: "35px",
                height: "35px",
                viewBox: "0 0 35.009 32.023",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(0.966, -0.259, 0.259, 0.966, -7.716, 5.866)">
                <path
                  id="パス_1"
                  data-name="パス 1"
                  d="M171.236,8.607c1.773.649,3.9-.716,4.756-3.048S176.1.81,174.327.161s-3.9.716-4.756,3.049S169.463,7.959,171.236,8.607Z"
                  transform="translate(-153.68 0)"
                  fill="#fff"
                />
                <path
                  id="パス_2"
                  data-name="パス 2"
                  d="M22.144,70.755c1.855-.161,3.187-2.269,2.976-4.709s-1.886-4.288-3.741-4.128-3.187,2.269-2.976,4.71S20.289,70.915,22.144,70.755Z"
                  transform="translate(-11.325 -58.428)"
                  fill="#fff"
                />
                <path
                  id="パス_3"
                  data-name="パス 3"
                  d="M317.9,81.389c1.628.957,3.967,0,5.225-2.145s.958-4.653-.67-5.61-3.968.005-5.225,2.147S316.268,80.433,317.9,81.389Z"
                  transform="translate(-292.633 -69.144)"
                  fill="#fff"
                />
                <path
                  id="パス_4"
                  data-name="パス 4"
                  d="M366.722,242.23c-1.055-1.533-3.546-1.652-5.564-.264s-2.8,3.757-1.743,5.291,3.546,1.652,5.564.263S367.777,243.764,366.722,242.23Z"
                  transform="translate(-332.739 -227.447)"
                  fill="#fff"
                />
                <path
                  id="パス_5"
                  data-name="パス 5"
                  d="M23.145,205.7a4.288,4.288,0,0,0-6.511-3.073c-1.33.807-2.18,1.861-3.325,2.322s-4.352-.911-6.349,2.715a5.184,5.184,0,0,0,2.528,7.046c2.01.948,3.6.842,4.768,1.393s2.1,1.846,4.106,2.794a5.184,5.184,0,0,0,7.046-2.528c1.53-3.847-1.569-5.45-1.941-6.627S23.367,207.237,23.145,205.7Z"
                  transform="translate(0 -190.626)"
                  fill="#fff"
                />
              </g>
            </svg>
          </button>
          <button
            onClick={handleToTop}
            style={{
              top: "80%",
              fontSize: "1.2rem",
              width: "76%",
              height: "10%",
              border: "3px solid black",
            }}
            className="bg-white border text-black absolute flex justify-center items-center font-bold rounded-full focus:outline-none focus:shadow-outline"
          >
            TOPへもどる
            <svg
              style={{
                marginLeft: "8px",
                marginTop: "7px",
                width: "35px",
                height: "35px",
                viewBox: "0 0 35.009 32.023",
              }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(0.966, -0.259, 0.259, 0.966, -7.716, 5.866)">
                <path
                  id="パス_1"
                  data-name="パス 1"
                  d="M171.236,8.607c1.773.649,3.9-.716,4.756-3.048S176.1.81,174.327.161s-3.9.716-4.756,3.049S169.463,7.959,171.236,8.607Z"
                  transform="translate(-153.68 0)"
                  fill="#000"
                />
                <path
                  id="パス_2"
                  data-name="パス 2"
                  d="M22.144,70.755c1.855-.161,3.187-2.269,2.976-4.709s-1.886-4.288-3.741-4.128-3.187,2.269-2.976,4.71S20.289,70.915,22.144,70.755Z"
                  transform="translate(-11.325 -58.428)"
                  fill="#000"
                />
                <path
                  id="パス_3"
                  data-name="パス 3"
                  d="M317.9,81.389c1.628.957,3.967,0,5.225-2.145s.958-4.653-.67-5.61-3.968.005-5.225,2.147S316.268,80.433,317.9,81.389Z"
                  transform="translate(-292.633 -69.144)"
                  fill="#000"
                />
                <path
                  id="パス_4"
                  data-name="パス 4"
                  d="M366.722,242.23c-1.055-1.533-3.546-1.652-5.564-.264s-2.8,3.757-1.743,5.291,3.546,1.652,5.564.263S367.777,243.764,366.722,242.23Z"
                  transform="translate(-332.739 -227.447)"
                  fill="#000"
                />
                <path
                  id="パス_5"
                  data-name="パス 5"
                  d="M23.145,205.7a4.288,4.288,0,0,0-6.511-3.073c-1.33.807-2.18,1.861-3.325,2.322s-4.352-.911-6.349,2.715a5.184,5.184,0,0,0,2.528,7.046c2.01.948,3.6.842,4.768,1.393s2.1,1.846,4.106,2.794a5.184,5.184,0,0,0,7.046-2.528c1.53-3.847-1.569-5.45-1.941-6.627S23.367,207.237,23.145,205.7Z"
                  transform="translate(0 -190.626)"
                  fill="#000"
                />
              </g>
            </svg>
          </button>
        </>
      )}
    </div>
  )
}

export default Result
