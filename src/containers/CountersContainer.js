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
  render() {
    return (
      <div className="CounterContainer">
        <h1 className="CounterContainer__title">Counter App</h1>
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
      </div>
    )
  }
}
export default CountersContainer