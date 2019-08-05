import React, {Component} from 'react';
import {getCounters, postCounter, deleteCounter, incrementCounter, decrementCounter} from '../api/counters'
import InputCounter from '../components/InputCounter'
import Counter from '../components/Counter'
import './CounterContainer.css'


class CountersContainer extends Component {
  state = {
    loading: false,
    counters: []
  }
  componentDidMount() {
    this.fetchCounters()
  }
  deleteCounterHandler = (id) => {
    const counter = {
      id
    }
    deleteCounter(counter)
    .then(res => {
      this.fetchCounters()
    })

  }
  incrementCounterHandler = (id) => {
    const counter = {
      id
    }
    incrementCounter(counter)
    .then(res => {
      this.fetchCounters()
    })
  }
  decrementCounterHandler = (id) => {
    const counter = {
      id
    }
    decrementCounter(counter)
    .then(res => {
      this.fetchCounters()
    })
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
  totalCount = () => {
    let totalCounter = 0;
    this.state.counters.length > 0 ?
      totalCounter = this.state.counters
        .map(e => e.count)
        .reduce((acc, count) => acc + count)
      :
      totalCounter = 0;
    return totalCounter;
  }

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-container__title">Counter App</h1>
        <InputCounter refreshList={this.fetchCounters} postCounter={postCounter}></InputCounter>
          { this.state.counters.map(counter =>
            <Counter
              deleteCounter={ () => this.deleteCounterHandler(counter.id)}
              incrementCounter={() => this.incrementCounterHandler(counter.id)}
              decrementCounter={() => this.decrementCounterHandler(counter.id)}
              counterTitle={ counter.title }
              counterId={ counter.id }
              counterCount={ counter.count}
              key={ counter.id }
            ></Counter>
          )}
        <div className="counter-container__total">
          <span>Total Count: {this.totalCount()}</span>
        </div>
      </div>
    )
  }
}
export default CountersContainer