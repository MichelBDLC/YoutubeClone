import { NavLink } from "react-router-dom";
import './css/Navbar.css';
import img from './assets/youtube image.png'

export default function Navbar() {

    return (
        <div className="navigation">
        <img src={img} />
        <h2 className="youtubeH2"> Youtube </h2>
        <nav>
            <NavLink to="/" className="NavLink"> Home </NavLink>
            <NavLink to="/About" className="NavLink"> About </NavLink>
        </nav>
        </div>
    )
}
