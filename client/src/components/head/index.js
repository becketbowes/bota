import { useState } from 'react'
import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';
import About from '../about';
import Shop from '../shop';
import Gift from '../gift';
import Contact from '../contact';
import Product from '../product';
import Home from '../home';
import Admin from '../admin';
import Login from '../Login'

function Head() {
    const [nav, setNav] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    // const showMenu = () => {
    //     setNav(true);
    // }

    const menu = () => {
        setTimeout(() => setNav(false), 5000)
        setNav(true);
    }

    const handlePageChange = (page) => setCurrentPage(page);
  
    const renderPage = () => {
        if (currentPage === 'Login') {
          return <Login />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Product') {
          return <Product />;
        }
        if (currentPage === 'Shop') {
          return <Shop />;
        }
        if (currentPage === 'Gift') {
          return <Gift />;
        }
        if (currentPage === 'Contact') {
          return <Contact handlePageChange={handlePageChange} />;
        }
        if (currentPage === 'Admin') {
          return <Admin />;
        }
        return < Home/>;
      };
    
    return (
        <header>
            <div className='title' onMouseOver={menu}>
            <img src={logo} className="botalogo" alt="bota" />
            <img src={dot} className="botadot" alt="a round round circle" />
            </div>
            <div>
            <Nav nav={nav} currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            </div>
            
        </header>
    );
}

export default Head;
