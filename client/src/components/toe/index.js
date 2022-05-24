import { useState } from 'react'
import dot from '../../assets/img/botadot.png';
import Toenav from './toenav.js';

function Toe() {
    const [toenav, setToenav] = useState(false);

    const toeMenu = () => {
        setTimeout(() => setToenav(false), 5000)
        setToenav(true);
    }
    
    return (
        <footer>
            <div className='toes'>
            <img src={dot} className="botadotdot" alt="a round round circle" onClick={toeMenu}/>
            </div>
            <div>
                <Toenav toenav={toenav} />
            </div>
            {/*<Toenav toenav={toenav} /> */}
        </footer>
    );
}

export default Toe;