import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recapture, setRecapture] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [error, setError] = useState("");

  // Generate a random account number
  const generateAccountNumber = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Signup function
  const handleSignup = () => {
    if (!name || !username || !email || !password || !recapture) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    if (recapture !== "I am not a robot") {
      setError("Please complete the recapture.");
      return;
    }

    const accountNumber = generateAccountNumber();
    const user = {
      name,
      username,
      email,
      password,
      accountNumber,
    };

    // Save user data to local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    setError("Signup successful! Please login.");
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRecapture("");
  };

  // Login function
  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === loginUsername && u.password === loginPassword
    );

    if (user) {
      setLoggedInUser(user);
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  };

  // Admin login function
  const handleAdminLogin = () => {
    if (adminUsername === "admin" && adminPassword === "admin123") {
      setIsAdminLoggedIn(true);
      setError("");
    } else {
      setError("Invalid admin credentials.");
    }
  };

  // Logout function
  const handleLogout = () => {
    setLoggedInUser(null);
    setIsAdminLoggedIn(false);
  };

  return (
    <div>
      <h1>React Signup, Login, and Admin Dashboard</h1>

      {!loggedInUser && !isAdminLoggedIn ? (
        <>
          {/* Signup Form */}
          <div>
            <h2>Signup</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type 'I am not a robot'"
              value={recapture}
              onChange={(e) => setRecapture(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
          </div>

          {/* Login Form */}
          <div>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>

          {/* Admin Login Form */}
          <div>
            <h2>Admin Login</h2>
            <input
              type="text"
              placeholder="Admin Username"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
            <button onClick={handleAdminLogin}>Admin Login</button>
          </div>
        </>
      ) : (
        <>
          {/* User Dashboard */}
          {loggedInUser && (
            <div>
              <h2>Welcome, {loggedInUser.name}</h2>
              <p>Account Number: {loggedInUser.accountNumber}</p>
              <p>Email: {loggedInUser.email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}

          {/* Admin Dashboard */}
          {isAdminLoggedIn && (
            <div>
              <h2>Admin Dashboard</h2>
              <button onClick={handleLogout}>Logout</button>
              <table border="1">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Account Number</th>
                  </tr>
                </thead>
                <tbody>
                  {JSON.parse(localStorage.getItem("users"))?.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.accountNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default App;