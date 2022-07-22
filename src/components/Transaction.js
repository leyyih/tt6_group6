import Table from 'react-bootstrap/Table';

const Transaction = ({ transaction }) => {
    return (
        <tr>
            <td>
                <h3>{transaction["debit_currency"]}</h3>
                <p>${transaction["debit_amount"]}</p>
            </td>
            <td><h3>{transaction["credit_currency"]}</h3>
                <p>${transaction["credit_amount"]}</p>
            </td>
        </tr>
    )
}

export default Transaction