import './index.css'

const Image = props => {
  const {each} = props
  const {imageUrl, imageAltText} = each

  return (
    <li>
      <img src={imageUrl} alt={imageAltText} className="image" />
    </li>
  )
}
export default Image
