

const Wallet = ({ wallet }) => {
  return (
    <div className = 'wallet'>
        <h3>{wallet.wallet_id}</h3>
        <p>{wallet.currency}</p>
        <p>{wallet.amount}</p>
    </div>
  )
}

export default Wallet