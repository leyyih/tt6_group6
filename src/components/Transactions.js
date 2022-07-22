import Transaction from "./Transaction";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Transactions = ({ transactions }) => {
    return (
        < Container className='mt-4' >
            <h3>Transactions</h3>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <Transaction
                            key={transaction["id"]}
                            transaction={transaction} />
                    ))}
                </tbody>
            </Table >

        </Container >
    )
}

export default Transactions