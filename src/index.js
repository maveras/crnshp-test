import React from 'react';
import ReactDOM from 'react-dom';
import Fetch from './fetch'
const App = () => (
  <div>
     <h1>Hello world!!</h1>
     <Fetch></Fetch>
  </div>
)
ReactDOM.render(<App/>, document.getElementById('root'));