import './index.css'

const VisitedCountriesList = props => {
  const {details, removeVisitCountry} = props
  const {id, name, imageUrl} = details
  const onDelete = () => {
    removeVisitCountry(id)
  }
  return (
    <li>
      <img src={imageUrl} alt="thumbnail" />
      <div>
        <p>{name}</p>
        <button type="button" onClick={onDelete}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountriesList
