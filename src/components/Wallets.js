import Wallet from './Wallet'

const wallets = [
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
]

const Wallets = () => {
  return (
    <>
        {wallets.map((wallet) => (
            <h3>{wallet.id}</h3>
        ))}
    </>
  )
}

export default Wallets