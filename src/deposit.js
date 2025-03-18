import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

export default function Deposit({ total, setTotal, addTransaction }) {
  const [deposit, setDeposit] = useState(10000);
  const maxAmount = 10000; // Maximum deposit amount

  function changeHandler(val) {
    if (val > maxAmount) {
      alert(`You cannot enter more than ₹${maxAmount}`);
      setDeposit(maxAmount);
    } else {
      setDeposit(val);
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const updatedTotal = total + deposit;
    setTotal(updatedTotal);
    addTransaction('deposit', deposit); // Call addTransaction
    alert(`Amount ${deposit} deposited successfully!`);
  }

  return (
    <div id="form-div">
      <>
        <h3>Account Balance: {total}</h3>
        <Card>
          <Form className="form-inline" onSubmit={submitHandler}>
            <h1>Deposit</h1>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={deposit}
                onChange={(e) => changeHandler(Number(e.target.value))}
              />
            </Form.Group>
            <Button
              type="submit"
              className="create-btn"
              style={{ backgroundColor: '#FFA500', color: 'white', borderColor: '#9d75cf' }}
            >
              Deposit ₹{deposit}
            </Button>
          </Form>
        </Card>
      </>
    </div>
  );
}