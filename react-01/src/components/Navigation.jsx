import './css/Navigation.css';
import {Outlet, Link} from "react-router-dom";
import {useState} from "react";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="main-nav">
            <button onClick={toggleMenu}>...</button>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;