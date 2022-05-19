import { useState } from 'react'
import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';


function Head() {
    const [nav, setNav] = useState(false);

    const Menu = () => {
        setTimeout(() => setNav(false), 3000)
        setNav(true);
    }
    
    return (
        <header>
            <div className='title'>
            <img src={logo} className="botalogo" alt="bota" />
            <img src={dot} className="botadot" alt="a round round circle" onClick={Menu}/>
            </div>
            <Nav nav={nav} />
        </header>
    );
}

export default Head;
