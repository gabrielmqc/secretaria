import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className='navbar'>
            <Link to="/home" className="navbar-brand">SEMED</Link>
            <div className="navbar-menu">
                <Link to="/home" className="navbar-item">Home</Link>
                <Link to="/almoxarifado" className="navbar-item">Almoxarifado</Link>
                <Link to="/empenhos" className="navbar-item">Empenhos</Link>
                <Link to="/oficios" className="navbar-item">Ofícios</Link>
            </div>
        </nav>
    )
}

export default Navbar;