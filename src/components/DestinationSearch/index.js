import './index.css'
import DestinationItem from '../DestinationItem'

const DestinationSearch = props => {
  const {destinationsList} = props

  return (
    <div className="bg-container">
      <h1 className="main-heading">Destination Search</h1>
      <div className="wrapper">
        <input type="search" placeholder="Search" className="search-bar" />
        <img
          className="search-icon"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
      </div>

      <ul className="list-container">
        {destinationsList.map(eachDestination => (
          <DestinationItem
            destinationDetails={eachDestination}
            key={eachDestination.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
