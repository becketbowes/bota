import { useState } from 'react';
import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';
import About from '../about';
import Contact from '../contact';
import Product from '../product';
import Home from '../home';
import Login from '../Login';
import SignUp from '../SignUp'
import Detail from '../Detail'



function Head() {
    const [nav, setNav] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    // const showMenu = () => {
    //     setNav(true);
    // }

    const menu = () => {
        setTimeout(() => setNav(false), 4000)
        setNav(true);
    }

    const handlePageChange = (page) => setCurrentPage(page);
  
    const renderPage = () => {
        if (currentPage === 'Login') {
          return <Login />;
        }
        if (currentPage === 'SignUp') {
          return <SignUp />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Product') {
          return <Product />;
        }
        if (currentPage === 'Contact') {
          return <Contact handlePageChange={handlePageChange} />;
        }
        if (currentPage === 'Signup') {
          return <SignUp />;
        }
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'product/:id') {
          return <Detail />;
        }
        return < Home/>;
      };
    
    return (
        <header>
            <div className='title' onMouseOver={menu}>
            <img src={logo} className="botalogo" alt="bota" onClick={() => setCurrentPage('Home')}/>
            <img src={dot} className="botadot" alt="a round round circle" />
            </div>
                <Nav nav={nav} currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
        </header>
    );
}

export default Head;
