import { useState } from 'react';
import PrivacyModal from '../privacy/index';
import Instagram from '../../assets/img/IG_icon.png';



function Toenav({ currentPage, handlePageChange, toenav }) {

  const [openModal, setOpenModal] = useState(false)


  if (!toenav) {
    return null
  }
  return (
    <nav className="footer-nav">
      <li className='footer-item'>
        <a href='#Contact' onClick={() => handlePageChange('Contact')}
        className={currentPage === 'Contact' ? 'footer-link active' : 'footer-link'}>
          Contact</a>
      </li>
      <li className='footer-item'>
        <a href='#FAQ' onClick={() => handlePageChange('FAQ')}
        className={currentPage === 'FAQ' ? 'footer-link active' : 'footer-link'} >
          FAQ
        </a>
      </li>
      <li className='footer-item'>
        <a href="https://www.instagram.com/igbosupply/">
          <img src={Instagram} alt="instagram-logo" className='ig-icon' />
        </a>
      </li>
      <li className='footer-item'>
        <a className="footer-link openModal" onClick={() => {
          setOpenModal(true);
          }}>Privacy Policy</a>
        {openModal &&<PrivacyModal closeModal={setOpenModal} />}
      </li>
      <li className='footer-item'>
        <a href="https://github.com/becketbowes/bota">
          &copy; Group2Designs 
        </a>
      </li>
    </nav>
  )
}

export default Toenav;