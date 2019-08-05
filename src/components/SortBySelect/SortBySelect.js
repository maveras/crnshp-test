import React, {Component} from 'react';
import './SortBySelect.css'
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
          <i className="material-icons brand-color action-icon icon-right">
            keyboard_arrow_down
          </i>
        </div>
      </div>
    )
  }
}
export default SortbySelect