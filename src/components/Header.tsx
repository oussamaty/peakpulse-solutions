import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </header>
  );
}

export default Header;