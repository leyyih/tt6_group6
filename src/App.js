import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Currency from './components/Currency';
import Login from './components/Login';
import { useState} from 'react'

function App() {
  const login = false
  if(!login){
      return (<div className="App">
              <Login></Login>
              </div>
              )
  }
  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
      <Currency></Currency>
    </div>
  );
}

export default App;
