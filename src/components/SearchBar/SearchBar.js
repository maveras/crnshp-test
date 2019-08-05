import React, {Component} from 'react'
class SearchBar extends Component {
  state = {
    value: ''
  }
  onChangeHandler = (e) => {
    const currentCounters = this.props.filteredCounters
    this.setState({value: e.target.value})
    const filteredCounters = currentCounters.filter(counter => {
      let regex = new RegExp(e.target.value, 'gi')
      return counter.title.match(regex)
    })
    this.props.setFilteredCounters(filteredCounters)
  }
  render () {
    return (
       <div className="search-bar">
        <div className="search-bar__title">
          <label>
          Search
          </label>
        </div>
        <div className="search-bar__input">
          <input className="search-bar__input" type="text" value={this.state.value} onChange={this.onChangeHandler} placeholder="Enter a counter title"/>
        </div>
      </div>
    )
  }
}
export default SearchBar