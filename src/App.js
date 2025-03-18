import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './navbar';
import Create from './create';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';
import userContext from './context';
import Home from './home';
import Login from './Login';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import History from './history';
import TransactionHistory from './history';

function App() {
  const [total, setTotal] = useState(0); // State for account balance
  const [users, setUsers] = useState([]); // State for users
  const [loggedIn, setLoggedIn] = useState(false); // State for login status
  const [history, setHistory] = useState([]); // State for transaction history

  // Function to add a new user
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Function to add a new transaction to the history
  const addTransaction = (type, amount) => {
    const newTransaction = {
      type,
      amount,
      date: new Date().toLocaleString(), // Add current date and time
    };
    setHistory((prevHistory) => {
      // Keep only the last 10 transactions
      const updatedHistory = [newTransaction, ...prevHistory].slice(0, 10);
      return updatedHistory;
    });
  };

  return (
    <userContext.Provider value={{ users, setTotal, addUser, loggedIn, setLoggedIn }}>
      <HashRouter>
        <>
          <MyNavbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/deposit"
              element={<Deposit total={total} setTotal={setTotal} addTransaction={addTransaction} />}
            />
            <Route
              path="/withdraw"
              element={<Withdraw total={total} setTotal={setTotal} addTransaction={addTransaction} />}
            />
            <Route path="/alldata" element={<AllData total={total} />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/history" element={<History />} />
            <Route
              path="/history"
              element={<TransactionHistory history={history} />}
            />
          </Routes>
        </>
      </HashRouter>
    </userContext.Provider>
  );
}

export default App;