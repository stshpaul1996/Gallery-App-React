// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {galleryDetails, updateImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = galleryDetails
  const isThumbnail = isActive ? `thumbnail active` : `thumbnail`

  const onChangeImage = () => {
    updateImage(id)
  }

  return (
    <li className="container-list">
      <button type="button" onClick={onChangeImage} className="button">
        <img
          src={thumbnailUrl}
          className={isThumbnail}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
