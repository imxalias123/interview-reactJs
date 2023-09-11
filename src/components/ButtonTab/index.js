import './index.css'

const ButtonTab = props => {
  const {text, changeImage, isActive} = props
  const {buttonText, id} = text

  const btnClassName = isActive ? 'pressed' : ''

  const onClickBtn = () => {
    changeImage(id)
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClickBtn}
        className={`tab-btn ${btnClassName}`}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default ButtonTab
