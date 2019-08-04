import React, {Component} from 'react'
class Fetch extends Component {
  componentDidMount() {
    fetch('api/v1/counters', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }
  render() {
    return (
      <h1>holaa de render</h1> 
    )
  }
}

export default Fetch




