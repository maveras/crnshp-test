import React, {Component} from 'react';
import {getCounters, postCounter, deleteCounter, incrementCounter, decrementCounter} from '../api/counters'
import InputCounter from '../components/InputCounter'
import Counter from '../components/Counter'
import SortBySelect from '../components/SortBySelect/SortBySelect'
import './CounterContainer.css'


class CountersContainer extends Component {
  state = {
    loading: false,
    counters: [],
    sortedBy: 'title'
  }
  componentDidMount() {
    console.log('mount??')
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
      this.srtBy(this.state.sortedBy)
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
  srtBy = (type) => {
    console.log('el type', type)
    if (type === 'count') {
      const orderByCount = this.state.counters
        .sort((a, b) => a.count - b.count)
      this.setState({counters: orderByCount, sortedBy: type })
    } else {
      const orderByName = this.state.counters
        .sort((a, b) => a.title.localeCompare(b.title))
      this.setState({counters: orderByName, sortedBy: type})
    }

  }

  render() {
    return (
      <div className="counter-container">
        <h1 className="counter-container__title">Counter App</h1>
        <InputCounter refreshList={this.fetchCounters} postCounter={postCounter}></InputCounter>
        <div className="counter-list">
          <div className="counter-list__controls">
            <SortBySelect sortBy={(e) => this.srtBy(e)}></SortBySelect>
          </div>
          <div className="counter-list__items" >
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
        </div>
        <div className="counter-container__total">
          <span>Total Count: {this.totalCount()}</span>
        </div>
      </div>
    )
  }
}
export default CountersContainer