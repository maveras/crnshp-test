import React, {Component}  from 'react'
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
  }
  onChangeHandler = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="input">
        <span>Input</span>
        <input type="text" onChange={this.onChangeHandler} placeholder="Enter a counter title"/>
        <button onClick={() => this.postCounterHandler()}>Add Counter</button>
      </div>
    )
  }
}
export default InputCounter