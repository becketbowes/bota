import { useState } from 'react'
import dot from '../../assets/img/botadot.png';
import Toenav from './toenav.js';
import Contact from '../contact/index';
import FAQ from '../FAQ/index';
import Home from '../home/index';

function Toe() {
    const [toenav, setToenav] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');

    const toeMenu = () => {
        setTimeout(() => setToenav(false), 5000)
        setToenav(true);
    }

    const handlePageChange = (page) => setCurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'FAQ') {
            return <FAQ />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return null;
        };

    
    return (
        <footer>
            <div className='toes'>
            <img src={dot} className="botadotdot" alt="a round round circle" onClick={toeMenu}/>
            </div>
            <div>
                <Toenav toenav={toenav} currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
            {/*<Toenav toenav={toenav} /> */}
        </footer>
    );
}

export default Toe;