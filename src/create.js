import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import userContext from "./context";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { addUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      localStorage.removeItem(`${email}-balance`);
    };
  }, [email]);

  function handleInputChange(e, setValue, pattern, setError, errorMessage) {
    const value = e.target.value;
    setValue(value);
    if (!pattern.test(value) && value !== "") {
      setError(errorMessage);
    } else {
      setError("");
    }
  }

  function generateAccountNumber() {
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!loggedIn) {
      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      // Check if email is already registered
      const emailExists = existingUsers.some((user) => user.email === email);

      if (emailExists) {
        setEmailError("Email is already registered. Please use a different email.");
        return;
      }

      if (name !== "" && email !== "" && password.length >= 8) {
        const newUser = {
          name,
          email,
          password,
          amount: 0,
          accountNumber: generateAccountNumber(),
        };

        // Add user to the localStorage
        existingUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));

        addUser(newUser);
        setAccountNumber(newUser.accountNumber);
        alert("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
        setLoggedIn(true);
        navigate("/login", { state: { email, password } });
      } else {
        if (name === "") setNameError("Please enter your name");
        if (email === "") setEmailError("Please enter your email");
        if (password.length < 8) setPasswordError("Password must be at least 8 characters");
      }
    }
  }

  return (
    <>
      {!loggedIn && (
        <div
          style={{
            backgroundImage: "url('https://example.com/your-background-image.jpg')", // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card style={{ border: "none", backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px" }}>
            <div id="form-div">
              <Form className="form-inline" onSubmit={submitHandler}>
                <h1>Create Account</h1>

                {/* Name Input */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setName,
                        /^[A-Za-z\s]+$/,
                        setNameError,
                        "Only letters are allowed"
                      )
                    }
                    autoComplete="off"
                  />
                  {nameError && <small style={{ color: "red" }}>{nameError}</small>}
                </Form.Group>

                {/* Email Input */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEmail,
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        setEmailError,
                        "Invalid email format"
                      )
                    }
                    autoComplete="off"
                  />
                  {emailError && <small style={{ color: "red" }}>{emailError}</small>}
                </Form.Group>

                {/* Password Input */}
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setPassword,
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        setPasswordError,
                        "Password must be at least 8 characters, include uppercase, lowercase, number, and special character."
                      )
                    }
                    autoComplete="off"
                  />
                  {passwordError && <small style={{ color: "red" }}>{passwordError}</small>}
                </Form.Group>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="create-btn"
                  style={{
                    backgroundColor: "#FFA500",
                    color: "white",
                    borderColor: "#9d75cf",
                  }}
                >
                  Create Account
                </Button>

                {/* Display Generated Account Number */}
                {accountNumber && <p>Generated Account Number: {accountNumber}</p>}
              </Form>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}