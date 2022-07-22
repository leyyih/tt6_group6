import Transaction from "./Transaction";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
const Transactions = ({ transactions }) => {
    return (
        <Container className='mt-4'>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <Transaction key={transaction["id"]} transaction={transaction} />
                    ))}
                </tbody>
            </Table >

        </Container>
    )
}

export default Transactions