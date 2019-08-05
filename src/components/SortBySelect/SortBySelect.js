import React, {Component} from 'react';
class SortbySelect extends Component {
  state = {
    value: 'title'
  }

  onChangeHandler = (e) => {
    this.setState({value: e.target.value})
    this.props.sortBy(e.target.value)
  }
  render () {
    return (
      <div className="sort-select">
        <div className="sort-select__title">
          <label>
          Sort By
          </label>
        </div>
        <div className="sort-select__input">
          <select onChange={this.onChangeHandler}>
            <option selected value="title">Title</option>
            <option value="count">Count</option>
          </select>
        </div>
      </div>
    )
  }
}
export default SortbySelect