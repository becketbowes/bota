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
      //please remove this and the following three lines before going to production. They are unprofessional and embarassing, but they prevent the yellow warning label in dev.
      if (currentPage === 'nobody asked, Harold') {
        return <Admin />
      }
      return < Home/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        <Head currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        {/* <Admin /> */}
      </div>
    );
  }

export default App;
