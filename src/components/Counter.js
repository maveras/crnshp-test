import React, { Component } from 'react'
class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <div className="counter__delete" onClick={this.props.deleteCounter}>
          X
        </div>
        <div className="counter__name">
          {this.props.counterTitle}
        </div>
        <div className="counter__qty">
          {this.props.counterCount}
        </div>
        <div className="counter__actions">
          <div className="counter__actions__up">
            Up
          </div>
          <div className="counter__actions__down">
            Down
          </div>
        </div>
      </div>
    )
  }
}
export default Counter