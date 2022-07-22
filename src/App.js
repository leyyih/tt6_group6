import './App.css';
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Currency from './components/Currency';
import Transactions from './components/Transactions'

function App() {

  useEffect(() => {
    const fetchWallets = async () => {
      const res = await fetch ('http://127.0.0.1:8000/api/')
      const data = await res.json()

      console.log(data)
    }

    fetchWallets()
  }, [])
  // const [currency,setCurrency] = useState([]);
  // const currency_list = [
  //   {
  //     "id": 1,
  //     "wallet_id": 1,
  //     "currency": "SGD",
  //     "amount": 4294.50
  //   },
  //   {
  //     "id": 2,
  //     "wallet_id": 1,
  //     "currency": "CAD",
  //     "amount": 5687.65
  //   },
  //   {
  //     "id": 3,
  //     "wallet_id": 1,
  //     "currency": "CNH",
  //     "amount": 6063.14
  //   },
  //   {
  //     "id": 4,
  //     "wallet_id": 1,
  //     "currency": "EUR",
  //     "amount": 8089.82
  //   },
  //   {
  //     "id": 5,
  //     "wallet_id": 1,
  //     "currency": "HKD",
  //     "amount": 7862.36
  //   },
  //   {
  //     "id": 6,
  //     "wallet_id": 1,
  //     "currency": "JPY",
  //     "amount": 5759.15
  //   },
  //   {
  //     "id": 7,
  //     "wallet_id": 1,
  //     "currency": "NZD",
  //     "amount": 6943.26
  //   },
  //   {
  //     "id": 8,
  //     "wallet_id": 1,
  //     "currency": "NOK",
  //     "amount": 4038.10
  //   },
  //   {
  //     "id": 9,
  //     "wallet_id": 1,
  //     "currency": "GBP",
  //     "amount": 8287.33
  //   },
  //   {
  //     "id": 10,
  //     "wallet_id": 1,
  //     "currency": "SEK",
  //     "amount": 5126.40
  //   },
  //   {
  //     "id": 11,
  //     "wallet_id": 1,
  //     "currency": "THB",
  //     "amount": 147.62
  //   },
  //   {
  //     "id": 12,
  //     "wallet_id": 1,
  //     "currency": "USD",
  //     "amount": 7331.77
  //   },
  //   {
  //     "id": 13,
  //     "wallet_id": 2,
  //     "currency": "SGD",
  //     "amount": 485.19
  //   },
  //   {
  //     "id": 14,
  //     "wallet_id": 2,
  //     "currency": "CAD",
  //     "amount": 2634.58
  //   },
  //   {
  //     "id": 15,
  //     "wallet_id": 2,
  //     "currency": "CNH",
  //     "amount": 3893.29
  //   },
  //   {
  //     "id": 16,
  //     "wallet_id": 2,
  //     "currency": "EUR",
  //     "amount": 3887.15
  //   },
  //   {
  //     "id": 17,
  //     "wallet_id": 2,
  //     "currency": "HKD",
  //     "amount": 4065.34
  //   },
  //   {
  //     "id": 18,
  //     "wallet_id": 2,
  //     "currency": "JPY",
  //     "amount": 1702.47
  //   },
  //   {
  //     "id": 19,
  //     "wallet_id": 2,
  //     "currency": "NZD",
  //     "amount": 3299.38
  //   },
  //   {
  //     "id": 20,
  //     "wallet_id": 2,
  //     "currency": "NOK",
  //     "amount": 7681.32
  //   },
  //   {
  //     "id": 21,
  //     "wallet_id": 2,
  //     "currency": "GBP",
  //     "amount": 3720.37
  //   },
  //   {
  //     "id": 22,
  //     "wallet_id": 2,
  //     "currency": "SEK",
  //     "amount": 4511.50
  //   },
  //   {
  //     "id": 23,
  //     "wallet_id": 2,
  //     "currency": "THB",
  //     "amount": 6216.60
  //   },
  //   {
  //     "id": 24,
  //     "wallet_id": 2,
  //     "currency": "USD",
  //     "amount": 9103.66
  //   }
  // ]
  // setCurrency(currency_list)
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
      <Header></Header>
      <Dashboard></Dashboard>
      <Currency></Currency>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
