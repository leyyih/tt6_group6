import './App.css';
import { useState } from 'react'
import Header from './components/Header'
import Wallets from './components/Wallets'

function App() {
  const [wallets, setWallet] = useState([
    {
      "id": 1,
      "wallet_id": 1,
      "currency": "SGD",
      "amount": 4294.50,
    },
    {
      "id": 2,
      "wallet_id": 1,
      "currency": "CAD",
      "amount": 5687.65,
    },
    {
      "id": 3,
      "wallet_id": 1,
      "currency": "CNH",
      "amount": 6063.14,
    },
])
  return (
    <div className="App">
      <Header></Header>
      <Wallets wallets={wallets}/>
    </div>
  );
}

export default App;
