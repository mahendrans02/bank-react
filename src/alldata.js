import React, { useContext } from 'react';
import { Table, Card } from 'react-bootstrap';
import del from './images/lavender.png';
import userContext from './context';

export default function AllData({ total }) {
  const { users, setUsers } = useContext(userContext);

  return (
    <div className="table-parent">
      <h2 style={{ color: '#FFA500', textAlign: 'center' }}>All Data</h2>
      <Card style={{ border: "none" }}>
        <Table bordered hover responsive className="custom-table">
          <thead>
            <tr>
              {/* <th style={{ textAlign: "center" }}>Id</th> */}
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Email</th>
              {/* <th style={{ textAlign: "center" }}>Password</th> */}
              <th style={{ textAlign: "center" }}>AccountNumber</th>
              <th style={{ textAlign: "center" }}>Balance</th>

            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                {/* <td>{user.id}</td> */}
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountNumber}</td>
                {/* <td>{user.password}</td> */}
                <td>{total}</td> {/* Display the total account balance for each user */}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}
