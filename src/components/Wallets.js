import Wallet from './Wallet'
const Wallets = ({ wallets }) => {
  return (
    <>
        {wallets.map((wallet) => (
            <Wallet key={wallet.id} wallet={wallet}/>
        ))}
    </>
  )
}

export default Wallets