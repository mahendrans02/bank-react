import React, { useState, useEffect } from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminHome() {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve all users from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    // Retrieve transaction history
    const storedTransactions = JSON.parse(localStorage.getItem("transactions")) || [];
    setTransactions(storedTransactions);
  }, []);

  function handleLogout() {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
  }

  return (
    <Card className="p-4">
      <h1>Admin Dashboard</h1>
      <Button onClick={handleLogout} variant="danger" className="mb-3">Logout</Button>

      {/* User Details Table */}
      <h3>User Details</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Account Number</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountNumber}</td>
                <td>₹{user.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Transactions Table */}
      <h3>Transaction History</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((txn, index) => (
              <tr key={index}>
                <td>{txn.email}</td>
                <td>{txn.type}</td>
                <td>₹{txn.amount}</td>
                <td>{txn.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">No transactions found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
}
