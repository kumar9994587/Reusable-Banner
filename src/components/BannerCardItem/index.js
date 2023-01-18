// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <ul className={`banner-card-item ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="descrition">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </ul>
  )
}
export default BannerCardItem
