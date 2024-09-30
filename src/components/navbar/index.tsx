import { Link } from 'react-router-dom';
import './style.css';
import Logo from '../../assets/logo.svg';

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-brand">

            <img src={Logo} alt="Logo SEMED" width={220} height={60}/>
            </div>
            <div className="navbar-menu">
                <Link to="/calendario" className="navbar-item">Calendario</Link>
                <Link to="/almoxarifado" className="navbar-item">Almoxarifado</Link>
                <Link to="/empenhos" className="navbar-item">Empenhos</Link>
                <Link to="/oficios" className="navbar-item">Ofícios</Link>
            </div>
        </nav>
    )
}

export default Navbar;