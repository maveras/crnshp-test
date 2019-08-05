import React, {Component} from 'react';
import {getCounters} from '../api/counters'
class CountersContainer extends Component {
  state = {
    loading: false,
    counters: []
  }
  componentDidMount() {
    this.fetchCounters()
  }
  fetchCounters = () => {
    this.setState({ fetchingCounters: true })
    getCounters()
    .then(res => {
      console.log(res)
      this.setState({
        fetchingCounters: false,
        counters: res
      })
    })
  }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
          {this.state.counters.map(counter =>
            <p>{counter.title}</p>
          )}
      </div>
    )
  }
}
export default CountersContainer