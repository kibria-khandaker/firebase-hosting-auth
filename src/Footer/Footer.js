import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className='d-flex  justify-content-center gap-2 my-3'>
                <Button onClick={() => navigate('/')} variant="transparent text-light"> Back Home </Button>
                <Button onClick={() => navigate('/shop')} variant="transparent text-light"> Back Shop </Button>
            </div>

            <div className='footer-text'>
                <p className='text-info'> Painting Seller &nbsp; </p>
                <p> All Copyright &copy; {year} </p>
            </div>
        </footer>
    );
};

export default Footer;