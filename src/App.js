import React, { useState } from 'react';
import Home from './components/home/index';
import Product from './components/product/index';
import Head from './components/head';
import Admin from './components/admin'

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
        {/* {renderPage()} */}
        <Admin />
      </div>
    );
  }

export default App;
