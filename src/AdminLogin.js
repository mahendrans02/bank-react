import React, { useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const adminCredentials = {
    email: "admin123@gmail.com",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === adminCredentials.email && password === adminCredentials.password) {
      localStorage.setItem("adminLoggedIn", "true"); // Store session
      navigate("/admin"); // Redirect to Admin Home
    } else {
      setError("Invalid admin credentials!");
    }
  };

  return (
    <Card className="p-4">
      <h1>Admin Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Button type="submit" className="w-100" variant="success">
          Login
        </Button>
      </Form>
    </Card>
  );
}
