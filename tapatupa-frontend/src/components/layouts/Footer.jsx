import React from 'react';
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="admin-footer">
            <p>&copy; {new Date().getFullYear()} TAPATUPA Admin Panel</p>
        </footer>
    );
};

export default Footer;
