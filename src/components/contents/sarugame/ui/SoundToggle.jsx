import "../css/SoundControl.css"
import { useSoundContext } from "../SaruGame"

function SoundToggle() {
  const { isSoundOn, toggleSound } = useSoundContext() // useSoundContextフックからisSoundOnとtoggleSoundを取得する

  return (
    <>
      <p>{isSoundOn ? "サウンドON" : "サウンドOFF"}</p>
      <div className="toggle_button">
        <input
          id="toggle"
          className="toggle_input"
          type="checkbox"
          checked={isSoundOn}
          onChange={toggleSound}
        />
        <label htmlFor="toggle" className="toggle_label"></label>
      </div>
    </>
  )
}

export default SoundToggle
