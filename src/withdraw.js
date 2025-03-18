import { useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';

export default function Withdraw({ total, setTotal, addTransaction }) {
  const [withdraw, setWithdraw] = useState(10000);
  const maxAmount = 10000; // Maximum withdraw amount

  function changeHandler(val) {
    if (val > maxAmount) {
      alert(`You cannot enter more than ₹${maxAmount}`);
      setWithdraw(maxAmount);
    } else {
      setWithdraw(val);
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    if (isNaN(withdraw) || withdraw <= 0) {
      alert('Please enter a valid amount.');
    } else if (withdraw > total) {
      alert('Insufficient account balance!');
    } else {
      const updatedTotal = total - withdraw;
      setTotal(updatedTotal);
      addTransaction('withdraw', withdraw); // Call addTransaction
      alert(`Amount ${withdraw} withdrawn successfully!`);
    }
  }

  return (
    <div id="form-div">
      <>
        <h3>Account Balance: {total}</h3>
        <Card>
          <Form className="form-inline" onSubmit={submitHandler}>
            <h1>Withdraw</h1>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                value={withdraw}
                onChange={(e) => changeHandler(Number(e.target.value))}
              />
            </Form.Group>
            <Button
              type="submit"
              className="create-btn"
              style={{ backgroundColor: '#FFA500', color: 'white', borderColor: '#9d75cf' }}
            >
              Withdraw ₹{withdraw}
            </Button>
          </Form>
        </Card>
      </>
    </div>
  );
}