import React, { Component } from 'react'
class AdvancedFilter extends Component {
  state = {
    value: 'none',
    input: ''
  }
  render () {
    return (
      <div className="advanced">
        <div className="sort-select__input">
          <select onChange={this.onChangeHandler}>
            <option selected value="none">None</option>
            <option value="less">Less Than</option>
            <option value="greater">Greater Than</option>
          </select>
          <i className="material-icons brand-color action-icon icon-right">
            keyboard_arrow_down
          </i>
        </div>
        <input type="text"/>
      </div>
    )
  }
}
export default AdvancedFilter