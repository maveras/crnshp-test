import React from 'react';
import ReactDOM from 'react-dom';
import CounterContainer from './containers/CountersContainer'
const App = () => (
  <div>
    <CounterContainer></CounterContainer>
  </div>
)
ReactDOM.render(<App/>, document.getElementById('root'));