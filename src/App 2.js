import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Home from './components/home/index';
import Product from './components/product/index';
import Nav from './components/nav/index'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Product') {
        return <Product />;
      }
      // if (currentPage === 'Portfolio') {
      //   return <Portfolio />;
      // }
      // if (currentPage === 'Resume') {
      //     return <Resume />;
      //   }
      return < Home/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }

export default App;
