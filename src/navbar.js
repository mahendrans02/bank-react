import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import userContext from './context'; // Import userContext

export default function MyNavbar() {
  const style = { color: '#fff' };
  const { loggedIn, setLoggedIn } = useContext(userContext); // Use useContext to access loggedIn and setLoggedIn from context

  const handleLogOut = () => {
    // Perform logout actions here
    setLoggedIn(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#FFA500',
       boxShadow: "5px 5px 20px gray",
         zIndex: 300 ,
          position: 'sticky',
           top:3,
            left: 1,
             right: 1,
              margin: 'auto',
               width: '100%',
                height: '4%',
                 padding: '0% 0%' }}>
        <Container>
          <Navbar.Brand href="#" style={style}><h3>Bank Of React</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='mb-3 justify-content-end'>
            <Nav className='mt-4' sticky="top">
              <Nav.Item>
                <Nav.Link as={Link} to="/home"  style={style}>Home</Nav.Link>
              </Nav.Item>
              {!loggedIn && (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/create" style={style}>Create</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/login" style={style}>Login</Nav.Link>
                  </Nav.Item>
                   <Nav.Item>
                    <Nav.Link as={Link} to="/adminlogin" style={style}>Admin Login</Nav.Link>
                  </Nav.Item>
                  
                </>
              )}
              {loggedIn && (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/deposit" style={style}>Deposit</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/withdraw" style={style}>Withdraw</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/history" style={style}>History</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/login" onClick={handleLogOut} style={style}>Logout</Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
