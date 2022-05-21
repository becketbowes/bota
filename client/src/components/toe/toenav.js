import React from 'react';

//const handlePageChange = (page) => setCurrentPage(page);

function Toenav({ toenav }) {
  if (!toenav) {
    return null
  }
  return (
      <div className='toenavmenu'>
        <ul>
          <li className="link">
            <span href='#Contact' onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                Contact
              </span>
          </li>
          <li>
            <span href='#FAQ' onClick={() => handlePageChange('FAQ')}
            className={currentPage === 'FAQ' ? 'nav-link active' : 'nav-link'}> 
                FAQ
            </span>
          </li>
          <li>
            <span href='#Privacy' onClick={() => handlePageChange('Privacy')}
            className={currentPage === 'Privacy' ? 'nav-link active' : 'nav-link'}> 
                Privacy Policy
            </span>
          </li>
          <li>
            <span href='https://github.com/becketbowes/bota'>
              &copy; Group2Designs 
            </span>
          </li>
        </ul>
      </div>
  );
}

export default Toenav;