import React, {Component}  from 'react'
import './InputCounter.css'
class InputCounter extends Component {
  state = {
    value: ''
  }
  postCounterHandler = () => {
    const counter = {
      title: this.state.value
    }
    this.props.postCounter(counter)
    this.props.refreshList()
    this.setState({ value: ''})
  }

  onChangeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="input">
        <input className="input__counter" type="text" value={this.state.value} onChange={this.onChangeHandler} placeholder="Enter a counter title"/>
        <button className="btn btn--add" onClick={() => this.postCounterHandler()}>Add Counter</button>
      </div>
    )
  }
}
export default InputCounter