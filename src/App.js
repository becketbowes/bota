import React, { useState } from 'react';
import Home from './components/home/index';
import Product from './components/product/index';
import Head from './components/head/index';
import Nav from './components/nav/index';
import About from './components/about/index';
import Shop from './components/shop/index';
import Gift from './components/gift/index';
import Contact from './components/contact/index';



function App() {
  // const [currentPage, setCurrentPage] = useState('Home');

  // const renderPage = () => {
      
  //     if (currentPage === 'About') {
  //       return <About />;
  //     }
  //     if (currentPage === 'Product') {
  //       return <Product />;
  //     }
  //     if (currentPage === 'Shop') {
  //       return <Shop />;
  //     }
  //     if (currentPage === 'Gift') {
  //       return <Gift />;
  //     }
  //     // if (currentPage === 'Contact') {
  //     //   return <Contact />;
  //     // }
  //     return < Contact/>;
  //   };

  //   const handlePageChange = (page) => setCurrentPage(page);

    return (
      <>
      <Head></Head>
      {/* <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div> */}
      </>
    );
  
  }

export default App;
