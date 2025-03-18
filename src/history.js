import React from 'react';

export default function TransactionHistory({ history = [] }) {
    // Format amount to always show two decimal places
    const formatAmount = (amount) => {
        return `₹${parseFloat(amount).toFixed(2)}`;
    };

    // Format date to a more readable format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-IN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
        <div>
            <h3>Transaction History (Last 10)</h3>
            {history.length === 0 ? (
                <p>No transactions found.</p>
            ) : (
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Type</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Amount</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date & Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((transaction, index) => (
                                <tr
                                    key={index}
                                    style={{
                                        border: '1px solid #ddd',
                                        backgroundColor: transaction.type === 'deposit' ? '#e6f4ea' : '#ffe6e6',
                                    }}
                                >
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {transaction.type === 'deposit' ? 'Deposit' : 'Withdraw'}
                                    </td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {formatAmount(transaction.amount)}
                                    </td>
                                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                                        {formatDate(transaction.date)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}