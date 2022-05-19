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
        </ul>
      </div>
  );
}

export default Toenav;