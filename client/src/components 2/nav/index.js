import React from 'react';


function Nav({ currentPage, handlePageChange }) {


  return (
    <header className="flex-row px-1">
      <h2>
        {/* <a data-testid="link" href="/">Bota</a> */}
      </h2>
      <div>
        <ul className="flex-row">
          <li className="About">
          <span href='#About' onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
              About
            </span>
          </li>
          <li className="Contact">
          <span href='#contact' onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Series
            </span>
          </li>
          <li className="Resume">
            <span href='#resume' onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Shop
            </span>
          </li>
       
        </ul>
      </div>
    </header>
  );
}

export default Nav;