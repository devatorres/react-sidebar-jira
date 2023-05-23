import './selector.css'

const ButtonSelector = ({ toggle, isOnce, OnceIcon, OtherIcon }) => {
  return (
    <button className="btn-selector" onClick={toggle}>
      {isOnce() ? OnceIcon : OtherIcon}
    </button>
  )
}

export default ButtonSelector
