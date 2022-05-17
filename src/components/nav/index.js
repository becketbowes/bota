import React from 'react';

function Nav({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className='navmenu'>
        <h2 className='link'>About</h2>
        <h2 className='link'>Products</h2>
        <h2 className='link'>Shop</h2>
        <h2 className='link'>Gift</h2>
        <h2 className='link'>Contact</h2>
      </div>
    </div>
  );
}

export default Nav;