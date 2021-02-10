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
import './App.css';

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
          <div className='body'>
            <p>BalanceList</p>
            <div className='container'>
                {this.state.Balancelist.map(item => (
                     <div key={item.id} className='box'>
                        <p>{item.name}</p>
                        <p>{item.event_date}</p>
                        <p>{item.event_name.name}</p>
                        <p>{item.price}yen</p>
                        <p>{item.is_paid === 1?'支払い済み':'未払い'}</p>
                     </div>
                ))}
            </div>
          </div>
        );
    }
}
export default App;