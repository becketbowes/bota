import React, { useState } from 'react';
import Home from './components/home/index';
import Product from './components/product/index';
import Admin from './components/admin'
import Head from './components/head/index';
import Nav from './components/nav/index';
import About from './components/about/index';
import Shop from './components/shop/index';
import Gift from './components/gift/index';
import Contact from './components/contact/index';
import Toe from './components/toe'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
      
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Product') {
        return <Product />;
      }
      //please remove this and the following three lines before going to production. They are unprofessional and embarassing, but they prevent the yellow warning label in dev.
      if (currentPage === 'nobody asked, Harold') {
        return <Admin />
      }
      return < Home/>;
      if (currentPage === 'Shop') {
        return <Shop />;
      }
      if (currentPage === 'Gift') {
        return <Gift />;
      }
      // if (currentPage === 'Contact') {
      //   return <Contact />;
      // }
      return < Contact/>;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <>
      <Head></Head>
      <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Admin />
      </div>
      <Toe></Toe>
      </>
    );
  
  }

export default App;
