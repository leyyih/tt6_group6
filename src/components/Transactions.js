import Table from 'react-bootstrap/Table';
import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Debit</th>
                    <th>Credit</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <Transaction key={transaction["id"]} transaction={transaction} />
                ))}
            </tbody>
        </Table>
    )
}

export default Transactions