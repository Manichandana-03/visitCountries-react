import './index.css'

const CountriesList = params => {
  const {details, addVisitedCountry} = params
  const {id, name, isVisited} = details
  const buttonText = isVisited ? 'Visited' : 'Visit'
  const onVisited = () => {
    addVisitedCountry(id)
  }

  return (
    <li>
      <p>{name}</p>
      {buttonText === 'Visited' ? (
        <p>{buttonText}</p>
      ) : (
        <button type="button" onClick={onVisited}>
          {buttonText}
        </button>
      )}
    </li>
  )
}

export default CountriesList
