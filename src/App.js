import React, { useState } from 'react';
import Home from './components/home/index';
import Product from './components/product/index';
import Head from './components/head';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
      
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Product') {
        return <Product />;
      }
      return < Home/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Head currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }

export default App;
