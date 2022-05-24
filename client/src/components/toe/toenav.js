import { useState } from 'react';
import PrivacyModal from '../privacy/index';

{/*function Toenav({ toenav }) {
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
            <span href='#Social' onClick={() => handlePageChange('Social')}
            className={currentPage === 'Social' ? 'nav-link active' : 'nav-link'}> 
                Social
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
} */}

function Toenav({ toenav }) {
  const [openModal, setOpenModal] = useState(false)
  if (!toenav) {
    return null
  }
  return (
    <nav className="footer-nav">
      <li>
        <a className="footer-link">Contact</a>
      </li>
      <li>
        <a className="footer-link">
          FAQ
        </a>
      </li>
      <li>
        <a className="footer-link">
          Social
        </a>
      </li>
      <li>
        <a className="footer-link openModal" onClick={() => {
          setOpenModal(true);
          }}>Privacy Policy</a>
        {openModal &&<PrivacyModal closeModal={setOpenModal} />}
      </li>
      <li>
        <a href="https://github.com/becketbowes/bota" className="footer-link">
          &copy; Group2Designs 
        </a>
      </li>
    </nav>
  )
}

export default Toenav;