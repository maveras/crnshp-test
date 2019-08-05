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
    this.setState({ value: ''})
  }

  onChangeHandler = (event) => {
    console.log('pase aki')
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <div className="input">
        <span>Input</span>
        <input type="text" value={this.state.value} onChange={this.onChangeHandler} placeholder="Enter a counter title"/>
        <button onClick={() => this.postCounterHandler()}>Add Counter</button>
      </div>
    )
  }
}
export default InputCounter