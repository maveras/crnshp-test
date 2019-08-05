import React, { Component } from 'react'
import './AdvancedFilter.css'
class AdvancedFilter extends Component {
  state = {
    value: 'none',
    input: '',
    noFilteredCounters: []
  }
  componentDidMount() {
    this.setState({noFilteredCounters: this.props.filteredCounters})
  }
  onChangeHandler = (e) => {
    this.setState({value: event.target.value, input: ''})
    if (this.state.value === 'none') {
      this.props.refreshList()
    }
  }

  inputHandler = (e) => {
    const currentCounters = this.props.filteredCounters
    let conditionalCounters = []
    this.setState({ input: event.target.value}, () => {
      if (this.state.value === 'less' && this.state.input !== '') {
        conditionalCounters = currentCounters.filter(counter => Number(counter.count) < Number(this.state.input))
        this.props.setFilteredCounters(conditionalCounters)
      }
      else if (this.state.value === 'greater' && this.state.input !== '') {
        conditionalCounters = currentCounters.filter(counter => Number(counter.count) > Number(this.state.input))
        this.props.setFilteredCounters(conditionalCounters)
      }
      else {
        this.props.refreshList()
      }
    })

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
        <input disabled={this.state.value==='none'} value={this.state.input} className="advanced__input" onChange={this.inputHandler} type="text"/>
      </div>
    )
  }
}
export default AdvancedFilter