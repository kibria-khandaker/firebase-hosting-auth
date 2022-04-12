import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BootstrapNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='text-info fw-bold' href="#home">Painting Seller</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                    <Nav className='nav-list'>
                        <Link to="/">Home</Link>
                        <Link to="/shop"> Shop </Link>
                        <Link to="/about"> about </Link>
                        <Link to="/login"> Login </Link>
                        <Link to="/discount" className='text-info'> Get Discount </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BootstrapNav;