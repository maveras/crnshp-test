import React, { Component } from 'react'
import './Counter.css'
class Counter extends Component {
  render () {
    return (
      <div className="counter">
        <div className="counter__delete" onClick={this.props.deleteCounter}>
          <i class="material-icons brand-color action-icon">
            delete
          </i>
        </div>
        <div className="counter__name">
          {this.props.counterTitle}
        </div>
        <div className="counter__actions">
          <div className="counter__qty">
            {this.props.counterCount}
          </div>
          <div className="counter__actions-main">
            <div className="counter__actions-main__up">
              <i className="material-icons brand-color action-icon">
                keyboard_arrow_up
              </i>
            </div>
            <div className="counter__actions-main__down">
              <i className="material-icons brand-color action-icon">
                keyboard_arrow_down
              </i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Counter