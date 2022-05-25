import React from 'react';


function Nav({ currentPage, handlePageChange, nav }) {
  if (!nav) {
    return null
  }
  return (
      <div className='navbarmain'>
        <ul>
        <li className="link">
            <span href='#Login' onClick={() => handlePageChange('Login')}
              className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}>
                Login
              </span>
          </li>
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