import React, {Component} from 'react';
import {getCounters, postCounter} from '../api/counters'
import InputCounter from '../components/InputCounter'


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
        <InputCounter refreshList={this.fetchCounters} postCounter={postCounter}></InputCounter>
          {this.state.counters.map(counter =>
            <p>{counter.title}</p>
          )}
      </div>
    )
  }
}
export default CountersContainer