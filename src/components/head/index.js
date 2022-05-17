import logo from '../../assets/img/botalogoclear.png';
import dot from '../../assets/img/botadot.png';
import Nav from '../nav';

function Head() {
    return (
        <header>
            <div className='title'>
            <img src={logo} className="botalogo" alt="bota" />
            <img src={dot} className="botadot" alt="a circle, a round round circle" />
            </div>
            <Nav />
        </header>
    );
}

export default Head;
