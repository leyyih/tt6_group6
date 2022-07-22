import './App.css';
<<<<<<< Updated upstream
=======
import { useState } from 'react'
import Header from './components/Header'
import Transactions from './components/Transactions'
>>>>>>> Stashed changes

function App() {
  const [transactions, setTransactions] = useState(
    [
      {
        "id": 1,
        "wallet_id": 1,
        "debit_id": 4,
        "debit_currency": "EUR",
        "debit_amount": 97.19,
        "credit_id": 8,
        "credit_currency": "NOK",
        "credit_amount": 1000.00,
        "description": "",
        "created_at": "2021-11-04 16:00:00",
        "created_by": "Jacky",
        "updated_at": "2021-11-06 16:00:00",
        "updated_by": "Jacky"
      },
      {
        "id": 2,
        "wallet_id": 2,
        "debit_id": 13,
        "debit_currency": "SGD",
        "debit_amount": 102.53,
        "credit_id": 18,
        "credit_currency": "JPY",
        "credit_amount": 10000.00,
        "description": "allowance for winter school",
        "created_at": "2021-11-05 16:00:00",
        "created_by": "Jane",
        "updated_at": "2021-11-05 16:00:00",
        "updated_by": null
      },
      {
        "id": 3,
        "wallet_id": 2,
        "debit_id": 20,
        "debit_currency": "NOK",
        "debit_amount": 250.00,
        "credit_id": 15,
        "credit_currency": "CNH",
        "credit_amount": 164.13,
        "description": "trip to china",
        "created_at": "2021-11-05 16:00:00",
        "created_by": "Jane",
        "updated_at": "2021-11-06 16:00:00",
        "updated_by": "Jane"
      },
      {
        "id": 4,
        "wallet_id": 1,
        "debit_id": 6,
        "debit_currency": "JPY",
        "debit_amount": 685577.82,
        "credit_id": 12,
        "credit_currency": "USD",
        "credit_amount": 5000.00,
        "description": "to transfer to securities account wallet",
        "created_at": "2021-11-06 16:00:00",
        "created_by": "Jacky",
        "updated_at": "2021-11-06 16:00:00",
        "updated_by": null
      }
    ]
  )

  return (
    <div className="App">
<<<<<<< Updated upstream
  <h1>Hello World</h1>
=======
      <Header></Header>
      <Transactions transactions={transactions} />
>>>>>>> Stashed changes
    </div >
  );
}

export default App;
