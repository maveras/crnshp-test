import React, {Component} from 'react'
import { postCounter, getCounters } from './api/counters'

class Fetch extends Component {
  componentDidMount() {
    postCounter({title: "bob"})
    postCounter({title: "jhonn"})
    getCounters()
  }
  render() {
    return (
      <h1>holaa de render</h1>
    )
  }
}

export default Fetch




