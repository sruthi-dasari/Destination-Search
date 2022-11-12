import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachDestination => {
      const destName = eachDestination.name
      const destNameInLower = destName.toLowerCase()
      const destNameInUpper = destName.toUpperCase()
      return (
        destName.includes(searchInput) ||
        destNameInLower.includes(searchInput) ||
        destNameInUpper.includes(searchInput)
      )
    })
    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="wrapper">
          <input
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
            placeholder="Search"
            className="search-bar"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
