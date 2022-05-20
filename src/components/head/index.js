import { useState } from 'react'
import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';
import About from '../about/index';
import Shop from '../shop/index';
import Gift from '../gift/index';
import Contact from '../contact/index';
import Product from '../product/index';
import Home from '../home/index';


function Head() {
    const [nav, setNav] = useState(false);

    // const showMenu = () => {
    //     setNav(true);
    // }

    const menu = () => {
        setTimeout(() => setNav(false), 5000)
        setNav(true);
    }
    const handlePageChange = (page) => setCurrentPage(page);
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
      
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
          return <Contact />;
        }
        // if (currentPage === 'Contact') {
        //   return <Contact />;
        // }
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
