import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
  
   
      <div className='navmenu'>
  
        <ul>
          <li className="link">
            <span href='#About' onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                About
              </span>
          </li>
          <li className="link">
            <span href='#Product' onClick={() => handlePageChange('Product')}
              className={currentPage === 'Product' ? 'nav-link active' : 'nav-link'}>
                Products
              </span>
          </li>
          <li className="link">
            <span href='#Shop' onClick={() => handlePageChange('Shop')}
              className={currentPage === 'Shop' ? 'nav-link active' : 'nav-link'}>
                Shop
              </span>
          </li>
          <li className="link">
            <span href='#Gift' onClick={() => handlePageChange('Gift')}
              className={currentPage === 'Gift' ? 'nav-link active' : 'nav-link'}>
                Gift
              </span>
          </li>
          <li className="link">
            <span href='#Contact' onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </span>
          </li>
        </ul>

      </div>
  
  );
}

export default Nav;