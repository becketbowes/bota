import { useState } from 'react'
import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';


function Head() {
    const [nav, setNav] = useState(false);

    // const showMenu = () => {
    //     setNav(true);
    // }

    const menu = () => {
        setTimeout(() => setNav(false), 5000)
        setNav(true);
    }
    
    return (
        <header>
            <div className='title' onMouseOver={menu}>
            <img src={logo} className="botalogo" alt="bota" />
            <img src={dot} className="botadot" alt="a round round circle" />
            </div>
            <Nav nav={nav} />
        </header>
    );
}

export default Head;
