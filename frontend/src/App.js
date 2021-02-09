/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        Balancelist: []
    };

    componentDidMount() {
        this.getBalances();
    }

    getBalances() {
        axios
            .get('http://localhost:8000/api/')
            .then(res => {
                this.setState({ Balancelist: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <p>借金表</p>
                {this.state.Balancelist.map(item => (
                     <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.event_date}</p>
                        <p>{item.price}</p>
                        <p>{item.event_date}</p>
                     </div>
                ))}
            </div>
        );
    }
}

export default App;