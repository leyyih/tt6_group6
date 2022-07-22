import Transaction from "./Transaction";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

const Transactions = ({ transactions }) => {
    const state = {
        originalResults: [],
        displayResults: []
    };

    const filterResults = (query, results) => {
        return results.filter(transaction => {
            // const lastName = employee.lastName.toLowerCase();
            // const firstName = employee["created_by"].toLowerCase();
            // const fullName = firstName + " " + lastName;
            const transactionDate = transaction["created_at"];

            return transactionDate.includes(query);
        });
    };

    const sortResults = event => {
        this.setState(prevState => {
            const { displayResults, sortOrder } = prevState;

            if (sortOrder === "descending") {
                displayResults.sort((a, b) => {
                    if (a["created_by"] > b["created_by"]) {
                        return -1;
                    }
                    return a["created_by"] > b["created_by"] ? 1 : 0;
                });
            } else {
                displayResults.sort((a, b) => {
                    if (a["created_by"] < b["created_by"]) {
                        return -1;
                    }
                    return a["created_by"] > b["created_by"] ? 1 : 0;
                });
            }

            return {
                displayResults,
                sortOrder: sortOrder === "descending" ? "ascending" : "descending"
            };
        });
    };

    let onChange = e => {
        const query = e.target.value;

        this.setState(prevState => ({
            displayResults:
                query.length > 0
                    ? this.filterResults(query, prevState.originalResults)
                    : prevState.originalResults
        }));
    };

    return (
        < Container className='mt-4' >
            <h3>Transactions</h3>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Debit</th>
                        <th>Credit</th>
                        <th>Description</th>
                        <th
                            style={{ cursor: "pointer" }}
                            onClick={this.sortResults}
                            id="date"
                        >Date
                        </th>
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